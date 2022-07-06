import React, { useCallback } from "react";

import { gql } from "graphql-request";

import isUndefined from "lodash/isUndefined";
import omitBy from "lodash/omitBy";
import shuffle from "lodash/shuffle";
import { APP_PATHS, APP_ROUTES, GraphQLFragments } from "market-webapp-commons";
import { NextSeo } from "next-seo";

import BannerImg from "../../../../public/banners/rg27_banner.jpg";
import TrackPage from "../../../components/TrackPage";
import GraphQLClient from "../../../graphql-client";
import MainLayout from "../../../layout/MainLayout";
import { SeoBaselineConfig } from "../../../seo";
import RainbowGalaProductsView from "../../../views/RainbowGalaProductsView";

const PER_PAGE = 24;

const GET_PRODUCTS_PAGE_GQL = gql`
  ${GraphQLFragments.NOT_FOUND_FRAGMENT}
  ${GraphQLFragments.PRODUCT_SUMMARY_FRAGMENT}
  ${GraphQLFragments.SHOP_SUMMARY_FRAGMENT}
  query RainbowGalaProductsViewGetProducts($filter: WProductFilter) {
    woocommerce {
      products(filter: $filter, maxAge: 300) {
        ...WProductFragment0d4f
        shop {
          ...NotFoundFragment
          ...WShopFragment166f
        }
      }
    }
  }
`;

export const getStaticProps = async ({ params }) => {
  try {
    const match = ["", ...(params.query ?? [])]
      .join("/")
      .match(/^(\/p\/([1-9][0-9]*))?$/);
    if (match === null) throw Error(`query mismatch: ${params.query}`);

    const page = parseInt(match[2], 10) || 1;

    const client = GraphQLClient;

    const filter = omitBy(
      {
        attribute: "pa_rg27_product",
        attribute_term: "TRUE",
        page,
        per_page: PER_PAGE,
      },
      isUndefined
    );
    const variables = {
      filter,
    };
    const resp = await client.request(GET_PRODUCTS_PAGE_GQL, variables);

    return {
      props: {
        data: {
          woocommerce: {
            products: shuffle(resp?.woocommerce?.products),
          },
        },
        filter,
        seo: {
          title: `Rainbow Gala 27 商品 ${page > 1 ? ` 第${page}頁` : ""}`,
          canonical: `${
            SeoBaselineConfig.canonical
          }${APP_ROUTES.EVENT_RAINBOW_GALA_PRODUCTS({
            page,
          })}`,
          images: [
            {
              url: `${SeoBaselineConfig.canonical}${BannerImg.src}`,
              width: 1200,
              height: 600,
              type: "image/jpeg",
            },
          ],
        },
      },
      revalidate: 300,
    };
  } catch (err) {
    //* runs on server
    // eslint-disable-next-line no-console
    console.info(err);
    if (Object.keys(params).length > 0)
      return {
        redirect: {
          destination: APP_ROUTES.EVENT_RAINBOW_GALA_PRODUCTS(),
          permanent: false,
        },
        revalidate: 60,
      };
    return {
      redirect: {
        destination: APP_ROUTES.EVENT_RAINBOW_GALA(),
        permanent: false,
      },
      revalidate: 10,
    };
  }
};

export const getStaticPaths = () => ({
  paths: [],
  fallback: "blocking",
});

export default function Page({ data, filter, seo }) {
  const { page } = filter;
  const { products } = data?.woocommerce ?? {};

  const paginationHref = useCallback(
    (p) =>
      APP_ROUTES.EVENT_RAINBOW_GALA_PRODUCTS({
        page: p,
      }),
    []
  );

  return (
    <>
      <TrackPage
        intent={APP_PATHS.EVENT_RAINBOW_GALA_PRODUCTS}
        data={{ page }}
      />
      <NextSeo
        {...SeoBaselineConfig}
        title={seo.title}
        canonical={seo.canonical}
        openGraph={{
          ...SeoBaselineConfig.openGraph,
          images: seo.images,
          title: seo.title,
          url: seo.canonical,
        }}
      />
      <RainbowGalaProductsView
        products={products}
        filter={{ page, per_page: PER_PAGE }}
        paginationHref={paginationHref}
      />
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

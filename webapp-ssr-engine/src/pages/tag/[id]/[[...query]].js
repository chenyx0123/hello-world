import React from "react";

import { gql } from "graphql-request";

import isUndefined from "lodash/isUndefined";
import omitBy from "lodash/omitBy";
import shuffle from "lodash/shuffle";
import { APP_PATHS, APP_ROUTES, GraphQLFragments } from "market-webapp-commons";
import { NextSeo } from "next-seo";

import TrackPage from "../../../components/TrackPage";
import GraphQLClient from "../../../graphql-client";
import MainLayout from "../../../layout/MainLayout";
import { SeoBaselineConfig } from "../../../seo";
import ProductsView from "../../../views/ProductsView";

const PER_PAGE = 24;

const GET_TAG_PAGE_GQL = gql`
  ${GraphQLFragments.NOT_FOUND_FRAGMENT}
  ${GraphQLFragments.PRODUCT_SUMMARY_FRAGMENT}
  ${GraphQLFragments.SHOP_SUMMARY_FRAGMENT}
  query TagViewGetTagProducts($id: ID!, $filter: WProductFilter) {
    woocommerce {
      tag(id: $id) {
        id
        name
      }
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
      .match(/^(\/search\/([^/]+))?(\/p\/([1-9][0-9]*))?$/);
    if (match === null) throw Error(`query mismatch: ${params.query}`);

    const search = match[2] ?? undefined;
    const page = parseInt(match[4], 10) || 1;

    const client = GraphQLClient;

    const filter = omitBy(
      {
        tag: params.id,
        page,
        per_page: PER_PAGE,
        search,
        stock_status: "instock",
      },
      isUndefined
    );
    const variables = {
      id: params.id,
      filter,
    };
    const resp = await client.request(GET_TAG_PAGE_GQL, variables);

    return {
      props: omitBy(
        {
          data: {
            woocommerce: {
              tag: resp?.woocommerce?.tag,
              products: shuffle(resp?.woocommerce?.products),
            },
          },
          filter,
        },
        isUndefined
      ),
      revalidate: 300,
    };
  } catch (err) {
    //* runs on server
    // eslint-disable-next-line no-console
    console.info(err);
    if (Object.keys(params).length > 0)
      return {
        redirect: {
          destination: APP_ROUTES.TAG({ id: params.id }),
          permanent: true,
        },
        revalidate: 60,
      };
    return {
      notFound: true,
      revalidate: 10,
    };
  }
};

export const getStaticPaths = () => ({
  paths: [],
  fallback: "blocking",
});

export default function Page({ data, filter }) {
  const { search, page } = filter;
  const { tag, products } = data?.woocommerce ?? {};
  const seoTitle =
    (search ? `${search}` : `${tag.name}`) + (page > 1 ? ` 第${page}頁` : "");
  const canonical = `${SeoBaselineConfig.canonical}${APP_ROUTES.TAG({
    id: tag.id,
    search,
    page,
  })}`;
  return (
    <>
      <TrackPage intent={APP_PATHS.TAG} data={{ id: tag.id, page, search }} />
      <NextSeo
        {...SeoBaselineConfig}
        title={seoTitle}
        canonical={canonical}
        openGraph={{
          ...SeoBaselineConfig.openGraph,
          title: seoTitle,
          url: canonical,
        }}
      />
      <ProductsView
        products={products}
        filter={{ ...filter, tag }}
        paginationHref={(p) => APP_ROUTES.TAG({ id: tag.id, search, page: p })}
      />
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

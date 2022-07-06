import React, { useCallback } from "react";

import { gql } from "graphql-request";

import groupBy from "lodash/groupBy";
import isUndefined from "lodash/isUndefined";
import mapValues from "lodash/mapValues";
import omitBy from "lodash/omitBy";
import reduce from "lodash/reduce";
import shuffle from "lodash/shuffle";
import { APP_PATHS, APP_ROUTES, GraphQLFragments } from "market-webapp-commons";
import { NextSeo } from "next-seo";

import TrackPage from "../../components/TrackPage";
import GraphQLClient from "../../graphql-client";
import MainLayout from "../../layout/MainLayout";
import { SeoBaselineConfig } from "../../seo";
import ProductsView from "../../views/ProductsView";

const PER_PAGE = 24;

const GET_PRODUCTS_PAGE_GQL = gql`
  ${GraphQLFragments.NOT_FOUND_FRAGMENT}
  ${GraphQLFragments.PRODUCT_SUMMARY_FRAGMENT}
  ${GraphQLFragments.SHOP_SUMMARY_FRAGMENT}
  query ProductsViewGetProducts($filter: WProductFilter) {
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
      .match(/^(\/featured)?(\/search\/([^/]+))?(\/p\/([1-9][0-9]*))?$/);
    if (match === null) throw Error(`query mismatch: ${params.query}`);

    const featured = !!match[1] || undefined;
    const search = match[3] ?? undefined;
    const page = parseInt(match[5], 10) || 1;

    const client = GraphQLClient;

    const filter = omitBy(
      {
        featured,
        page,
        per_page: featured ? 100 : PER_PAGE,
        search,
        stock_status: "instock",
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
            products: featured
              ? reduce(
                  shuffle(
                    mapValues(
                      groupBy(resp?.woocommerce?.products, (p) => p.shop.id),
                      (v) => shuffle(v)
                    )
                  ),
                  (prev, cur) => [...prev, ...cur],
                  []
                )
              : shuffle(resp?.woocommerce?.products),
          },
        },
        filter,
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
          destination: APP_ROUTES.PRODUCTS(),
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
  const { featured, search, page } = filter;
  const { products } = data?.woocommerce ?? {};

  const seoTitle =
    (search ? `${search}` : `${featured ? "人氣商品" : "所有商品"}`) +
    (page > 1 ? ` 第${page}頁` : "");
  const canonical = `${SeoBaselineConfig.canonical}${APP_ROUTES.PRODUCTS({
    featured,
    search,
    page,
  })}`;

  const paginationHref = useCallback(
    (p) =>
      APP_ROUTES.PRODUCTS({
        featured,
        search,
        page: p,
      }),
    [featured, search]
  );

  return (
    <>
      <TrackPage
        intent={APP_PATHS.PRODUCTS}
        data={{ featured, page, search }}
      />
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
        filter={filter}
        paginationHref={paginationHref}
      />
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

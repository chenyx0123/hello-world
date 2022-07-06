import React from "react";

import getConfig from "next/config";

import { gql } from "graphql-request";

import isUndefined from "lodash/isUndefined";
import omitBy from "lodash/omitBy";
import pick from "lodash/pick";
import shuffle from "lodash/shuffle";
import { APP_PATHS, APP_ROUTES, GraphQLFragments } from "market-webapp-commons";
import { NextSeo } from "next-seo";

import TrackPage from "../components/TrackPage";
import GraphQLClient from "../graphql-client";
import MainLayout from "../layout/MainLayout";
import { SeoBaselineConfig } from "../seo";
import ProductsView from "../views/ProductsView";

const { serverRuntimeConfig } = getConfig();

const PER_PAGE = 24;

const GET_CATEGORY_PAGE_GQL = gql`
  ${GraphQLFragments.NOT_FOUND_FRAGMENT}
  ${GraphQLFragments.PRODUCT_SUMMARY_FRAGMENT}
  ${GraphQLFragments.SHOP_SUMMARY_FRAGMENT}
  query ProductsViewGetProducts(
    $id: ID!
    $includeCategory: Boolean!
    $includeTag: Boolean!
    $filter: WProductFilter
  ) {
    woocommerce {
      category(id: $id) @include(if: $includeCategory) {
        id
        name
      }
      tag(id: $id) @include(if: $includeTag) {
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

export const getServerSideProps = async ({ params, query, res }) => {
  try {
    const validFilter = pick(query, [
      "category",
      "featured",
      "page",
      "search",
      "stock_status",
      "tag",
    ]);
    const client = GraphQLClient;

    const filter = omitBy(
      {
        ...validFilter,
        featured: validFilter.featured === "true" ? true : undefined,
        page: validFilter.page || 1,
        stock_status:
          validFilter.stock_status === "any" ? undefined : "instock",
      },
      isUndefined
    );
    const variables = omitBy(
      {
        id: filter.tag ?? filter.category ?? "",
        includeCategory: !!filter.category,
        includeTag: !!filter.tag,
        filter: { ...filter, per_page: PER_PAGE },
      },
      isUndefined
    );
    const resp = await client.request(GET_CATEGORY_PAGE_GQL, variables);

    res.setHeader("cache-control", "public, max-age=300");
    return {
      props: {
        data: {
          woocommerce: {
            ...resp?.woocommerce,
            products: shuffle(resp?.woocommerce?.products),
          },
        },
        filter,
      },
    };
  } catch (err) {
    //* runs on server
    // eslint-disable-next-line no-console
    console.info(JSON.stringify(err));
    res.setHeader(
      "cache-control",
      `public, max-age=${serverRuntimeConfig.NEXT_PUBLIC_PAGE_ERROR_CACHE_SECONDS}`
    );
    if (Object.keys(params).length > 0)
      return {
        redirect: {
          destination: APP_ROUTES.PRODUCTS(),
          permanent: true,
        },
      };
    return {
      notFound: true,
    };
  }
};

export default function Page({ data, filter }) {
  const { featured, search, page } = filter;
  const { category, tag, products } = data?.woocommerce ?? {};

  const seoTitle =
    (search ? `${search}` : "商品搜尋") + (page > 1 ? ` 第${page}頁` : "");
  const canonical = `${SeoBaselineConfig.canonical}${APP_ROUTES.PRODUCTS({
    featured,
    search,
    page,
  })}`;

  return (
    <>
      <TrackPage
        intent={APP_PATHS.SEARCH}
        data={{ category: category?.id, tag: tag?.id, featured, page, search }}
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
        filter={{ ...filter, category, tag }}
        paginationHref={(p) =>
          APP_ROUTES.SEARCH({
            ...filter,
            page: p,
          })
        }
      />
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

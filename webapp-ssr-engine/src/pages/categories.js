import React from "react";

import getConfig from "next/config";

import { gql } from "graphql-request";

import { APP_PATHS, APP_ROUTES } from "market-webapp-commons";
import { NextSeo } from "next-seo";

import TrackPage from "../components/TrackPage";
import GraphQLClient from "../graphql-client";
import MainLayout from "../layout/MainLayout";
import { SeoBaselineConfig } from "../seo";
import CategoriesView from "../views/CategoriesView";

const { serverRuntimeConfig } = getConfig();

const GET_CATEGORIES_PAGE_GQL = gql`
  query CategoriesViewGetCategoriesPage($filter: WCategoryFilter) {
    woocommerce {
      categories(filter: $filter) {
        id
        name
        description
        image {
          src
        }
        count
      }
    }
  }
`;

export const getServerSideProps = async ({ res }) => {
  try {
    const client = GraphQLClient;

    const resp = await client.request(GET_CATEGORIES_PAGE_GQL, {
      order: "desc",
      orderby: "count",
      per_page: 100,
    });

    res.setHeader("cache-control", "public, max-age=300");
    return {
      props: {
        data: resp,
      },
    };
  } catch (err) {
    //* runs on server
    // eslint-disable-next-line no-console
    console.info(err);
    res.setHeader(
      "cache-control",
      `public, max-age=${serverRuntimeConfig.NEXT_PUBLIC_PAGE_ERROR_CACHE_SECONDS}`
    );
    return {
      notFound: true,
    };
  }
};

export default function Page({ data }) {
  const categories = data?.woocommerce?.categories;
  const seoTitle = "商品類別";
  const canonical = `${SeoBaselineConfig.canonical}${APP_ROUTES.CATEGORIES}`;
  return (
    <>
      <TrackPage intent={APP_PATHS.CATEGORIES} />
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
      <CategoriesView categories={categories} />
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

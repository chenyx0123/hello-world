import React from "react";

import getConfig from "next/config";

import { gql } from "graphql-request";

import { APP_ROUTES, GraphQLFragments } from "market-webapp-commons";
import { NextSeo } from "next-seo";

import TrackPage from "../../components/TrackPage";
import GraphQLClient from "../../graphql-client";
import MainLayout from "../../layout/MainLayout";
import { SeoBaselineConfig } from "../../seo";
import EventMelissaView from "../../views/EventMelissaView";

const { serverRuntimeConfig } = getConfig();

const EVENT_PRODUCTS_ID = [
  35084, 34968, 34962, 34963, 34964, 34965, 34966, 34967,
];

const GET_EVENT_PRODUCTS = gql`
  ${GraphQLFragments.PRODUCT_SUMMARY_FRAGMENT}
  query EventMelissaViewGetEventProducts($ids: [ID!]) {
    woocommerce {
      products(filter: { include: $ids }, maxAge: 300) {
        ...WProductFragment0d4f
      }
    }
  }
`;

export const getServerSideProps = async ({ res }) => {
  try {
    const client = GraphQLClient;

    const variables = { ids: EVENT_PRODUCTS_ID };
    const resp = await client.request(GET_EVENT_PRODUCTS, variables);

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
  const { products } = data?.woocommerce ?? {};
  const seoTitle = "NEON - Meniusa";
  const seoDescription = `Meniusa的商品特輯誕生！喜歡Meniusa的商品嗎？現在立即把商品放入購物車吧！現在購買，還會獲贈官方送出的未來墟特別版明信片兩張~`;
  const images = [
    // TODO
  ];
  const canonical = `${SeoBaselineConfig.canonical}${APP_ROUTES.EVENT_MENIUSA}`;

  return (
    <>
      <TrackPage />
      <NextSeo
        {...SeoBaselineConfig}
        title={seoTitle}
        description={seoDescription}
        canonical={canonical}
        openGraph={{
          ...SeoBaselineConfig.openGraph,
          title: seoTitle,
          url: canonical,
          description: seoDescription,
          images,
        }}
      />
      <EventMelissaView products={products} />
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

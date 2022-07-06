import React from "react";

import getConfig from "next/config";

import { gql } from "graphql-request";

import { APP_ROUTES, GraphQLFragments } from "market-webapp-commons";
import { NextSeo } from "next-seo";

import TrackPage from "../../components/TrackPage";
import GraphQLClient from "../../graphql-client";
import MainLayout from "../../layout/MainLayout";
import { SeoBaselineConfig } from "../../seo";
import EventSpringfishView from "../../views/EventSpringfishView";

const { serverRuntimeConfig } = getConfig();

// 終端少女
const TERMINALGIRL_PRODUCTS_IDS = [119598, 100145, 100144, 99885];

// 瀕臨絕種團 Rescute
const RESCUTE_PRODUCTS_IDS = [119599, 119597, 100148, 100147, 100146];

const GET_EVENT_PRODUCTS = gql`
  ${GraphQLFragments.PRODUCT_SUMMARY_FRAGMENT}
  query EventSpringfishViewGetEventProducts($tg_ids: [ID!]!, $rc_ids: [ID!]) {
    woocommerce {
      terminalGirlProducts: products(
        filter: { include: $tg_ids }
        maxAge: 300
      ) {
        ...WProductFragment0d4f
      }
      rescuteProducts: products(filter: { include: $rc_ids }, maxAge: 300) {
        ...WProductFragment0d4f
      }
    }
  }
`;

export const getServerSideProps = async ({ res }) => {
  try {
    const client = GraphQLClient;

    const variables = {
      tg_ids: TERMINALGIRL_PRODUCTS_IDS,
      rc_ids: RESCUTE_PRODUCTS_IDS,
    };
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
  const { rescuteProducts, terminalGirlProducts } = data?.woocommerce ?? {};
  const seoTitle = "終端少女 / 瀕臨絕種團 Rescute";
  const seoDescription = `《終端少女》+《瀕臨絕種團 Rescute》正式登陸飛天奶茶的未來墟！想看各個繪師大佬們畫出的香香可愛少女，就一定要快點把它們帶回家！`;
  const images = [
    // TODO
  ];
  const canonical = `${SeoBaselineConfig.canonical}${APP_ROUTES.EVENT_SPRINGFISH}`;

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
      <EventSpringfishView
        rescuteProducts={rescuteProducts}
        terminalGirlProducts={terminalGirlProducts}
      />
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

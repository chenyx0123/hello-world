import React from "react";

import getConfig from "next/config";

import { gql } from "graphql-request";

import { convert } from "html-to-text";
import map from "lodash/map";
import { APP_ROUTES, GraphQLFragments } from "market-webapp-commons";
import { NextSeo } from "next-seo";

import TrackPage from "../components/TrackPage";
import GraphQLClient from "../graphql-client";
import MainLayout from "../layout/MainLayout";
import { SeoBaselineConfig } from "../seo";
import EventTinhongView from "../views/EventTinhongView";

const { serverRuntimeConfig } = getConfig();

const TH_D7 = [114758];
const TH_D = [
  115009, 115010, 114757, 114757, 114756, 114755, 114754, 114753, 114752,
];
const TH_AMOEBA = [
  115011, 115012, 114767, 114767, 114766, 114765, 114764, 114763, 114762,
  114761, 114760, 114759,
];

const GET_EVENT_PRODUCTS = gql`
  ${GraphQLFragments.PRODUCT_FRAGMENT}
  query EventTinhongViewGetEventProducts(
    $s1: [ID!]!
    $s2: [ID!]!
    $s3: [ID!]!
  ) {
    woocommerce {
      s1: products(filter: { include: $s1 }) {
        ...WProductFragment
      }
      s2: products(filter: { include: $s2 }) {
        ...WProductFragment
      }
      s3: products(filter: { include: $s3, per_page: 20 }) {
        ...WProductFragment
      }
    }
  }
`;

export const getServerSideProps = async ({ res }) => {
  try {
    const client = GraphQLClient;

    const variables = { s1: TH_D7, s2: TH_D, s3: TH_AMOEBA };
    const products = (await client.request(GET_EVENT_PRODUCTS, variables))
      .woocommerce;

    res.setHeader("cache-control", "public, max-age=300");
    return {
      props: {
        data: { products },
        seo: {
          title: "天航作品全球直航專區",
          description: `由天航老師親自授權，網上訂購天航最新作品《惡之華，聖光之十字》，D系列及愛情阿米巴系列實體書，可寄往任何地區，全套購買更可享有折扣及運費優惠！${convert(
            `<div>${products?.s1?.[0]?.description}</div>`
          ).replace(/\n/g, " ")}`,
          canonical: `${SeoBaselineConfig.canonical}${APP_ROUTES.EVENT_TINHONG}`,
          images: [
            {
              url: `${SeoBaselineConfig.canonical}/th_d7_cover.png`,
              alt: "惡之華，聖光之十字",
            },
            ...map(products.s2, (i) => ({ url: i.main_image, alt: i.name })),
            ...map(products.s3, (i) => ({ url: i.main_image, alt: i.name })),
          ],
        },
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

export default function Page({ data, seo }) {
  const { products } = data;

  return (
    <>
      <TrackPage />
      <NextSeo
        {...SeoBaselineConfig}
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        openGraph={{
          ...SeoBaselineConfig.openGraph,
          title: seo.title,
          description: seo.description,
          url: seo.canonical,
          images: seo.images,
        }}
      />
      <EventTinhongView products={products} />
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

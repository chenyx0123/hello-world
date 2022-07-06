//* This is very ad-hoc, so it is copied from [id]
import React from "react";

import { gql } from "graphql-request";

import { convert } from "html-to-text";
import map from "lodash/map";
import { APP_PATHS, APP_ROUTES, GraphQLFragments } from "market-webapp-commons";
import { NextSeo } from "next-seo";

import TrackPage from "../../components/TrackPage";
import { DownloadImagesAsZipContextProvider } from "../../contexts/DownloadImagesAsZipContext";
import GraphQLClient from "../../graphql-client";
import MainLayout from "../../layout/MainLayout";
import { SeoBaselineConfig } from "../../seo";
import MyaProductView from "../../views/MyaProductView";

const PRODUCT_ID = 128718;

const GET_PRODUCT_PAGE_GQL = gql`
  ${GraphQLFragments.PRODUCT_FRAGMENT}
  ${GraphQLFragments.PRODUCT_SUMMARY_FRAGMENT}
  query ProductViewGetProductPage($id: ID!) {
    woocommerce {
      __typename
      product(id: $id) {
        __typename
        ...WProductFragment
        shop {
          __typename
          ... on WShop {
            id
            __typename
            name
            main_image
            owner {
              id
              __typename
            }
            products(
              filter: {
                exclude: [$id]
                per_page: 10
                order: desc
                orderby: "date"
              }
              maxAge: 300
            ) {
              __typename
              ...WProductFragment0d4f
            }
          }
          ... on NotFound {
            message
          }
        }
      }
    }
  }
`;

export const getServerSideProps = async ({ res }) => {
  try {
    const client = GraphQLClient;

    const variables = { id: PRODUCT_ID };
    const { product } = (await client.request(GET_PRODUCT_PAGE_GQL, variables))
      .woocommerce;

    const seoDescriptionArray = [];
    seoDescriptionArray.push(product.short_description);
    seoDescriptionArray.push(`攤主：${product.shop.name}`);
    if (product.distributor_service) {
      seoDescriptionArray.push("由飛天奶茶代理發售");
    }
    seoDescriptionArray.push(
      convert(`<div>${product.description}</div>`).replace(/\n/g, " ")
    );
    res.setHeader("cache-control", "public, max-age=300");
    return {
      props: {
        data: { product },
        seo: {
          title: [product.name, product.shop.name].join(" | "),
          description: seoDescriptionArray.join(" "),
          canonical: `${SeoBaselineConfig.canonical}${APP_ROUTES.PRODUCT(
            product.id
          )}`,
          images: map(product.images, (img, idx) => ({
            url: img,
            alt: `${product.name} 商品預覽 圖${idx}`,
          })),
        },
      },
    };
  } catch (err) {
    //* runs on server
    // eslint-disable-next-line no-console
    console.info(err);
    return {
      notFound: true,
    };
  }
};

export default function Page({ data, seo }) {
  const { product } = data;

  return (
    <>
      <TrackPage
        intent={APP_PATHS.PRODUCT}
        data={{ id: product.id, name: product.name }}
      />
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
      <DownloadImagesAsZipContextProvider>
        <MyaProductView key={product.id} product={product} />
      </DownloadImagesAsZipContextProvider>
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

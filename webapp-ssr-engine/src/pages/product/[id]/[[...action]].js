import React from "react";

import getConfig from "next/config";

import { gql } from "graphql-request";

import { getCookie } from "cookies-next";
import { convert } from "html-to-text";
import isUndefined from "lodash/isUndefined";
import map from "lodash/map";
import omitBy from "lodash/omitBy";
import { APP_PATHS, APP_ROUTES, GraphQLFragments } from "market-webapp-commons";
import { NextSeo } from "next-seo";

import TrackPage from "../../../components/TrackPage";
import { DownloadImagesAsZipContextProvider } from "../../../contexts/DownloadImagesAsZipContext";
import GraphQLClient from "../../../graphql-client";
import MainLayout from "../../../layout/MainLayout";
import { SeoBaselineConfig } from "../../../seo";
import ProductView from "../../../views/ProductView";

const { serverRuntimeConfig } = getConfig();

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

export const getServerSideProps = async ({ params, req, res }) => {
  let preview;
  if (params.action?.[0] === "preview") {
    preview = true;
    res.setHeader("cache-control", "no-store");
  } else if (!params.action) {
    preview = false;
    res.setHeader("cache-control", "public, max-age=300");
  } else {
    return {
      redirect: {
        destination: APP_ROUTES.PRODUCT(params.id),
        permanent: true,
      },
    };
  }

  try {
    const token = getCookie("authorization", { req, res });
    const client = GraphQLClient;

    const variables = { id: params.id };
    const { product } = (
      await client.request(
        GET_PRODUCT_PAGE_GQL,
        variables,
        preview
          ? omitBy(
              {
                authorization: token ? `Bearer ${token}` : undefined,
              },
              isUndefined
            )
          : {}
      )
    ).woocommerce;

    const seoDescriptionArray = [];
    seoDescriptionArray.push(product.short_description);
    seoDescriptionArray.push(`攤主：${product.shop.name}`);
    if (product.distributor_service) {
      seoDescriptionArray.push("由飛天奶茶代理發售");
    }
    seoDescriptionArray.push(
      convert(`<div>${product.description}</div>`).replace(/\n/g, " ")
    );

    return {
      props: {
        data: { product, preview },
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
  const { product, preview } = data;

  return (
    <>
      {!preview && (
        <TrackPage
          intent={APP_PATHS.PRODUCT}
          data={{ id: product.id, name: product.name }}
        />
      )}
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
        <ProductView key={product.id} product={product} preview={preview} />
      </DownloadImagesAsZipContextProvider>
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

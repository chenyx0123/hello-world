import React from "react";

import getConfig from "next/config";

import { gql } from "graphql-request";

import { getCookie } from "cookies-next";
import { convert } from "html-to-text";
import isUndefined from "lodash/isUndefined";
import omitBy from "lodash/omitBy";
import { APP_PATHS, APP_ROUTES, GraphQLFragments } from "market-webapp-commons";
import { NextSeo } from "next-seo";

import TrackPage from "../../../components/TrackPage";
import { DownloadImagesAsZipContextProvider } from "../../../contexts/DownloadImagesAsZipContext";
import GraphQLClient from "../../../graphql-client";
import MainLayout from "../../../layout/MainLayout";
import { SeoBaselineConfig } from "../../../seo";
import ShopView from "../../../views/ShopView";

const { serverRuntimeConfig } = getConfig();

const GET_SHOP_PAGE_GQL = gql`
  ${GraphQLFragments.PRODUCT_SUMMARY_FRAGMENT}
  query ShopViewGetShopPage($id: ID!) {
    woocommerce {
      shop(id: $id) {
        ... on WShop {
          id
          status
          name
          short_description
          description
          featured
          main_image
          banner_image
          owner {
            id
          }
          instock_products: products(
            filter: { stock_status: instock, per_page: 100 }
            maxAge: 300
          ) {
            ...WProductFragment0d4f
          }
          outofstock_products: products(
            filter: { stock_status: outofstock, per_page: 100 }
            maxAge: 300
          ) {
            ...WProductFragment0d4f
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
        destination: APP_ROUTES.SHOP(params.id),
        permanent: true,
      },
    };
  }

  try {
    const token = getCookie("authorization", { req, res });
    const client = GraphQLClient;

    const variables = { id: params.id };
    const { shop } = (
      await client.request(
        GET_SHOP_PAGE_GQL,
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
    seoDescriptionArray.push(shop.short_description);
    seoDescriptionArray.push(
      convert(`<div>${shop.description}</div>`).replace(/\n/g, " ")
    );

    return {
      props: {
        data: { shop, preview },
        seo: {
          title: shop.name,
          description: seoDescriptionArray.join(" "),
          canonical: `${SeoBaselineConfig.canonical}${APP_ROUTES.SHOP(
            shop.id
          )}`,
          images: [
            {
              url: shop?.main_image,
              alt: `${shop.name} 攤位圖`,
            },
            {
              url: shop?.banner_image,
              alt: `${shop.name} 攤主頭像`,
            },
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
  const { shop, preview } = data;

  return (
    <>
      {!preview && (
        <TrackPage
          intent={APP_PATHS.SHOP}
          data={{ id: shop.id, name: shop.name }}
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
        <ShopView key={shop.id} shop={shop} preview={preview} />
      </DownloadImagesAsZipContextProvider>
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

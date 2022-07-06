import React from "react";

import { gql } from "graphql-request";

import { convert } from "html-to-text";
import { APP_PATHS, APP_ROUTES } from "market-webapp-commons";
import { NextSeo } from "next-seo";

import TrackPage from "../../../components/TrackPage";
import GraphQLClient from "../../../graphql-client";
import MainLayout from "../../../layout/MainLayout";
import { SeoBaselineConfig } from "../../../seo";
import DonationView from "../../../views/DonationView";

const GET_SHOP_PAGE_GQL = gql`
  query DonationViewGetShopPage($id: ID!) {
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
        }
      }
    }
  }
`;

export const getStaticProps = async ({ params }) => {
  try {
    const client = GraphQLClient;

    const variables = { id: params.id };
    const { shop } = (await client.request(GET_SHOP_PAGE_GQL, variables))
      .woocommerce;

    const seoDescriptionArray = [];
    seoDescriptionArray.push(shop.short_description);
    seoDescriptionArray.push(
      convert(`<div>${shop.description}</div>`).replace(/\n/g, " ")
    );
    return {
      props: {
        data: { shop, preview: shop.status !== "publish" },
        seo: {
          title: `打賞給 ${shop.name}`,
          description: seoDescriptionArray.join(" "),
          canonical: `${SeoBaselineConfig.canonical}${APP_ROUTES.SHOP_DONATE(
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
      revalidate: 300,
    };
  } catch (err) {
    //* runs on server
    // eslint-disable-next-line no-console
    console.info(err);
    return {
      notFound: true,
      revalidate: 60,
    };
  }
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default function Page({ data, seo }) {
  const { shop, preview } = data;

  return (
    <>
      {!preview && (
        <TrackPage
          intent={APP_PATHS.SHOP_DONATE}
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
      <DonationView shop={shop} preview={preview} />
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

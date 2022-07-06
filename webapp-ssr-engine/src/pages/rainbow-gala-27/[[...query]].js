/* eslint-disable camelcase */
import React from "react";

import { gql } from "graphql-request";

import _filter from "lodash/filter";
import _toArray from "lodash/toArray";
import { APP_PATHS, APP_ROUTES, GraphQLFragments } from "market-webapp-commons";
import { NextSeo } from "next-seo";

import BannerImg from "../../../public/banners/rg27_banner.jpg";
import TrackPage from "../../components/TrackPage";
import GraphQLClient from "../../graphql-client";
import MainLayout from "../../layout/MainLayout";
import { SeoBaselineConfig } from "../../seo";
import RainbowGalaView from "../../views/RainbowGalaView";

const GET_RAINBOW_GALA_PAGE_GQL = gql`
  ${GraphQLFragments.NOT_FOUND_FRAGMENT}
  ${GraphQLFragments.PRODUCT_SUMMARY_FRAGMENT}
  ${GraphQLFragments.SHOP_SUMMARY_FRAGMENT}
  query RainbowGalaPage($filter: Rg27ShopFilter) {
    woocommerce {
      rg27_shops(filter: $filter) {
        id
        rg27_day1_color
        rg27_day1_floor
        rg27_day2_color
        rg27_day2_floor
        rg27_booth_number
        rg27_name
        rg27_image
        rg27_show_name_on_booth
      }
      rg27_products(filter: { per_page: 24 }, maxAge: 300) {
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
      .match(/^((\/day([12])-([36])f)?(\/([a-z]+))?)?$/);
    if (match === null)
      throw Error(`query mismatch: ${JSON.stringify(params)}`);

    const day = match[3];
    const floor = match[4];
    const rg27_day1_floor =
      day === "1" ? `${floor === "3" ? "THIRD" : "SIXTH"}_FLOOR` : null;
    const rg27_day2_floor =
      day === "2" ? `${floor === "3" ? "THIRD" : "SIXTH"}_FLOOR` : null;
    const rg27_color = match[6] ?? null;

    const client = GraphQLClient;

    const variables = {
      filter: {
        rg27_day1_floor,
        rg27_day2_floor,
        per_page: 100,
      },
    };
    const { rg27_shops, rg27_products } = (
      await client.request(GET_RAINBOW_GALA_PAGE_GQL, variables)
    ).woocommerce;

    return {
      props: {
        data: {
          rg27_shops: _toArray(
            _filter(
              rg27_shops,
              (s) =>
                !(rg27_color ?? rg27_day1_floor ?? rg27_day2_floor) ||
                !rg27_color ||
                ((s.rg27_day1_color === rg27_color?.toUpperCase() ||
                  s.rg27_day2_color === rg27_color?.toUpperCase()) &&
                  (!rg27_day1_floor ||
                    s.rg27_day1_color === rg27_color?.toUpperCase()) &&
                  (!rg27_day2_floor ||
                    s.rg27_day2_color === rg27_color?.toUpperCase()))
            )
          ),
          rg27_products,
        },
        filter: { rg27_color, rg27_floor: day ? `day${day}-${floor}f` : null },
        seo: {
          title: "Rainbow Gala 27 線上販售區",
          canonical: `${
            SeoBaselineConfig.canonical
          }${APP_ROUTES.EVENT_RAINBOW_GALA()}`,
          images: [
            {
              url: `${SeoBaselineConfig.canonical}${BannerImg.src}`,
              width: 1200,
              height: 600,
              type: "image/jpeg",
              alt: `Rainbow Gala 27 線上販售區`,
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

export default function Page({ data, filter, seo }) {
  const { rg27_products, rg27_shops } = data;

  return (
    <>
      <TrackPage intent={APP_PATHS.EVENT_RAINBOW_GALA} data={filter} />
      <NextSeo
        {...SeoBaselineConfig}
        title={seo.title}
        canonical={seo.canonical}
        openGraph={{
          ...SeoBaselineConfig.openGraph,
          images: seo.images,
          title: seo.title,
          url: seo.canonical,
        }}
      />
      <RainbowGalaView
        rg27_products={rg27_products}
        rg27_shops={rg27_shops}
        {...filter}
      />
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

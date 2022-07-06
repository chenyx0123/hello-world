import React, { useMemo } from "react";

import getConfig from "next/config";

import { gql } from "graphql-request";

import filter from "lodash/filter";
import groupBy from "lodash/groupBy";
import isUndefined from "lodash/isUndefined";
import mapValues from "lodash/mapValues";
import omitBy from "lodash/omitBy";
import reduce from "lodash/reduce";
import shuffle from "lodash/shuffle";
import sortBy from "lodash/sortBy";
import take from "lodash/take";
import { APP_PATHS, APP_ROUTES, GraphQLFragments } from "market-webapp-commons";
import { NextSeo } from "next-seo";

import azuriteImg from "../../public/banners/azurite_banner.jpg";
import districtFolderImg from "../../public/banners/district_folder_banner.jpg";
import lordOfTheRingImg from "../../public/banners/lotr_banner.jpg";
import melissaImg from "../../public/banners/melissa_banner.jpg";
import miconImg from "../../public/banners/mic_on_banner.jpg";
import rgImg from "../../public/banners/rg27_banner.jpg";
import springfishImg from "../../public/banners/springfish_banner.jpg";
import tinhongImg from "../../public/banners/tinhong_banner.jpg";
import TrackPage from "../components/TrackPage";
import GraphQLClient from "../graphql-client";
import MainLayout from "../layout/MainLayout";
import { SeoBaselineConfig } from "../seo";
import MainView from "../views/MainView";

const { serverRuntimeConfig } = getConfig();

const CAROUSEL_BANNERS = {
  districtFolder: {
    src: districtFolderImg,
    href: APP_ROUTES.PRODUCT(34888),
  },
  melissa: {
    src: melissaImg,
    href: APP_ROUTES.EVENT_MENIUSA,
  },
  springfish: {
    src: springfishImg,
    href: APP_ROUTES.EVENT_SPRINGFISH,
  },
  azurite: {
    src: azuriteImg,
    href: APP_ROUTES.SHOP(79651),
  },
  tinhong: {
    src: tinhongImg,
    href: APP_ROUTES.EVENT_TINHONG,
  },
  lotr: {
    src: lordOfTheRingImg,
    href: "https://www.flyingmilktea.com/news/lotrrisetowarrules/",
  },
  rg: {
    src: rgImg,
    href: APP_ROUTES.EVENT_RAINBOW_GALA(),
  },
  micon: {
    src: miconImg,
    href: APP_ROUTES.SHOP(121902),
  },
};

const CAROUSELS = [
  {
    id: "districtFolder",
    priority: 0,
  },
  {
    id: "melissa",
    priority: 0,
  },
  {
    id: "springfish",
    priority: 1,
  },
  {
    id: "azurite",
    priority: 0,
  },
  {
    id: "tinhong",
    priority: 1,
  },
  { id: "lotr", priority: 2, endDate: Date.parse("2022-07-01T00:00:00+08:00") },
  { id: "rg", priority: 4, endDate: Date.parse("2022-06-05T23:59:59+08:00") },
  {
    id: "micon",
    priority: 3,
    startDate: Date.parse("2022-05-21T20:00:00+08:00"),
  },
];

const GET_MAIN_PAGE_GQL = gql`
  ${GraphQLFragments.NOT_FOUND_FRAGMENT}
  ${GraphQLFragments.PRODUCT_SUMMARY_FRAGMENT}
  ${GraphQLFragments.SHOP_SUMMARY_FRAGMENT}
  query MainViewGetMainPage {
    woocommerce {
      tags(
        filter: {
          order: desc
          orderby: "count"
          per_page: 36
          hide_empty: true
        }
        maxAge: 300
      ) {
        id
        name
      }
      categories(filter: { order: desc, orderby: "count", per_page: 100 }) {
        id
        name
      }
      newProducts: products(
        filter: {
          allow_cache: true
          per_page: 12
          recent: true
          status: publish
          stock_status: instock
        }
        maxAge: 300
      ) {
        ...WProductFragment0d4f
        shop {
          __typename
          ...NotFoundFragment
          ...WShopFragment166f
        }
      }
      featuredProducts: products(
        filter: {
          allow_cache: true
          featured: true
          per_page: 100
          status: publish
          stock_status: instock
        }
        maxAge: 300
      ) {
        ...WProductFragment0d4f
        shop {
          ...NotFoundFragment
          ...WShopFragment166f
        }
      }
      shops(
        filter: { allow_cache: true, per_page: 12, orderby: "popularity" }
        maxAge: 300
      ) {
        ... on WShop {
          id
          main_image
          banner_image
          name
        }
      }
    }
  }
`;

export const getServerSideProps = async ({ res }) => {
  try {
    const client = GraphQLClient;

    const resp = await client.request(GET_MAIN_PAGE_GQL);

    res.setHeader("cache-control", "public, max-age=300");
    return {
      props: omitBy(
        {
          data: {
            carousels: sortBy(
              shuffle(
                filter(
                  CAROUSELS,
                  (x) =>
                    (!x.startDate || Date.now() > x.startDate) &&
                    (!x.endDate || x.endDate > Date.now())
                )
              ),
              (x) => -x.priority
            ),
            woocommerce: {
              categories: resp.woocommerce.categories,
              tags: shuffle(resp.woocommerce.tags),
              featuredProducts: reduce(
                shuffle(
                  mapValues(
                    groupBy(
                      resp.woocommerce.featuredProducts,
                      (p) => p.shop.id
                    ),
                    (v) => take(shuffle(v), 2)
                  )
                ),
                (prev, cur) => [...prev, ...cur],
                []
              ),
              newProducts: shuffle(resp.woocommerce.newProducts),
              shops: shuffle(resp.woocommerce.shops),
            },
          },
        },
        isUndefined
      ),
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
  const { carousels, woocommerce } = data;
  const seoTitle = "飛天奶茶未來墟";
  const titleTemplate = "%s";
  const canonical = `${SeoBaselineConfig.canonical}${APP_ROUTES.HOME}`;

  const carouselBanners = useMemo(
    () => mapValues(carousels, (x) => CAROUSEL_BANNERS[x.id]),
    [carousels]
  );

  return (
    <>
      <TrackPage intent={APP_PATHS.HOME} />
      <NextSeo
        {...SeoBaselineConfig}
        titleTemplate={titleTemplate}
        title={seoTitle}
        canonical={canonical}
        openGraph={{
          ...SeoBaselineConfig.openGraph,
          title: seoTitle,
          url: canonical,
        }}
      />
      <MainView carouselBanners={carouselBanners} {...woocommerce} />
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

import React, { useCallback } from "react";

import { useRouter } from "next/router";

import { gql } from "graphql-request";

import isUndefined from "lodash/isUndefined";
import omitBy from "lodash/omitBy";
import shuffle from "lodash/shuffle";
import { APP_PATHS, APP_ROUTES, GraphQLFragments } from "market-webapp-commons";
import { NextSeo } from "next-seo";

import TrackPage from "../../components/TrackPage";
import GraphQLClient from "../../graphql-client";
import MainLayout from "../../layout/MainLayout";
import { SeoBaselineConfig } from "../../seo";
import ShopsView from "../../views/ShopsView";

const PER_PAGE = 24;

const GET_SHOPS_PAGE_GQL = gql`
  ${GraphQLFragments.SHOP_SUMMARY_FRAGMENT}
  query ShopsViewGetShops($filter: WShopFilter) {
    woocommerce {
      shops(filter: $filter, maxAge: 300) {
        ...WShopFragment166f
      }
    }
  }
`;

export const getStaticProps = async ({ params }) => {
  try {
    const match = ["", ...(params.query ?? [])]
      .join("/")
      .match(/^(\/search\/([^/]+))?(\/p\/([1-9][0-9]*))?$/);
    if (match === null) throw Error(`query mismatch: ${params.query}`);

    const search = match[2] ?? undefined;
    const page = parseInt(match[4], 10) || 1;

    const client = GraphQLClient;

    const filter = omitBy(
      {
        page,
        per_page: PER_PAGE,
        search,
      },
      isUndefined
    );
    const variables = {
      filter,
    };
    const resp = await client.request(GET_SHOPS_PAGE_GQL, variables);

    return {
      props: omitBy(
        {
          data: {
            woocommerce: { shops: shuffle(resp?.woocommerce?.shops) },
          },
          filter,
        },
        isUndefined
      ),
      revalidate: 300,
    };
  } catch (err) {
    //* runs on server
    // eslint-disable-next-line no-console
    console.info(err);
    if (Object.keys(params).length > 0)
      return {
        redirect: {
          destination: APP_ROUTES.SHOPS(),
          permanent: true,
        },
        revalidate: 60,
      };
    return {
      notFound: true,
      revalidate: 10,
    };
  }
};

export const getStaticPaths = () => ({
  paths: [],
  fallback: "blocking",
});

export default function Page({ data, filter }) {
  const router = useRouter();

  const { search, page } = filter;
  const shops = data?.woocommerce?.shops;

  const seoTitle =
    (search ? `攤位 ${search}` : "攤位") + (page > 1 ? ` 第${page}頁` : "");
  const canonical = `${SeoBaselineConfig.canonical}${APP_ROUTES.SHOPS({
    search,
    page,
  })}`;

  const onSearch = useCallback(
    (f) => {
      router.push(APP_ROUTES.SHOPS({ search: f.search }));
    },
    [router]
  );

  const paginationHref = useCallback(
    (p) =>
      APP_ROUTES.SHOPS({
        search,
        page: p,
      }),
    [search]
  );

  return (
    <>
      <TrackPage intent={APP_PATHS.SHOPS} data={{ page, search }} />
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
      <ShopsView
        shops={shops}
        filter={filter}
        onSearch={onSearch}
        paginationHref={paginationHref}
      />
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

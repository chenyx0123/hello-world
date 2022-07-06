import React, { useCallback } from "react";

import { useRouter } from "next/router";

import { gql } from "graphql-request";

import isUndefined from "lodash/isUndefined";
import omitBy from "lodash/omitBy";
import { APP_PATHS, APP_ROUTES } from "market-webapp-commons";
import { NextSeo } from "next-seo";

import TrackPage from "../../components/TrackPage";
import GraphQLClient from "../../graphql-client";
import MainLayout from "../../layout/MainLayout";
import { SeoBaselineConfig } from "../../seo";
import TagsView from "../../views/TagsView";

const GET_TAGS_PAGE_GQL = gql`
  query TagsViewGetTags($filter: WTagFilter) {
    woocommerce {
      tags(filter: $filter) {
        id
        name
        description
        count
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

    const variables = {
      filter: {
        order: "desc",
        orderby: "count",
        page,
        per_page: 100,
        search,
      },
    };
    const resp = await client.request(GET_TAGS_PAGE_GQL, variables);

    return {
      props: omitBy(
        {
          data: resp,
          page,
          search,
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
          destination: APP_ROUTES.TAGS(),
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

export default function Page({ data, page, search }) {
  const router = useRouter();

  const tags = data?.woocommerce?.tags;

  const seoTitle =
    (search ? `標籤 ${search}` : "熱門標籤") + (page > 1 ? `第${page}頁` : "");
  const canonical = `${SeoBaselineConfig.canonical}${APP_ROUTES.TAGS({
    page,
    search,
  })}`;

  const onSearch = useCallback(
    (f) => {
      router.push(APP_ROUTES.TAGS({ search: f.search }));
    },
    [router]
  );

  return (
    <>
      <TrackPage intent={APP_PATHS.TAGS} data={{ page, search }} />
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
      <TagsView tags={tags} filter={{ search }} onSearch={onSearch} />
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

import React from "react";

import { useRouter } from "next/router";

import { APP_PATHS } from "market-webapp-commons";

import TrackPage from "../components/TrackPage";
import MainLayout from "../layout/MainLayout";
import ErrorNotFoundView from "../views/ErrorNotFoundView";

export const getStaticProps = async () => ({
  props: {},
});

export default function Page() {
  const router = useRouter();

  return (
    <>
      <TrackPage intent={APP_PATHS.NOT_FOUND} data={{ path: router.asPath }} />
      <ErrorNotFoundView />
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

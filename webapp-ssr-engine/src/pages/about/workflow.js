import React from "react";

import TrackPage from "../../components/TrackPage";
import MainLayout from "../../layout/MainLayout";
import MarketWorkflowView from "../../views/MarketWorkflowView";

export const getStaticProps = async () => ({
  props: {},
});

export default function Page() {
  return (
    <>
      <TrackPage />
      <MarketWorkflowView />
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

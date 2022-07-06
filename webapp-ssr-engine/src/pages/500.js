import React from "react";

import TrackPage from "../components/TrackPage";
import MainLayout from "../layout/MainLayout";
import ErrorServerMaintenanceView from "../views/ErrorServerMaintenanceView";

export const getStaticProps = async () => ({
  props: {},
});

export default function Page() {
  return (
    <>
      <TrackPage />
      <ErrorServerMaintenanceView />
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

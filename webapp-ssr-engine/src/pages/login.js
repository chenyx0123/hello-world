import React from "react";

import { APP_ROUTES } from "market-webapp-commons";
import { NextSeo } from "next-seo";

import TrackPage from "../components/TrackPage";
import { SeoBaselineConfig } from "../seo";
import LoginView from "../views/LoginView/index";

export default function Page() {
  const seoTitle = "登入 — 飛天奶茶";
  const canonical = `${SeoBaselineConfig.canonical}${APP_ROUTES.LOGIN()}`;
  const images = [
    {
      url: `${SeoBaselineConfig.canonical}/login-background.png`,
      alt: "登入 — 飛天奶茶",
    },
  ];
  return (
    <>
      <TrackPage />
      <NextSeo
        {...SeoBaselineConfig}
        title={seoTitle}
        canonical={canonical}
        openGraph={{
          ...SeoBaselineConfig.openGraph,
          title: seoTitle,
          url: canonical,
          images,
        }}
      />
      <LoginView />
    </>
  );
}

export const getServerSideProps = async ({ res }) => {
  res.setHeader("cache-control", "public, max-age=86400");
  return {
    props: {},
  };
};

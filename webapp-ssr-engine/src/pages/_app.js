import React, { useEffect, useMemo } from "react";

import getConfig from "next/config";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter, withRouter } from "next/router";
import Script from "next/script";

import { CssBaseline, ThemeProvider } from "@mui/material";

import { CacheProvider } from "@emotion/react";
import "lazysizes";
import {
  AuthProvider,
  CartProvider,
  GraphQLClientContext,
  RegionProvider,
  WalletProvider,
} from "market-webapp-commons";
import { DefaultSeo } from "next-seo";

import { AmplitudeProvider } from "../contexts/AmplitudeContext";
import { SettingsProvider } from "../contexts/SettingsContext";
import createEmotionCache from "../createEmotionCache";
import GraphQLClient from "../graphql-client";
import useSettings from "../hooks/useSettings";
import { SeoDefaultConfig } from "../seo";
import createCustomTheme from "../theme";
import "./_app.css";

const Toaster = dynamic(() => import("react-hot-toast").then((m) => m.Toaster));
const RoutedAuthProvider = withRouter(AuthProvider);
const RoutedCartProvider = withRouter(CartProvider);

// https://github.com/mui-org/material-ui/tree/285e72875b9e7c9d6fc7303ccd54f0db16a4160d/examples/nextjs/
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const NEXT_PUBLIC_GTAG_ID =
  publicRuntimeConfig?.NEXT_PUBLIC_GTAG_ID ??
  serverRuntimeConfig?.NEXT_PUBLIC_GTAG_ID ??
  process.env.NEXT_PUBLIC_GTAG_ID;

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", NEXT_PUBLIC_GTAG_ID, {
        page_path: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const { settings } = useSettings();

  const theme = createCustomTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    roundedCorners: settings.roundedCorners,
    theme: settings.theme,
  });
  const getLayout = Component.getLayout ?? ((page) => page);

  const client = useMemo(() => ({ client: GraphQLClient }), []);

  return (
    <AmplitudeProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Script
          async
          // google tag manager
          // https://nextjs.org/docs/messages/next-script-for-ga
          src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GTAG_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', "${NEXT_PUBLIC_GTAG_ID}");
        `}
        </Script>
        <DefaultSeo {...SeoDefaultConfig} />
        <GraphQLClientContext.Provider value={client}>
          <RoutedAuthProvider>
            <WalletProvider>
              <RoutedCartProvider>
                <SettingsProvider>
                  <RegionProvider>
                    <ThemeProvider theme={theme}>
                      <CssBaseline />
                      <Toaster
                        position="bottom-left"
                        reverseOrder
                        toastOptions={{
                          style: {
                            borderRadius: "2px",
                            boxShadow:
                              "0 2px 5px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 2.5%)",
                          },
                        }}
                      />
                      {getLayout(<Component {...pageProps} />)}
                    </ThemeProvider>
                  </RegionProvider>
                </SettingsProvider>
              </RoutedCartProvider>
            </WalletProvider>
          </RoutedAuthProvider>
        </GraphQLClientContext.Provider>
      </CacheProvider>
    </AmplitudeProvider>
  );
}

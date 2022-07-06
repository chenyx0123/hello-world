import React, { StrictMode } from "react";

import { RouterContext } from "next/dist/shared/lib/router-context";
import * as NextImage from "next/image";

import { CssBaseline, ThemeProvider } from "@mui/material";

import { CacheProvider } from "@emotion/react";
import "lazysizes";
import some from "lodash/some";
import { RegionContext } from "market-webapp-commons";

import { initialSettings } from "../src/contexts/SettingsContext";
import createEmotionCache from "../src/createEmotionCache";
import createCustomTheme from "../src/theme";
import IMAGE_DIMENSION from "./cache/image-dimension.json";
import { TEST_VIEWPORT_SET } from "./viewports";

// HACK https://dev.to/jonasmerlin/how-to-use-the-next-js-image-component-in-storybook-1415
const UnoptimizedNextImage = NextImage.default;
Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
    <UnoptimizedNextImage
      {...IMAGE_DIMENSION[props.src]}
      {...props}
      unoptimized
      blurDataURL={props.placeholder === "blur" ? props.src : undefined}
      priority
    />
  ),
});

const toLocalCurrency = (x) => {
  if (typeof x == "string") {
    return x
      .split(" - ")
      .map((x) => `HK$1312.1`)
      .join(" - ");
  } else if (typeof x == "number") {
    return `HK$1371.3`;
  }
  return x;
};

// https://github.com/vercel/next.js/issues/36417
Object.defineProperty(NextImage, "__esModule", {
  configurable: true,
  value: true,
});

const theme = createCustomTheme({
  direction: initialSettings.direction,
  responsiveFontSizes: initialSettings.responsiveFontSizes,
  roundedCorners: initialSettings.roundedCorners,
  theme: initialSettings.theme,
});

export const decorators = [
  (Story) => {
    const cache = createEmotionCache();
    window.onload = () => {
      const forceEagerlyLoadLazyload = () => {
        const els = document.getElementsByClassName("lazyload");
        Array.from(els).forEach((el) => {
          if (!el.getAttribute("src") && el.getAttribute("data-src"))
            el.setAttribute("src", el.getAttribute("data-src"));
        });
      };
      forceEagerlyLoadLazyload();
      const targetNode = document.getElementById("root");
      const config = { attributes: true, childList: true, subtree: true };
      const callback = (mutationsList) => {
        if (some(mutationsList, (m) => m.type === "childList")) {
          forceEagerlyLoadLazyload();
        }
      };
      const observer = new MutationObserver(callback);
      observer.observe(targetNode, config);
      window.onbeforeunload = () => {
        observer.disconnect();
      };
    };

    return (
      <StrictMode>
        <CacheProvider value={cache}>
          <ThemeProvider theme={theme}>
            <RegionContext.Provider value={{ toLocalCurrency }}>
              <CssBaseline />
              <Story />
            </RegionContext.Provider>
          </ThemeProvider>
        </CacheProvider>
      </StrictMode>
    );
  },
];

export const parameters = {
  viewport: {
    viewports: TEST_VIEWPORT_SET,
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  layout: "fullscreen",
};

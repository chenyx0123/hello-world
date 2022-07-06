import getConfig from "next/config";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

// These provide a default, but shall be overridden in EVERY page
const DEFAULT = {
  title: "飛天奶茶 未來墟",
  description: "飛天奶茶",
};

const baselineConfig = {
  titleTemplate: "%s | 飛天奶茶未來墟",
  description: "飛天奶茶",
  canonical: `https://${
    publicRuntimeConfig?.NEXT_PUBLIC_CANONICAL_DOMAIN_NAME ??
    serverRuntimeConfig?.NEXT_PUBLIC_CANONICAL_DOMAIN_NAME ??
    process.env.NEXT_PUBLIC_CANONICAL_DOMAIN_NAME
  }`,
  keywords:
    "人工智能,深度學習,飛天奶茶,artificial intelligence,deep learning,flying milk tea",
  openGraph: {
    url: `https://${
      publicRuntimeConfig?.NEXT_PUBLIC_CANONICAL_DOMAIN_NAME ??
      serverRuntimeConfig?.NEXT_PUBLIC_CANONICAL_DOMAIN_NAME ??
      process.env.NEXT_PUBLIC_CANONICAL_DOMAIN_NAME
    }`,
    type: "website",
    site_name: "飛天奶茶",
    title: DEFAULT.title,
    description: DEFAULT.description,
    locale: "zh_HK",
    images: [
      {
        url: "/logo.png",
        width: 300,
        height: 300,
        alt: "飛天奶茶",
        type: "image/png",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "icon",
      href: "/apple-touch-icons.ico",
      sizes: "180x180",
    },
  ],
};

const USE_BASELINE_SEO_DEFAULT =
  publicRuntimeConfig?.NEXT_PUBLIC_USE_BASELINE_SEO_DEFAULT ??
  serverRuntimeConfig?.NEXT_PUBLIC_USE_BASELINE_SEO_DEFAULT ??
  process.env.NEXT_PUBLIC_USE_BASELINE_SEO_DEFAULT;

const defaultConfig = USE_BASELINE_SEO_DEFAULT
  ? {
      ...baselineConfig,
      dangerouslySetAllPagesToNoIndex:
        baselineConfig.canonical !== "https://market.flyingmilktea.com",
      defaultTitle: DEFAULT.title,
    }
  : {};

export const SeoBaselineConfig = baselineConfig;
export const SeoDefaultConfig = defaultConfig;

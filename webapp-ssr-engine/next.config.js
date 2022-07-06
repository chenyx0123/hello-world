const path = require("path");

let moduleExports = {
  // This is not a comment, do not delete
  // MARKER: replace-runtime-options
  compress: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  serverRuntimeConfig: {
    NEXT_PUBLIC_AMPLITUDE_KEY: process.env.NEXT_PUBLIC_AMPLITUDE_KEY,
    NEXT_PUBLIC_CANONICAL_DOMAIN_NAME:
      process.env.NEXT_PUBLIC_CANONICAL_DOMAIN_NAME,
    NEXT_PUBLIC_GRAPHQL_URL: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    NEXT_PUBLIC_GTAG_ID: process.env.NEXT_PUBLIC_GTAG_ID,
    NEXT_PUBLIC_PAGE_ERROR_CACHE_SECONDS: 30,
    NEXT_PUBLIC_USE_BASELINE_SEO_DEFAULT:
      process.env.NEXT_PUBLIC_USE_BASELINE_SEO_DEFAULT,
    NEXT_PUBLIC_BUILD_COMMIT_ID: process.env.NEXT_PUBLIC_BUILD_COMMIT_ID,
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_AMPLITUDE_KEY: process.env.NEXT_PUBLIC_AMPLITUDE_KEY,
    NEXT_PUBLIC_CANONICAL_DOMAIN_NAME:
      process.env.NEXT_PUBLIC_CANONICAL_DOMAIN_NAME,
    NEXT_PUBLIC_GRAPHQL_URL: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    NEXT_PUBLIC_GTAG_ID: process.env.NEXT_PUBLIC_GTAG_ID,
    NEXT_PUBLIC_USE_BASELINE_SEO_DEFAULT:
      process.env.NEXT_PUBLIC_USE_BASELINE_SEO_DEFAULT,
    NEXT_PUBLIC_BUILD_COMMIT_ID: process.env.NEXT_PUBLIC_BUILD_COMMIT_ID,
  },
  webpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias = {
      ...config.resolve.alias,
      graphql: path.resolve("./node_modules/graphql"),
      "graphql-request": path.resolve("./node_modules/graphql-request"),
      react: path.resolve("./node_modules/react"),
    };
    // eslint-disable-next-line no-param-reassign
    config.resolve.fallback = {
      fs: false,
      path: false,
      os: false,
    };
    // eslint-disable-next-line no-param-reassign
    config.module.rules.push({
      // add list of internal libraries here to enable source map
      test: /.*market-webapp-commons.*\.js$/,
      use: ["source-map-loader"],
      enforce: "pre",
    });

    return config;
  },
};

try {
  if (process.env.ANALYZE_BUNDLE === "true") {
    // eslint-disable-next-line import/no-extraneous-dependencies,global-require
    const withBundleAnalyzer = require("@next/bundle-analyzer")({
      enabled: process.env.ANALYZE_BUNDLE === "true",
    });
    moduleExports = withBundleAnalyzer(moduleExports);
  }
} catch (e) {
  // eslint-disable-next-line no-console
  console.warn(e);
}

module.exports = moduleExports;

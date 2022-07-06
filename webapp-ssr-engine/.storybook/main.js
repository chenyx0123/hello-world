// HACK Get a singleton instance of @emotion/styled, otherwise style in storybook not sync with actual build

// https://medium.com/encode/setting-up-storybook-with-material-ui-and-styled-components-5bdacb6db866
// https://github.com/mui-org/material-ui/issues/24282
// https://github.com/storybookjs/storybook/issues/12262

const path = require("path");
const { merge } = require("webpack-merge");

// HACK: for next/image to work requires image size info, this module "compiles" the size information to a json file to be loaded by storybook run-time
require("./main/compile-image-dimension");

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.snapshot.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-viewport",
    "storybook-addon-next-router",
  ],
  core: {
    builder: "webpack5",
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });
    if (process.env.STORYBOOK_DISABLE_WATCH) {
      config.watchOptions = { ignored: /.*/ };
    }
    return merge(config, {
      resolve: {
        alias: {
          "@emotion/core": getPackageDir("@emotion/react"),
          "@emotion/styled": getPackageDir("@emotion/styled"),
          "emotion-theming": getPackageDir("@emotion/react"),
        },
      },
    });
  },
};

const getPackageDir = (p) => {
  return path.dirname(require.resolve(path.join(p, "package.json")));
};

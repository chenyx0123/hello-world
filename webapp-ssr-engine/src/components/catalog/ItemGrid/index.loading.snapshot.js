import React from "react";

import { Box } from "@mui/material";

import mapValues from "lodash/mapValues";
import range from "lodash/range";

import ItemGrid from ".";
import { TEST_VIEWPORT_SET } from "../../../../.storybook/viewports";

export default {
  title: "📷/components/catalog/ItemGrid/index.loading",
  component: ItemGrid,
};

const TestComponent = ({ size }) => (
  <Box border="1px solid #F00" pb="100%" position="relative">
    <Box
      alignItems="center"
      display="flex"
      height="100%"
      justifyContent="center"
      position="absolute"
      width="100%"
    >
      {size}
    </Box>
  </Box>
);

const TestPlaceholderComponent = ({ size }) => (
  <Box border="1px solid #00F" pb="100%" position="relative">
    <Box
      alignItems="center"
      display="flex"
      height="100%"
      justifyContent="center"
      position="absolute"
      width="100%"
    >
      {size}
    </Box>
  </Box>
);

const Template = () => (
  <ItemGrid
    items={range(12)}
    component={TestComponent}
    placeholder={TestPlaceholderComponent}
    loading
  />
);

const {
  fullscreen1080p,
  fullscreen1080px150,
  fullscreen720p,
  galaxys9,
  halfscreen1080p,
  halfscreen1080px150,
  halfscreen720p,
  ipad,
  ipad10p,
  ipad12p,
  iphone12,
  iphone12promax,
  iphone5,
  iphonese2,
  pixel,
  pixelxl,
} = mapValues(TEST_VIEWPORT_SET, (v, k) => {
  const BoundComponent = Template.bind({});
  BoundComponent.storyName = v.name;
  BoundComponent.args = {
    viewportName: k,
  };
  BoundComponent.parameters = {
    viewport: {
      defaultViewport: k,
    },
  };
  return BoundComponent;
});

export {
  fullscreen1080p,
  fullscreen1080px150,
  fullscreen720p,
  galaxys9,
  halfscreen1080p,
  halfscreen1080px150,
  halfscreen720p,
  ipad,
  ipad10p,
  ipad12p,
  iphone12,
  iphone12promax,
  iphone5,
  iphonese2,
  pixel,
  pixelxl,
};

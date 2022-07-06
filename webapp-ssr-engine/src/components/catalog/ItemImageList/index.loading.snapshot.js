import React from "react";

import { Box } from "@mui/material";

import mapValues from "lodash/mapValues";
import range from "lodash/range";

import ItemImageList from ".";
import { TEST_VIEWPORT_SET } from "../../../../.storybook/viewports";

export default {
  title: "📷/components/catalog/ItemImageList/index.loading",
  component: ItemImageList,
};

const TestComponent = () => <Box border="1px solid #F00" paddingTop="100%" />;

const TestPlaceholderPatch = () => (
  <Box border="1px solid #00F" paddingTop="100%" />
);

const Template = () => (
  <ItemImageList
    items={range(9)}
    cols={3}
    component={TestComponent}
    placeholder={TestPlaceholderPatch}
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

import React from "react";

import { Chip } from "@mui/material";

import mapValues from "lodash/mapValues";
import range from "lodash/range";

import ItemFlexList from ".";
import { TEST_VIEWPORT_SET } from "../../../../.storybook/viewports";

export default {
  title: "📷/components/catalog/ItemFlexList/index.loading",
  component: ItemFlexList,
};

const TestComponent = ({ size }) => (
  <Chip label="test" color="primary" size={size} />
);

const TestPlaceholderComponent = ({ size }) => (
  <Chip label="test" color="secondary" size={size} />
);

const Template = () => (
  <ItemFlexList
    items={range(50)}
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

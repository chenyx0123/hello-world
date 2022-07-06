import React from "react";

import map from "lodash/map";
import mapValues from "lodash/mapValues";
import range from "lodash/range";

import ItemFlexList from ".";
import { TEST_VIEWPORT_SET } from "../../../../.storybook/viewports";
import LinkedChipItem from "../LinkedChipItem";

export default {
  title: "📷/components/catalog/ItemFlexList/index.LinkedChipItem",
  component: ItemFlexList,
};

const Template = () => (
  <ItemFlexList
    items={map(range(50), (x) => ({ id: x, name: x }))}
    component={LinkedChipItem}
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

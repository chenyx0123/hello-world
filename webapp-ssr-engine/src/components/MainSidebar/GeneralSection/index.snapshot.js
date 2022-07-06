import React from "react";

import mapValues from "lodash/mapValues";

import GeneralSection from ".";
import { TEST_VIEWPORT_SET } from "../../../../.storybook/viewports";

export default {
  title: "📷/components/MainSidebar/GeneralSection/index",
  component: GeneralSection,
};

const Template = () => <GeneralSection />;

const {
  fullscreen1080p,
  fullscreen720p,
  galaxys9,
  halfscreen1080p,
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
  fullscreen720p,
  galaxys9,
  halfscreen1080p,
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

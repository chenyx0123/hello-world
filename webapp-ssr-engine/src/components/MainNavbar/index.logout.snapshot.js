import React from "react";

import mapValues from "lodash/mapValues";

import MainNavbar from ".";
import { TEST_VIEWPORT_SET } from "../../../.storybook/viewports";

export default {
  title: "📷/components/MainNavbar/index.logout",
  component: MainNavbar,
};

const Template = () => <MainNavbar isAuthenticated={false} />;

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
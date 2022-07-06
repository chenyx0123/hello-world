import React from "react";

import mapValues from "lodash/mapValues";

import ImageCarouselModel from ".";
import { TEST_VIEWPORT_SET } from "../../../../../../.storybook/viewports";

export default {
  title:
    "📷/views/ProductView/components/ImageCarousel/ImageCarouselModal/index.horizontal",
  component: ImageCarouselModel,
};

const Template = () => (
  <ImageCarouselModel
    open
    src="https://market-static.flyingmilktea.com/_/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/5d47bca3-f457-4fb5-b2f8-480585fdd092.jpg?w=480&h=270&f=cover"
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

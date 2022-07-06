import React from "react";

import mapValues from "lodash/mapValues";

import ImageCarousel from ".";
import { TEST_VIEWPORT_SET } from "../../../../../.storybook/viewports";

export default {
  title: "📷/views/ProductView/components/ImageCarousel/index.single",
  component: ImageCarousel,
};

const product = {
  images: [
    "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/5d47bca3-f457-4fb5-b2f8-480585fdd092.jpg",
  ],
};

const Template = () => <ImageCarousel product={product} />;

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

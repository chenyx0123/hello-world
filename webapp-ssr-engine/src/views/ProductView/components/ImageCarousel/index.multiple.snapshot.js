import React from "react";

import mapValues from "lodash/mapValues";

import ImageCarousel from ".";
import { TEST_VIEWPORT_SET } from "../../../../../.storybook/viewports";

export default {
  title: "📷/views/ProductView/components/ImageCarousel/index.multiple",
  component: ImageCarousel,
};

const product = {
  images: [
    "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/5d47bca3-f457-4fb5-b2f8-480585fdd092.jpg",
    "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/2bab6ec2-5539-4177-852c-e727d5fb87d1.jpg",
    "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/ba9c637b-d615-4380-90bd-42c22381fa49.jpg",
    "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/9ec64f3a-ec5d-4ec7-9b14-7e969a1e9fb5.jpg",
    "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/34c22e9b-3805-4602-b2f3-2ce30bb4fe89.jpg",
    "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/3d3e1bf7-7a37-4598-b4e1-71ad8a92dec4.jpg",
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

import React from "react";

import mapValues from "lodash/mapValues";

import ShippingList from ".";
import { TEST_VIEWPORT_SET } from "../../../../../.storybook/viewports";

export default {
  title: "📷/views/ProductView/components/ShippingList/index",
  component: ShippingList,
};

const product = {
  id: "109940",
  shipping: [
    {
      __typename: "Shipping",
      method: "本地掛號",
      region: "HK",
      shippingFeeFirst: 0,
      shippingFeeAdditional: 0,
    },
    {
      __typename: "Shipping",
      method: "「智郵站」領件",
      region: "HK",
      shippingFeeFirst: 0,
      shippingFeeAdditional: 0,
    },
    {
      __typename: "Shipping",
      method: "順豐到付",
      region: "ALL",
      shippingFeeFirst: 0,
      shippingFeeAdditional: 0,
    },
    {
      __typename: "Shipping",
      method: "海外郵寄掛號",
      region: "ALL",
      shippingFeeFirst: 0,
      shippingFeeAdditional: 0,
    },
  ],
};

const Template = () => <ShippingList product={product} />;

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

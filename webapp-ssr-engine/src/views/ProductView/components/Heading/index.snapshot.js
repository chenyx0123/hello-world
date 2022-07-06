import React from "react";

import mapValues from "lodash/mapValues";

import Heading from ".";
import { TEST_VIEWPORT_SET } from "../../../../../.storybook/viewports";

export default {
  title: "📷/views/ProductView/components/Heading/index",
  component: Heading,
};

const product = {
  __typename: "WProduct",
  shop: {
    __typename: "WShop",
    id: "35009",
    name: "元氣幻想",
    main_image:
      "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/shop-avatar/6de1fc8f-6e62-4450-8128-b7e6c7c8844c.jpg",
    owner: { __typename: "User", id: "4436" },
  },
  id: "109940",
  name: "CUT NG！(RG25限定套組)",
  distributor_service: false,
};

const Template = () => <Heading product={product} />;

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

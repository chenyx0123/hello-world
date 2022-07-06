import React from "react";

import mapValues from "lodash/mapValues";

import DonationView from ".";
import { TEST_VIEWPORT_SET } from "../../../.storybook/viewports";

export default {
  title: "📷/views/DonationView/index",
  component: DonationView,
};

const shop = {
  __typename: "WShop",
  id: "35345",
  name: "little hairy flower little hairy flower ",
  short_description:
    "Me draw anything pops up in my head.就簡單來說 我什麼都畫 想到便畫 畫到便想（？）",
  description:
    '<p>就簡單來說 我什麼都畫 想到便畫 畫到便想（？）</p>\n<p>資深正太控 只會畫小正太</p>\n<p>姨姨一枚</p>\n</p>\n<p>社團網店</p>\n<p>軽狂社</p>\n<p><a href="https://kuruidoujin.boutir.com/" target="_blank" rel="noopener noreferrer">https://kuruidoujin.boutir.com/</a>&nbsp;</p></p>\n',
  featured: false,
  main_image:
    "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/littlehairyflower/shop-avatar/37538b7e-2de8-49fd-80d2-a6bfe4a15f7c.jpg",
  banner_image:
    "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/littlehairyflower/shop-banner/19ced451-0cae-4f6d-acb9-a042dc62c475.jpg",
  owner: { __typename: "User", id: "4513" },
};

const Template = () => <DonationView shop={shop} />;

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

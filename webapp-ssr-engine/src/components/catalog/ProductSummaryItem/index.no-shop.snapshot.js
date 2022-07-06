import React from "react";

import { Grid } from "@mui/material";

import mapValues from "lodash/mapValues";

import ProductSummaryItem from ".";
import { TEST_VIEWPORT_SET } from "../../../../.storybook/viewports";

export default {
  title: "📷/components/catalog/ProductSummaryItem/index.no-shop",
  component: ProductSummaryItem,
};

const item = {
  id: "109940",
  name: "CUT NG！(RG25限定套組)CUT NG！(RG25限定套組)CUT NG！(RG25限定套組)",
  short_description:
    "Digimon Adventure 拍攝花絮本Digimon Adventure 拍攝花絮本Digimon Adventure 拍攝花絮本Digimon Adventure 拍攝花絮本Digimon Adventure 拍攝花絮本Digimon Adventure 拍攝花絮本Digimon Adventure 拍攝花絮本Digimon Adventure 拍攝花絮本Digimon Adventure 拍攝花絮本Digimon Adventure 拍攝花絮本Digimon Adventure 拍攝花絮本Digimon Adventure 拍攝花絮本Digimon Adventure 拍攝花絮本Digimon Adventure 拍攝花絮本Digimon Adventure 拍攝花絮本Digimon Adventure 拍攝花絮本Digimon Adventure 拍攝花絮本Digimon Adventure 拍攝花絮本",
  stock_status: "instock",
  status: "publish",
  price: null,
  price_text: "40 - 250",
  virtual: true,
  distributor_service: false,
  images: [
    "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/5d47bca3-f457-4fb5-b2f8-480585fdd092.jpg",
    "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/2bab6ec2-5539-4177-852c-e727d5fb87d1.jpg",
    "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/ba9c637b-d615-4380-90bd-42c22381fa49.jpg",
    "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/9ec64f3a-ec5d-4ec7-9b14-7e969a1e9fb5.jpg",
    "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/34c22e9b-3805-4602-b2f3-2ce30bb4fe89.jpg",
    "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/3d3e1bf7-7a37-4598-b4e1-71ad8a92dec4.jpg",
  ],
};
const Template = () => (
  <Grid container>
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <ProductSummaryItem item={item} size="large" />
    </Grid>
  </Grid>
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

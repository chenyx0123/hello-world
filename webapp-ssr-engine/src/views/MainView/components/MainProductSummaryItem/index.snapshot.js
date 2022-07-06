import React from "react";

import { Grid } from "@mui/material";

import mapValues from "lodash/mapValues";

import MainProductSummaryItem from ".";
import { TEST_VIEWPORT_SET } from "../../../../../.storybook/viewports";

export default {
  title: "📷/views/MainView/components/MainProductSummaryItem/index",
  component: MainProductSummaryItem,
};

const item1 = {
  __typename: "WProduct",
  shop: {
    __typename: "WShop",
    id: "116103",
    name: "紙漫糖",
    main_image:
      "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/%E8%8B%A6%E8%8B%A6/shop-avatar/33d41c2e-7895-41be-a7cb-7e22153581b2.jpg",
    owner: { __typename: "User", id: "22458" },
  },
  id: "121414",
  name: "Vtuber－噶嗚·古拉(紙模型) Vtuber－噶嗚·古拉(紙模型) Vtuber－噶嗚·古拉(紙模型)",
  slug: "vtuber%ef%bc%8d%e5%99%b6%e5%97%9a%c2%b7%e5%8f%a4%e6%8b%89%e7%b4%99%e6%a8%a1%e5%9e%8b",
  date_created_gmt: "2021-11-08T21:44:08.000Z",
  date_modified_gmt: "2021-12-16T09:00:10.000Z",
  type: "simple",
  is_r18: false,
  variations: null,
  stock_quantity: 29,
  stock_status: "instock",
  status: "publish",
  featured: true,
  price: 79,
  price_text: "79",
  regular_price: 79,
  sale_price: null,
  date_on_sale_from_gmt: null,
  date_on_sale_to_gmt: null,
  purchasable: true,
  virtual: false,
  distributor_service: true,
  digitalAssetAuthorized: null,
  digitalAssets: null,
  categories: [
    {
      __typename: "WCategory",
      id: "111",
      name: "模型",
      image: {
        __typename: "WImage",
        name: "5",
        src: "http://wp-d-dev-kf-s2-graphql.flyingpigs.ninja/wp-content/uploads/2020/07/5.png",
        alt: "",
      },
    },
  ],
  tags: [
    {
      __typename: "WTag",
      id: "1141",
      name: "飛天奶茶代理商品",
      slug: "%e9%a3%9b%e5%a4%a9%e5%a5%b6%e8%8c%b6%e4%bb%a3%e7%90%86%e5%95%86%e5%93%81-2",
      description: "",
    },
  ],
  main_image:
    "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/%E8%8B%A6%E8%8B%A6/product-image/4d4ed4ea-d8fa-42c5-a259-38dfb8d21b9e.jpg",
  images: [
    "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/%E8%8B%A6%E8%8B%A6/product-image/4d4ed4ea-d8fa-42c5-a259-38dfb8d21b9e.jpg",
  ],
  menu_order: 0,
  shipping: [
    {
      __typename: "Shipping",
      method: "順豐到付(從台北倉庫發貨)",
      region: "TW",
      shippingFeeFirst: 0,
      shippingFeeAdditional: 0,
    },
    {
      __typename: "Shipping",
      method: "順豐到付(從香港倉庫發貨)",
      region: "HK",
      shippingFeeFirst: 0,
      shippingFeeAdditional: 0,
    },
    {
      __typename: "Shipping",
      method: "與飛天奶茶聯絡",
      region: "ALL",
      shippingFeeFirst: 0,
      shippingFeeAdditional: 0,
    },
  ],
};
const item2 = {
  __typename: "WProduct",
  shop: {
    __typename: "WShop",
    id: "116103",
    name: "紙漫糖",
    main_image:
      "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/%E8%8B%A6%E8%8B%A6/shop-avatar/33d41c2e-7895-41be-a7cb-7e22153581b2.jpg",
    owner: { __typename: "User", id: "22458" },
  },
  id: "121414",
  name: "Vtuber－噶嗚·古拉",
  slug: "vtuber%ef%bc%8d%e5%99%b6%e5%97%9a%c2%b7%e5%8f%a4%e6%8b%89%e7%b4%99%e6%a8%a1%e5%9e%8b",
  date_created_gmt: "2021-11-08T21:44:08.000Z",
  date_modified_gmt: "2021-12-16T09:00:10.000Z",
  type: "simple",
  is_r18: false,
  variations: null,
  stock_quantity: 29,
  stock_status: "instock",
  status: "publish",
  featured: true,
  price: 79,
  price_text: "79",
  regular_price: 79,
  sale_price: null,
  date_on_sale_from_gmt: null,
  date_on_sale_to_gmt: null,
  purchasable: true,
  virtual: false,
  distributor_service: true,
  digitalAssetAuthorized: null,
  digitalAssets: null,
  categories: [
    {
      __typename: "WCategory",
      id: "111",
      name: "模型",
      image: {
        __typename: "WImage",
        name: "5",
        src: "http://wp-d-dev-kf-s2-graphql.flyingpigs.ninja/wp-content/uploads/2020/07/5.png",
        alt: "",
      },
    },
  ],
  tags: [
    {
      __typename: "WTag",
      id: "1141",
      name: "飛天奶茶代理商品",
      slug: "%e9%a3%9b%e5%a4%a9%e5%a5%b6%e8%8c%b6%e4%bb%a3%e7%90%86%e5%95%86%e5%93%81-2",
      description: "",
    },
  ],
  main_image:
    "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/%E8%8B%A6%E8%8B%A6/product-image/4d4ed4ea-d8fa-42c5-a259-38dfb8d21b9e.jpg",
  images: [
    "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/%E8%8B%A6%E8%8B%A6/product-image/4d4ed4ea-d8fa-42c5-a259-38dfb8d21b9e.jpg",
  ],
  menu_order: 0,
  shipping: [
    {
      __typename: "Shipping",
      method: "順豐到付(從台北倉庫發貨)",
      region: "TW",
      shippingFeeFirst: 0,
      shippingFeeAdditional: 0,
    },
    {
      __typename: "Shipping",
      method: "順豐到付(從香港倉庫發貨)",
      region: "HK",
      shippingFeeFirst: 0,
      shippingFeeAdditional: 0,
    },
    {
      __typename: "Shipping",
      method: "與飛天奶茶聯絡",
      region: "ALL",
      shippingFeeFirst: 0,
      shippingFeeAdditional: 0,
    },
  ],
};
const Template = () => (
  <Grid container>
    <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
      <MainProductSummaryItem item={item1} size="medium" />
    </Grid>
    <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
      <MainProductSummaryItem item={item2} size="medium" />
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

import React from "react";

import { Grid } from "@mui/material";

import mapValues from "lodash/mapValues";

import ProductSummaryItem from ".";
import { TEST_VIEWPORT_SET } from "../../../../.storybook/viewports";

export default {
  title: "📷/components/catalog/ProductSummaryItem/index.large",
  component: ProductSummaryItem,
};

const item = {
  __typename: "WProduct",
  shop: {
    __typename: "WShop",
    id: "116103",
    name: "紙漫糖",
    main_image:
      "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/%E8%8B%A6%E8%8B%A6/shop-avatar/33d41c2e-7895-41be-a7cb-7e22153581b2.jpg",
    owner: { __typename: "User", id: "22458" },
    products: [
      {
        __typename: "WProduct",
        id: "121415",
        name: "VTuber－潤羽露西婭（紙模型）",
        virtual: false,
        distributor_service: true,
        is_r18: false,
        short_description: "紙模型－非完成品，需要自行剪貼完成",
        price_text: "79",
        main_image:
          "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/%E8%8B%A6%E8%8B%A6/product-image/e759d9d6-b673-439d-8bdf-3525952b5c94.jpg",
        sale_price: null,
        regular_price: 79,
        type: "simple",
        stock_status: "instock",
        variations: null,
        categories: [{ __typename: "WCategory", id: "111", name: "模型" }],
        tags: [{ __typename: "WTag", id: "1141", name: "飛天奶茶代理商品" }],
      },
      {
        __typename: "WProduct",
        id: "121413",
        name: "VTuber－宝鐘瑪琳（紙模型）",
        virtual: false,
        distributor_service: true,
        is_r18: false,
        short_description: "紙模型－非完成品，需要自行剪貼完成",
        price_text: "74",
        main_image:
          "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/%E8%8B%A6%E8%8B%A6/product-image/00fcdab2-1c35-4ca4-89b3-3611a2ef6651.jpg",
        sale_price: null,
        regular_price: 74,
        type: "simple",
        stock_status: "instock",
        variations: null,
        categories: [{ __typename: "WCategory", id: "111", name: "模型" }],
        tags: [{ __typename: "WTag", id: "1141", name: "飛天奶茶代理商品" }],
      },
      {
        __typename: "WProduct",
        id: "116673",
        name: "Vtuber－兔田佩克拉(紙模型)",
        virtual: false,
        distributor_service: true,
        is_r18: false,
        short_description: "紙模型－非完成品，需要自行剪貼完成",
        price_text: "92",
        main_image:
          "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/%E8%8B%A6%E8%8B%A6/product-image/8c7490a7-f429-41d4-8271-22cc0c6c13fe.jpg",
        sale_price: null,
        regular_price: 92,
        type: "simple",
        stock_status: "instock",
        variations: null,
        categories: [{ __typename: "WCategory", id: "111", name: "模型" }],
        tags: [{ __typename: "WTag", id: "1141", name: "飛天奶茶代理商品" }],
      },
    ],
  },
  id: "121414",
  name: "Vtuber－噶嗚·古拉(紙模型)",
  description:
    '<p>紙模型－非完成品，需要自行剪貼完成<br />----------------------------------------</p>\n<p style="text-align:start"><span style="font-size: 16px;font-family: inherit">🌟這是飛天奶茶官方代理販售商品🌟</span></p>\n<p style="text-align:start"><span style="font-size: 16px">👇🏻</span><span style="font-size: 16px;font-family: inherit">凡是購買</span><span style="font-size: 16px"> </span><a href="https://market.flyingmilktea.com/tag/1141" target="_self" rel="noopener noreferrer"><span style="color: inherit;font-size: 16px;font-family: inherit"><ins>飛天奶茶代理商品</ins></span></a><span style="font-size: 16px"> </span><span style="font-size: 16px;font-family: inherit">滿四件或以上、或希望郵寄到其他不在選項內的國家、或希望使用其他不在選項內的郵遞方式（例如掛號、速遞、到付等）👇🏻</span></p>\n<p style="text-align:start"><span style="font-size: 16px;font-family: inherit">1. 在郵寄選項中請選擇「與飛天奶茶聯絡」</span></p>\n<p style="text-align:left"><span style="font-size: 16px">2️. </span><a href="https://market.flyingmilktea.com/chat?targetID=19" target="_blank" rel="noopener noreferrer"><span style="font-size: 16px"><ins>聯絡飛天奶茶官方</ins></span></a></p>\n<p style="text-align:start"><span style="font-size: 16px;font-family: inherit">3️. 等待飛天奶茶的工作人員聯絡您，為您計算運費</span></p>\n<p style="text-align:start"><span style="font-size: 16px">4️. 按工作人員指示，到 </span><a href="https://market.flyingmilktea.com/product/83701" target="_blank" rel="noopener noreferrer"><span style="font-size: 16px"><ins>官方運費</ins></span></a><span style="font-size: 16px"> 購買相應件數</span></p>\n</p>\n<p style="text-align:start"><span style="font-size: 16px;font-family: inherit">⚠️買家請自行承擔任何郵寄風險，普通平郵/空郵並無郵件追蹤功能，如有需要請加掛號。⚠️</span></p>\n</p>\n<p style="text-align:start"><span style="font-size: 16px;font-family: inherit">如使用順便智能櫃到付或自取點到付，下單時請於「地址」一欄中填寫智能櫃/自取點編號。</span></p>\n<p style="text-align:start"><span style="font-size: 16px;font-family: inherit">順豐也有可能寄失，如有需要請通知飛天奶茶官方加購保險。</span></p>\n',
  short_description: "紙模型－非完成品，需要自行剪貼完成",
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

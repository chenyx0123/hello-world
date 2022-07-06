import React from "react";

import mapValues from "lodash/mapValues";

import ProductView from ".";
import { TEST_VIEWPORT_SET } from "../../../.storybook/viewports";

export default {
  title: "📷/views/ProductView/index.physical_outofstock",
  component: ProductView,
};

const product = {
  __typename: "WProduct",
  shop: {
    __typename: "WShop",
    id: "108500",
    name: "如月瑠美【HKVTuber】",
    main_image:
      "https://market-static.flyingmilktea.com/rumiikisaragi/shop-avatar/7af566b4-e630-40df-b02e-74af568dd2b1.jpg",
    owner: { __typename: "User", id: "20474" },
    products: [
      {
        __typename: "WProduct",
        id: "116777",
        name: "如月瑠美新衣裝紀念週邊",
        virtual: false,
        distributor_service: true,
        is_r18: false,
        short_description:
          "如月瑠美新衣裝紀念週邊|帆布袋、零錢包、立牌、襟章、貼紙|售完即止",
        price_text: "25 - 500",
        main_image:
          "https://market-static.flyingmilktea.com/rumiikisaragi/product-image/a2f7ddd4-23ca-4750-b884-140c527bed86.jpg",
        sale_price: null,
        regular_price: null,
        type: "variable",
        stock_status: "instock",
        variations: [
          {
            __typename: "WProductVariation",
            id: "116928",
            sale_price: null,
            regular_price: 500,
          },
          {
            __typename: "WProductVariation",
            id: "116929",
            sale_price: null,
            regular_price: 70,
          },
          {
            __typename: "WProductVariation",
            id: "116930",
            sale_price: null,
            regular_price: 80,
          },
          {
            __typename: "WProductVariation",
            id: "116931",
            sale_price: null,
            regular_price: 80,
          },
          {
            __typename: "WProductVariation",
            id: "116932",
            sale_price: null,
            regular_price: 140,
          },
          {
            __typename: "WProductVariation",
            id: "116933",
            sale_price: null,
            regular_price: 25,
          },
          {
            __typename: "WProductVariation",
            id: "116934",
            sale_price: null,
            regular_price: 25,
          },
          {
            __typename: "WProductVariation",
            id: "116935",
            sale_price: null,
            regular_price: 25,
          },
          {
            __typename: "WProductVariation",
            id: "116936",
            sale_price: null,
            regular_price: 25,
          },
          {
            __typename: "WProductVariation",
            id: "116937",
            sale_price: null,
            regular_price: 80,
          },
          {
            __typename: "WProductVariation",
            id: "116938",
            sale_price: null,
            regular_price: 40,
          },
          {
            __typename: "WProductVariation",
            id: "117136",
            sale_price: null,
            regular_price: 200,
          },
        ],
        categories: [
          { __typename: "WCategory", id: "121", name: "吊飾/襟章" },
          { __typename: "WCategory", id: "120", name: "貼紙/紙膠帶" },
        ],
        tags: [
          { __typename: "WTag", id: "1575", name: "HKVtuber" },
          { __typename: "WTag", id: "1623", name: "如月ルミィ" },
          { __typename: "WTag", id: "1622", name: "如月瑠美" },
          { __typename: "WTag", id: "1141", name: "飛天奶茶代理商品" },
          { __typename: "WTag", id: "1464", name: "香港Vtuber" },
        ],
      },
      {
        __typename: "WProduct",
        id: "109233",
        name: "如月瑠美5000訂閱紀念週邊",
        virtual: false,
        distributor_service: true,
        is_r18: false,
        short_description: "壓克力鑰匙扣+兩款閃粉瓶吊飾",
        price_text: "50 - 90",
        main_image:
          "https://market-static.flyingmilktea.com/rumiikisaragi/product-image/93a3860c-a5ee-4607-a70c-310e13d78259.jpg",
        sale_price: null,
        regular_price: null,
        type: "variable",
        stock_status: "outofstock",
        variations: [
          {
            __typename: "WProductVariation",
            id: "109698",
            sale_price: null,
            regular_price: 50,
          },
          {
            __typename: "WProductVariation",
            id: "112908",
            sale_price: null,
            regular_price: 50,
          },
          {
            __typename: "WProductVariation",
            id: "112909",
            sale_price: null,
            regular_price: 50,
          },
          {
            __typename: "WProductVariation",
            id: "112910",
            sale_price: null,
            regular_price: 90,
          },
        ],
        categories: [{ __typename: "WCategory", id: "121", name: "吊飾/襟章" }],
        tags: [
          { __typename: "WTag", id: "1575", name: "HKVtuber" },
          { __typename: "WTag", id: "1623", name: "如月ルミィ" },
          { __typename: "WTag", id: "1622", name: "如月瑠美" },
          { __typename: "WTag", id: "1141", name: "飛天奶茶代理商品" },
          { __typename: "WTag", id: "1464", name: "香港Vtuber" },
        ],
      },
    ],
  },
  id: "121457",
  name: "如月瑠美2021年生日紀念週邊套裝",
  description:
    '<p>如月瑠美2021年生日紀念週邊套裝<span>｜</span>咖啡廳約會掛畫/親簽色紙/紋身貼</p>\n<p>預購截止日期: 11月30日 23:59<span>｜</span>預定發貨時間: 12月下旬</p>\n<p>**親簽色紙(TO:XX)名字會跟飛天奶茶帳號名稱寫，若希望手寫卡上寫的名稱與飛天奶茶帳號名稱不一樣，請必須在填寫收件地址的那個欄目內標明希望在色紙上寫的名稱！(也別忘了要填寫自己的地址喔！</p>\n</p>\n<p>▼商品簡介▼</p>\n<p>1. 咖啡廳約會掛畫 40cmx60cm</p>\n<p>2. 親筆簽名色紙 15cmx15cm</p>\n<p>3. 惡魔紋身貼紙 (一套5個)</p>\n<p>----------------------------------------</p>\n<p style="text-align:start"><span style="font-size: 16px;font-family: inherit">🌟這是飛天奶茶官方代理販售商品🌟</span></p>\n<p style="text-align:start"><span style="font-size: 16px">👇🏻</span><span style="font-size: 16px;font-family: inherit">凡是購買</span><span style="font-size: 16px"> </span><a href="https://market.flyingmilktea.com/tag/1141" target="_self" rel="noopener noreferrer"><span style="color: inherit;font-size: 16px;font-family: inherit"><ins>飛天奶茶代理商品</ins></span></a><span style="font-size: 16px"> </span><span style="font-size: 16px;font-family: inherit">滿四件或以上、或希望郵寄到其他不在選項內的國家、或希望使用其他不在選項內的郵遞方式（例如掛號、速遞、到付等）👇🏻</span></p>\n<p style="text-align:start"><span style="font-size: 16px;font-family: inherit">1. 在郵寄選項中請選擇「與飛天奶茶聯絡」</span></p>\n<p style="text-align:left"><span style="font-size: 16px">2️. </span><a href="https://market.flyingmilktea.com/chat?targetID=19" target="_blank" rel="noopener noreferrer"><span style="font-size: 16px"><ins>聯絡飛天奶茶官方</ins></span></a></p>\n<p style="text-align:start"><span style="font-size: 16px;font-family: inherit">3️. 等待飛天奶茶的工作人員聯絡您，為您計算運費</span></p>\n<p style="text-align:start"><span style="font-size: 16px">4️. 按工作人員指示，到 </span><a href="https://market.flyingmilktea.com/product/83701" target="_blank" rel="noopener noreferrer"><span style="font-size: 16px"><ins>官方運費</ins></span></a><span style="font-size: 16px"> 購買相應件數</span></p>\n</p>\n<p style="text-align:start"><span style="font-size: 16px;font-family: inherit">⚠️買家請自行承擔任何郵寄風險，普通平郵/空郵並無郵件追蹤功能，如有需要請加掛號。⚠️</span></p>\n</p>\n<p style="text-align:start"><span style="font-size: 16px;font-family: inherit">如使用順便智能櫃到付或自取點到付，下單時請於「地址」一欄中填寫智能櫃/自取點編號。</span></p>\n<p style="text-align:start"><span style="font-size: 16px;font-family: inherit">順豐也有可能寄失，如有需要請通知飛天奶茶官方加購保險。</span></p>\n',
  short_description: "咖啡廳約會掛畫/親簽色紙/紋身貼",
  slug: "%e5%a6%82%e6%9c%88%e7%91%a0%e7%be%8e2021%e5%b9%b4%e7%94%9f%e6%97%a5%e7%b4%80%e5%bf%b5%e9%80%b1%e9%82%8a%e5%a5%97%e8%a3%9d",
  date_created_gmt: "2021-11-10T22:08:35.000Z",
  date_modified_gmt: "2021-12-07T00:00:07.000Z",
  type: "simple",
  is_r18: false,
  variations: null,
  stock_quantity: 0,
  stock_status: "outofstock",
  status: "publish",
  featured: false,
  price: 250,
  price_text: "250",
  regular_price: 250,
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
      id: "21",
      name: "其他",
      image: {
        __typename: "WImage",
        name: "4",
        src: "http://wp-d-dev-kf-s2-graphql.flyingpigs.ninja/wp-content/uploads/2020/07/4.png",
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
    "https://market-static.flyingmilktea.com/rumiikisaragi/product-image/51e0066b-75ef-492a-b15e-e1a2732002ec.jpg",
  images: [
    "https://market-static.flyingmilktea.com/rumiikisaragi/product-image/51e0066b-75ef-492a-b15e-e1a2732002ec.jpg",
    "https://market-static.flyingmilktea.com/rumiikisaragi/product-image/f0ef5d5f-67f4-44ad-ab51-1f2669e0abcf.jpg",
  ],
  menu_order: 0,
  shipping: [
    {
      __typename: "Shipping",
      method: "本地平郵",
      region: "HK",
      shippingFeeFirst: 14,
      shippingFeeAdditional: 0,
    },
    {
      __typename: "Shipping",
      method: "本地掛號",
      region: "HK",
      shippingFeeFirst: 30,
      shippingFeeAdditional: 0,
    },
    {
      __typename: "Shipping",
      method: "順豐到付",
      region: "TW",
      shippingFeeFirst: 0,
      shippingFeeAdditional: 0,
    },
    {
      __typename: "Shipping",
      method: "順豐到付",
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

const Template = () => <ProductView product={product} />;

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

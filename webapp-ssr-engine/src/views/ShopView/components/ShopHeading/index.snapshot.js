import React from "react";

import mapValues from "lodash/mapValues";

import ShopHeading from ".";
import { TEST_VIEWPORT_SET } from "../../../../../.storybook/viewports";

export default {
  title: "📷/views/ShopView/components/ShopHeading/index",
  component: ShopHeading,
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
  products: [
    {
      __typename: "WProduct",
      id: "69722",
      name: "JOJO 不滅鑽石 雙面匙扣",
      virtual: false,
      distributor_service: false,
      is_r18: false,
      short_description: "JOJO 不滅鑽石 雙面匙扣 – 全4種",
      price_text: "25",
      main_image:
        "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/littlehairyflower/product-image/5f2ef966-b648-4aae-a8ea-ca8e6b06f352.jpg",
      sale_price: null,
      regular_price: null,
      type: "variable",
      stock_status: "instock",
      variations: [
        {
          __typename: "WProductVariation",
          id: "83742",
          sale_price: null,
          regular_price: 25,
        },
        {
          __typename: "WProductVariation",
          id: "83743",
          sale_price: null,
          regular_price: 25,
        },
        {
          __typename: "WProductVariation",
          id: "83744",
          sale_price: null,
          regular_price: 25,
        },
        {
          __typename: "WProductVariation",
          id: "83745",
          sale_price: null,
          regular_price: 25,
        },
      ],
      categories: [{ __typename: "WCategory", id: "121", name: "吊飾/襟章" }],
      tags: [],
    },
    {
      __typename: "WProduct",
      id: "69720",
      name: "JOJO 不滅鑽石 防水貼紙",
      virtual: false,
      distributor_service: false,
      is_r18: false,
      short_description: "JOJO 不滅鑽石 防水貼紙 – 一套20張",
      price_text: "35",
      main_image:
        "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/littlehairyflower/product-image/2fe2180d-5d9a-408e-964b-981354ea5778.jpg",
      sale_price: null,
      regular_price: 35,
      type: "simple",
      stock_status: "instock",
      variations: null,
      categories: [{ __typename: "WCategory", id: "120", name: "貼紙/紙膠帶" }],
      tags: [],
    },
    {
      __typename: "WProduct",
      id: "69719",
      name: "JOJO 戰鬥潮流珠光貼紙",
      virtual: false,
      distributor_service: false,
      is_r18: false,
      short_description: "JOJO 戰鬥潮流珠光貼紙 – 一套6張",
      price_text: "12",
      main_image:
        "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/littlehairyflower/product-image/324b4980-6358-4b92-be31-685cd8e7482e.jpg",
      sale_price: null,
      regular_price: 12,
      type: "simple",
      stock_status: "instock",
      variations: null,
      categories: [{ __typename: "WCategory", id: "120", name: "貼紙/紙膠帶" }],
      tags: [],
    },
    {
      __typename: "WProduct",
      id: "69718",
      name: "JOJO星塵鬥士 珠光貼紙 - 一套5張",
      virtual: false,
      distributor_service: false,
      is_r18: false,
      short_description: "JOJO星塵鬥士 珠光貼紙 – 一套5張",
      price_text: "15",
      main_image:
        "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/littlehairyflower/product-image/50ef5200-dc4a-4f8c-b77d-31485759d1a1.jpg",
      sale_price: null,
      regular_price: 15,
      type: "simple",
      stock_status: "instock",
      variations: null,
      categories: [{ __typename: "WCategory", id: "120", name: "貼紙/紙膠帶" }],
      tags: [],
    },
    {
      __typename: "WProduct",
      id: "69717",
      name: "鬼滅之刃本子 - 鮭魚抱枕在哪裡？",
      virtual: false,
      distributor_service: false,
      is_r18: false,
      short_description: "鬼滅之刃本子 – 鮭魚抱枕在哪裡？",
      price_text: "40",
      main_image:
        "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/littlehairyflower/product-image/5fdad814-9e0b-4af4-820b-5315d8c37fb5.jpg",
      sale_price: null,
      regular_price: 40,
      type: "simple",
      stock_status: "instock",
      variations: null,
      categories: [{ __typename: "WCategory", id: "115", name: "小說/書" }],
      tags: [],
    },
    {
      __typename: "WProduct",
      id: "69714",
      name: "鬼滅之刃布偶防水貼紙",
      virtual: false,
      distributor_service: false,
      is_r18: false,
      short_description: "鬼滅之刃布偶防水貼紙 – 一套8張",
      price_text: "25",
      main_image:
        "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/littlehairyflower/product-image/96e22552-66ec-4280-a457-c0fda980f922.jpg",
      sale_price: null,
      regular_price: 25,
      type: "simple",
      stock_status: "instock",
      variations: null,
      categories: [{ __typename: "WCategory", id: "21", name: "其他" }],
      tags: [],
    },
    {
      __typename: "WProduct",
      id: "69707",
      name: "鬼滅之刃4大美人和紙貼紙",
      virtual: false,
      distributor_service: false,
      is_r18: false,
      short_description: "鬼滅之刃4大美人和紙貼紙 – 一套8張",
      price_text: "20",
      main_image:
        "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/littlehairyflower/product-image/408987a1-7b48-47bf-bec9-b94e6ef07869.jpg",
      sale_price: null,
      regular_price: 20,
      type: "simple",
      stock_status: "instock",
      variations: null,
      categories: [{ __typename: "WCategory", id: "21", name: "其他" }],
      tags: [],
    },
    {
      __typename: "WProduct",
      id: "69701",
      name: "繼國寶寶兔兔珠光貼紙",
      virtual: false,
      distributor_service: false,
      is_r18: false,
      short_description: "繼國寶寶兔兔珠光貼紙 – 一套6張",
      price_text: "20",
      main_image:
        "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/littlehairyflower/product-image/6885d22d-764d-4439-95e6-ca89e05ab539.jpg",
      sale_price: null,
      regular_price: 20,
      type: "simple",
      stock_status: "instock",
      variations: null,
      categories: [{ __typename: "WCategory", id: "21", name: "其他" }],
      tags: [],
    },
    {
      __typename: "WProduct",
      id: "69700",
      name: "義勇寶寶兔兔珠光貼紙",
      virtual: false,
      distributor_service: false,
      is_r18: false,
      short_description: "義勇寶寶兔兔珠光貼紙 – 一套7張",
      price_text: "25",
      main_image:
        "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/littlehairyflower/product-image/19c1c790-0e2e-482a-a37d-f0f5016d258c.jpg",
      sale_price: null,
      regular_price: 25,
      type: "simple",
      stock_status: "instock",
      variations: null,
      categories: [{ __typename: "WCategory", id: "21", name: "其他" }],
      tags: [],
    },
    {
      __typename: "WProduct",
      id: "38667",
      name: "我的英雄學院－58mm閃襟－全6款",
      virtual: false,
      distributor_service: false,
      is_r18: false,
      short_description:
        "我的英雄學院－58mm閃襟－爆豪・切島・心操・電気・荼毘．瀬呂",
      price_text: "12 - 36",
      main_image:
        "https://fmt-market-prod-ugcpublicbucket-1iy0o5p1n6xew.s3.ap-northeast-1.amazonaws.com/littlehairyflower/product-image/8ca7b503-50a1-4e40-8f0f-641a2bb1d07e.jpg",
      sale_price: null,
      regular_price: null,
      type: "variable",
      stock_status: "instock",
      variations: [
        {
          __typename: "WProductVariation",
          id: "38668",
          sale_price: null,
          regular_price: 12,
        },
        {
          __typename: "WProductVariation",
          id: "38669",
          sale_price: null,
          regular_price: 12,
        },
        {
          __typename: "WProductVariation",
          id: "38670",
          sale_price: null,
          regular_price: 12,
        },
        {
          __typename: "WProductVariation",
          id: "38671",
          sale_price: null,
          regular_price: 12,
        },
        {
          __typename: "WProductVariation",
          id: "38672",
          sale_price: null,
          regular_price: 12,
        },
        {
          __typename: "WProductVariation",
          id: "38673",
          sale_price: null,
          regular_price: 36,
        },
        {
          __typename: "WProductVariation",
          id: "38674",
          sale_price: null,
          regular_price: 12,
        },
      ],
      categories: [{ __typename: "WCategory", id: "121", name: "吊飾/襟章" }],
      tags: [
        { __typename: "WTag", id: "177", name: "我的英雄學院" },
        { __typename: "WTag", id: "101", name: "襟章" },
      ],
    },
  ],
};

const Template = () => <ShopHeading shop={shop} />;

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

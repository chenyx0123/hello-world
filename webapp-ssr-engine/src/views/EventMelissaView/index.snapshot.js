import React from "react";

import mapValues from "lodash/mapValues";

import EventMelissaView from ".";
import { TEST_VIEWPORT_SET } from "../../../.storybook/viewports";

export default {
  title: "📷/views/EventMelissaView/index",
  component: EventMelissaView,
};

const products = [
  {
    __typename: "WProduct",
    id: "35084",
    name: "深海魔女明信片",
    virtual: false,
    distributor_service: true,
    is_r18: false,
    short_description: "明信片",
    price_text: "12 - 20",
    main_image:
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/ea793236-1f91-4dd2-aa8a-92b56061b143.jpg",
    images: [
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/ea793236-1f91-4dd2-aa8a-92b56061b143.jpg",
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/96522b42-0028-4b10-88ac-970ecd1390c3.jpg",
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/616aa759-bcd6-43b6-ab42-aeb4a0361772.jpg",
    ],
    sale_price: null,
    regular_price: null,
    type: "variable",
    stock_status: "instock",
    variations: [
      {
        __typename: "WProductVariation",
        id: "83854",
        sale_price: null,
        regular_price: 12,
      },
      {
        __typename: "WProductVariation",
        id: "83855",
        sale_price: null,
        regular_price: 20,
      },
    ],
    categories: [{ __typename: "WCategory", id: "117", name: "插畫" }],
    tags: [
      { __typename: "WTag", id: "81", name: "原創" },
      { __typename: "WTag", id: "1141", name: "飛天奶茶代理商品" },
    ],
  },
  {
    __typename: "WProduct",
    id: "34968",
    name: "伊貝派對壓克力吊飾",
    virtual: false,
    distributor_service: true,
    is_r18: false,
    short_description: "壓克力吊飾",
    price_text: "25",
    main_image:
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/24a37715-9c5e-4122-937d-9f41f7666358.jpg",
    images: [
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/24a37715-9c5e-4122-937d-9f41f7666358.jpg",
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/d74363c2-acf2-4ec5-aff6-98cf344a6956.jpg",
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/75c9a7c6-2d96-476b-84d6-cddeffe8fc0a.jpg",
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/7de9f817-be9c-48a1-b538-f5617fc9faa7.jpg",
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/4b57e3b0-b2a1-4465-96b3-5f1ae510ac2b.jpg",
    ],
    sale_price: null,
    regular_price: null,
    type: "variable",
    stock_status: "instock",
    variations: [
      {
        __typename: "WProductVariation",
        id: "83861",
        sale_price: null,
        regular_price: 25,
      },
      {
        __typename: "WProductVariation",
        id: "83862",
        sale_price: null,
        regular_price: 25,
      },
    ],
    categories: [{ __typename: "WCategory", id: "121", name: "吊飾/襟章" }],
    tags: [
      { __typename: "WTag", id: "130", name: "Pokemon" },
      { __typename: "WTag", id: "142", name: "伊貝" },
      { __typename: "WTag", id: "201", name: "寵物小精靈" },
      { __typename: "WTag", id: "202", name: "精靈寶可夢" },
      { __typename: "WTag", id: "1141", name: "飛天奶茶代理商品" },
    ],
  },
  {
    __typename: "WProduct",
    id: "34967",
    name: "瑪俐閃膜貼紙",
    virtual: false,
    distributor_service: true,
    is_r18: false,
    short_description: "瑪俐閃膜貼紙",
    price_text: "12",
    main_image:
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/c6839904-c7c5-41c4-b796-698f407306ac.jpg",
    images: [
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/c6839904-c7c5-41c4-b796-698f407306ac.jpg",
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/10fbb561-944c-4f39-9a93-7cbe06d124cf.jpg",
    ],
    sale_price: null,
    regular_price: 12,
    type: "simple",
    stock_status: "instock",
    variations: null,
    categories: [{ __typename: "WCategory", id: "117", name: "插畫" }],
    tags: [
      { __typename: "WTag", id: "130", name: "Pokemon" },
      { __typename: "WTag", id: "201", name: "寵物小精靈" },
      { __typename: "WTag", id: "203", name: "瑪俐" },
      { __typename: "WTag", id: "202", name: "精靈寶可夢" },
      { __typename: "WTag", id: "204", name: "老婆" },
      { __typename: "WTag", id: "155", name: "貼紙" },
      { __typename: "WTag", id: "1141", name: "飛天奶茶代理商品" },
    ],
  },
  {
    __typename: "WProduct",
    id: "34966",
    name: "水伊貝明信片",
    virtual: false,
    distributor_service: true,
    is_r18: false,
    short_description: "水伊貝明信片",
    price_text: "12",
    main_image:
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/2629640f-9174-46f4-9ed4-d69f32cbe7da.jpg",
    images: [
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/2629640f-9174-46f4-9ed4-d69f32cbe7da.jpg",
    ],
    sale_price: null,
    regular_price: 12,
    type: "simple",
    stock_status: "instock",
    variations: null,
    categories: [{ __typename: "WCategory", id: "117", name: "插畫" }],
    tags: [
      { __typename: "WTag", id: "130", name: "Pokemon" },
      { __typename: "WTag", id: "142", name: "伊貝" },
      { __typename: "WTag", id: "201", name: "寵物小精靈" },
      { __typename: "WTag", id: "127", name: "明信片" },
      { __typename: "WTag", id: "202", name: "精靈寶可夢" },
      { __typename: "WTag", id: "1141", name: "飛天奶茶代理商品" },
    ],
  },
  {
    __typename: "WProduct",
    id: "34965",
    name: "藍調透明PM貼紙",
    virtual: false,
    distributor_service: true,
    is_r18: false,
    short_description: "藍調透明PM貼紙",
    price_text: "16",
    main_image:
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/dad9e623-0aeb-4056-850b-1b837e898ffd.jpg",
    images: [
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/dad9e623-0aeb-4056-850b-1b837e898ffd.jpg",
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/e0c5bac7-17c0-4737-b1fa-e866eaa4d801.jpg",
    ],
    sale_price: null,
    regular_price: 16,
    type: "simple",
    stock_status: "instock",
    variations: null,
    categories: [{ __typename: "WCategory", id: "120", name: "貼紙/紙膠帶" }],
    tags: [
      { __typename: "WTag", id: "130", name: "Pokemon" },
      { __typename: "WTag", id: "201", name: "寵物小精靈" },
      { __typename: "WTag", id: "202", name: "精靈寶可夢" },
      { __typename: "WTag", id: "155", name: "貼紙" },
      { __typename: "WTag", id: "1141", name: "飛天奶茶代理商品" },
    ],
  },
  {
    __typename: "WProduct",
    id: "34964",
    name: "伊貝派對貼紙包",
    virtual: false,
    distributor_service: true,
    is_r18: false,
    short_description: "貼紙包",
    price_text: "20",
    main_image:
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/f2c25a59-675f-4bbc-bec0-5e2ba6f013f9.jpg",
    images: [
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/f2c25a59-675f-4bbc-bec0-5e2ba6f013f9.jpg",
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/b107a924-1044-4faf-84f3-26150f11d319.jpg",
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/23c7ae5a-a3db-47e3-8874-7fd158bdbe3b.jpg",
    ],
    sale_price: null,
    regular_price: 20,
    type: "simple",
    stock_status: "instock",
    variations: null,
    categories: [{ __typename: "WCategory", id: "120", name: "貼紙/紙膠帶" }],
    tags: [
      { __typename: "WTag", id: "130", name: "Pokemon" },
      { __typename: "WTag", id: "142", name: "伊貝" },
      { __typename: "WTag", id: "201", name: "寵物小精靈" },
      { __typename: "WTag", id: "202", name: "精靈寶可夢" },
      { __typename: "WTag", id: "155", name: "貼紙" },
      { __typename: "WTag", id: "186", name: "貼紙包" },
      { __typename: "WTag", id: "1141", name: "飛天奶茶代理商品" },
    ],
  },
  {
    __typename: "WProduct",
    id: "34963",
    name: "霸王花胸章",
    virtual: false,
    distributor_service: true,
    is_r18: false,
    short_description: "霸王花胸章",
    price_text: "5",
    main_image:
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/56dc5ac2-a5ea-4b62-accd-2fd0179af6fa.jpg",
    images: [
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/56dc5ac2-a5ea-4b62-accd-2fd0179af6fa.jpg",
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/538a4c13-cd71-4566-a341-6607c0ff1a00.jpg",
    ],
    sale_price: null,
    regular_price: 5,
    type: "simple",
    stock_status: "instock",
    variations: null,
    categories: [{ __typename: "WCategory", id: "121", name: "吊飾/襟章" }],
    tags: [
      { __typename: "WTag", id: "130", name: "Pokemon" },
      { __typename: "WTag", id: "201", name: "寵物小精靈" },
      { __typename: "WTag", id: "202", name: "精靈寶可夢" },
      { __typename: "WTag", id: "101", name: "襟章" },
      { __typename: "WTag", id: "238", name: "霸王花" },
      { __typename: "WTag", id: "1141", name: "飛天奶茶代理商品" },
    ],
  },
  {
    __typename: "WProduct",
    id: "34962",
    name: "伊貝派對A5文件夾",
    virtual: false,
    distributor_service: true,
    is_r18: false,
    short_description: "伊貝派對A5文件夾",
    price_text: "10",
    main_image:
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/8f676699-aae8-495f-9f86-395c859bc4e9.jpg",
    images: [
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/8f676699-aae8-495f-9f86-395c859bc4e9.jpg",
      "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/c7983338-691c-44e2-bba5-e979aeaf62de.jpg",
    ],
    sale_price: null,
    regular_price: 10,
    type: "simple",
    stock_status: "instock",
    variations: null,
    categories: [{ __typename: "WCategory", id: "21", name: "其他" }],
    tags: [
      { __typename: "WTag", id: "130", name: "Pokemon" },
      { __typename: "WTag", id: "142", name: "伊貝" },
      { __typename: "WTag", id: "201", name: "寵物小精靈" },
      { __typename: "WTag", id: "202", name: "精靈寶可夢" },
      { __typename: "WTag", id: "1141", name: "飛天奶茶代理商品" },
    ],
  },
];

const Template = () => <EventMelissaView products={products} />;

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

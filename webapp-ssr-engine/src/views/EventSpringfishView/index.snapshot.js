import React from "react";

import mapValues from "lodash/mapValues";

import EventSpringfishView from ".";
import { TEST_VIEWPORT_SET } from "../../../.storybook/viewports";

export default {
  title: "📷/views/EventSpringfishView/index",
  component: EventSpringfishView,
};

const terminalGirlProducts = [
  {
    __typename: "WProduct",
    id: "119598",
    name: "『終端少女』PF33漫畫本！漫畫家：蕭邦仲",
    virtual: false,
    distributor_service: true,
    is_r18: false,
    short_description:
      "黑白漫畫本《終端少女盃電競比賽》！（封面彩色單面亮膜，內頁單色B5／16P）",
    price_text: "45",
    main_image:
      "https://market-static.flyingmilktea.com/%E6%98%A5%E9%AD%9A/product-image/9c95d81b-0582-477c-99b2-2a4da4ef6188.jpg",
    images: [
      "https://market-static.flyingmilktea.com/%E6%98%A5%E9%AD%9A/product-image/9c95d81b-0582-477c-99b2-2a4da4ef6188.jpg",
    ],
    sale_price: null,
    regular_price: 45,
    type: "simple",
    stock_status: "instock",
    variations: null,
    categories: [{ __typename: "WCategory", id: "114", name: "漫畫" }],
    tags: [{ __typename: "WTag", id: "1141", name: "飛天奶茶代理商品" }],
  },
  {
    __typename: "WProduct",
    id: "100145",
    name: "『終端少女』FF34畫冊！繪師陣容：SIBYL、muZ、oyk、Vardan、佐維爾、桐櫻、森蘿萬幼、手刀葉、兔姬、小維、獅子和背包的相處集、九歲",
    virtual: false,
    distributor_service: true,
    is_r18: false,
    short_description: "畫冊 甜蜜家庭日記》（全彩B5／36P）",
    price_text: "70",
    main_image:
      "https://market-static.flyingmilktea.com/%E6%98%A5%E9%AD%9A/product-image/073ca896-c3ac-44c6-8816-7f38e1acd610.jpg",
    images: [
      "https://market-static.flyingmilktea.com/%E6%98%A5%E9%AD%9A/product-image/073ca896-c3ac-44c6-8816-7f38e1acd610.jpg",
    ],
    sale_price: null,
    regular_price: 70,
    type: "simple",
    stock_status: "instock",
    variations: null,
    categories: [{ __typename: "WCategory", id: "117", name: "插畫" }],
    tags: [
      { __typename: "WTag", id: "81", name: "原創" },
      { __typename: "WTag", id: "1384", name: "原創角色" },
      { __typename: "WTag", id: "1456", name: "平平子" },
      { __typename: "WTag", id: "1455", name: "春魚" },
      { __typename: "WTag", id: "1457", name: "終端少女" },
      { __typename: "WTag", id: "1141", name: "飛天奶茶代理商品" },
    ],
  },
  {
    __typename: "WProduct",
    id: "100144",
    name: "『終端少女』FF35畫冊！繪師陣容：Aki、oyk、Zelitto、小維、手刀葉、伊幽、雁冰、佩喵、浣狸、希宇、獅子和背包的相處集、NOHO",
    virtual: false,
    distributor_service: true,
    is_r18: false,
    short_description: "畫冊《如果有妹妹就糟了》（全彩B5／36P）",
    price_text: "70",
    main_image:
      "https://market-static.flyingmilktea.com/%E6%98%A5%E9%AD%9A/product-image/439783a3-2054-4aa6-a998-778230a4442f.jpg",
    images: [
      "https://market-static.flyingmilktea.com/%E6%98%A5%E9%AD%9A/product-image/439783a3-2054-4aa6-a998-778230a4442f.jpg",
    ],
    sale_price: null,
    regular_price: 70,
    type: "simple",
    stock_status: "instock",
    variations: null,
    categories: [{ __typename: "WCategory", id: "117", name: "插畫" }],
    tags: [
      { __typename: "WTag", id: "81", name: "原創" },
      { __typename: "WTag", id: "1384", name: "原創角色" },
      { __typename: "WTag", id: "1456", name: "平平子" },
      { __typename: "WTag", id: "1455", name: "春魚" },
      { __typename: "WTag", id: "1457", name: "終端少女" },
      { __typename: "WTag", id: "1141", name: "飛天奶茶代理商品" },
    ],
  },
  {
    __typename: "WProduct",
    id: "99885",
    name: "『終端少女』FF36畫冊！繪師陣容：Fenne、KS、小維、玉蒔良、仙貝、背包、伊幽、飯米糕、佩喵Peneko、禰朔、雁冰、微笑、戰部露",
    virtual: false,
    distributor_service: true,
    is_r18: false,
    short_description: "畫冊《終端少女再次進化》（全彩B5 ／36P）",
    price_text: "70",
    main_image:
      "https://market-static.flyingmilktea.com/%E6%98%A5%E9%AD%9A/product-image/82b812e9-20c3-452a-83d3-2bd67190a308.jpg",
    images: [
      "https://market-static.flyingmilktea.com/%E6%98%A5%E9%AD%9A/product-image/82b812e9-20c3-452a-83d3-2bd67190a308.jpg",
    ],
    sale_price: null,
    regular_price: 70,
    type: "simple",
    stock_status: "outofstock",
    variations: null,
    categories: [{ __typename: "WCategory", id: "117", name: "插畫" }],
    tags: [
      { __typename: "WTag", id: "81", name: "原創" },
      { __typename: "WTag", id: "1384", name: "原創角色" },
      { __typename: "WTag", id: "1456", name: "平平子" },
      { __typename: "WTag", id: "1455", name: "春魚" },
      { __typename: "WTag", id: "1457", name: "終端少女" },
      { __typename: "WTag", id: "1141", name: "飛天奶茶代理商品" },
    ],
  },
];

const rescuteProducts = [
  {
    __typename: "WProduct",
    id: "119599",
    name: "『瀕臨絕種團 Rescute』FF37畫冊！繪師陣容：Aki、Akamotoogushi、Say HANa、USUALLY、Vardan、七日-Nanoka、手刀葉、仙貝、浣狸、羽毛、雁冰、雅雅、灰野都、戰部露",
    virtual: false,
    distributor_service: true,
    is_r18: false,
    short_description: "畫冊《RESCUTE HOLIDAY！》（全彩B5／36P）",
    price_text: "70",
    main_image:
      "https://market-static.flyingmilktea.com/%E6%98%A5%E9%AD%9A/product-image/4f28f27f-88ee-403b-a6bb-c6647f4008ae.jpg",
    images: [
      "https://market-static.flyingmilktea.com/%E6%98%A5%E9%AD%9A/product-image/4f28f27f-88ee-403b-a6bb-c6647f4008ae.jpg",
    ],
    sale_price: null,
    regular_price: 70,
    type: "simple",
    stock_status: "instock",
    variations: null,
    categories: [
      { __typename: "WCategory", id: "117", name: "插畫" },
      { __typename: "WCategory", id: "114", name: "漫畫" },
    ],
    tags: [{ __typename: "WTag", id: "1141", name: "飛天奶茶代理商品" }],
  },
  {
    __typename: "WProduct",
    id: "119597",
    name: "『瀕臨絕種團 Rescute』PF34畫冊！繪師陣容：HMW、貓御子、七日- Nanoka、Daccel",
    virtual: false,
    distributor_service: true,
    is_r18: false,
    short_description:
      "畫冊《RESCUTE MAGAZINE！》（全彩B5／6P + 黑白B5／22P ）",
    price_text: "70",
    main_image:
      "https://market-static.flyingmilktea.com/%E6%98%A5%E9%AD%9A/product-image/645ec390-86bc-44eb-9bcd-47a8e15e18d7.jpg",
    images: [
      "https://market-static.flyingmilktea.com/%E6%98%A5%E9%AD%9A/product-image/645ec390-86bc-44eb-9bcd-47a8e15e18d7.jpg",
    ],
    sale_price: null,
    regular_price: 70,
    type: "simple",
    stock_status: "instock",
    variations: null,
    categories: [
      { __typename: "WCategory", id: "117", name: "插畫" },
      { __typename: "WCategory", id: "114", name: "漫畫" },
    ],
    tags: [{ __typename: "WTag", id: "1141", name: "飛天奶茶代理商品" }],
  },
  {
    __typename: "WProduct",
    id: "100148",
    name: "『瀕臨絕種團 Rescute』FF35畫冊！繪師陣容：muZ、兔姬、Aki、REAL、Rokkyuu、Oneko、九歲、卡比卡比、代碼Hmw、仙貝、羽毛、浣狸、禰朔、戰部露",
    virtual: false,
    distributor_service: true,
    is_r18: false,
    short_description: "畫冊《瀕臨絕種團準備出道！》（全彩B5／36P）",
    price_text: "70",
    main_image:
      "https://market-static.flyingmilktea.com/%E6%98%A5%E9%AD%9A/product-image/aab23094-700e-4523-a153-7d9290560597.jpg",
    images: [
      "https://market-static.flyingmilktea.com/%E6%98%A5%E9%AD%9A/product-image/aab23094-700e-4523-a153-7d9290560597.jpg",
    ],
    sale_price: null,
    regular_price: 70,
    type: "simple",
    stock_status: "outofstock",
    variations: null,
    categories: [{ __typename: "WCategory", id: "117", name: "插畫" }],
    tags: [
      { __typename: "WTag", id: "1459", name: "十五" },
      { __typename: "WTag", id: "81", name: "原創" },
      { __typename: "WTag", id: "1384", name: "原創角色" },
      { __typename: "WTag", id: "1455", name: "春魚" },
      { __typename: "WTag", id: "1461", name: "歐貝爾" },
      { __typename: "WTag", id: "1458", name: "瀕臨絕種團" },
      { __typename: "WTag", id: "1460", name: "露恰" },
      { __typename: "WTag", id: "1141", name: "飛天奶茶代理商品" },
    ],
  },
  {
    __typename: "WProduct",
    id: "100147",
    name: "『瀕臨絕種團 Rescute』FF36畫冊！繪師陣容：Lino、@ichigo、Rokkyyu、九歲、小可同學、手刀葉、仙界大濕、仙貝、浣狸、淺井、貓御子、矮柯Echo、蜂蜜棉花糖、戰部露、兔姬、禰朔",
    virtual: false,
    distributor_service: true,
    is_r18: false,
    short_description: "畫冊《瀕臨絕種團奮發向上！》（全彩B5／36P）",
    price_text: "70",
    main_image:
      "https://market-static.flyingmilktea.com/%E6%98%A5%E9%AD%9A/product-image/6224259c-eef1-4e0b-b625-fb043dda6b93.jpg",
    images: [
      "https://market-static.flyingmilktea.com/%E6%98%A5%E9%AD%9A/product-image/6224259c-eef1-4e0b-b625-fb043dda6b93.jpg",
    ],
    sale_price: null,
    regular_price: 70,
    type: "simple",
    stock_status: "outofstock",
    variations: null,
    categories: [{ __typename: "WCategory", id: "117", name: "插畫" }],
    tags: [
      { __typename: "WTag", id: "1459", name: "十五" },
      { __typename: "WTag", id: "81", name: "原創" },
      { __typename: "WTag", id: "1384", name: "原創角色" },
      { __typename: "WTag", id: "1455", name: "春魚" },
      { __typename: "WTag", id: "1461", name: "歐貝爾" },
      { __typename: "WTag", id: "1458", name: "瀕臨絕種團" },
      { __typename: "WTag", id: "1460", name: "露恰" },
      { __typename: "WTag", id: "1141", name: "飛天奶茶代理商品" },
    ],
  },
  {
    __typename: "WProduct",
    id: "100146",
    name: "『瀕臨絕種團 Rescute』 PF33畫冊！繪師陣容：SAKA、手刀葉、仙貝、浣狸、代碼HMW、秋枝、御芊、戰部露",
    virtual: false,
    distributor_service: true,
    is_r18: false,
    short_description: "畫冊《RESCUTE HOLIDAY！》（全彩B5／36P）",
    price_text: "70",
    main_image:
      "https://market-static.flyingmilktea.com/%E6%98%A5%E9%AD%9A/product-image/a2a8dcb6-ff46-4c5e-806c-428000175dc3.jpg",
    images: [
      "https://market-static.flyingmilktea.com/%E6%98%A5%E9%AD%9A/product-image/a2a8dcb6-ff46-4c5e-806c-428000175dc3.jpg",
    ],
    sale_price: null,
    regular_price: 70,
    type: "simple",
    stock_status: "outofstock",
    variations: null,
    categories: [{ __typename: "WCategory", id: "117", name: "插畫" }],
    tags: [
      { __typename: "WTag", id: "1459", name: "十五" },
      { __typename: "WTag", id: "81", name: "原創" },
      { __typename: "WTag", id: "1384", name: "原創角色" },
      { __typename: "WTag", id: "1455", name: "春魚" },
      { __typename: "WTag", id: "1461", name: "歐貝爾" },
      { __typename: "WTag", id: "1458", name: "瀕臨絕種團" },
      { __typename: "WTag", id: "1460", name: "露恰" },
      { __typename: "WTag", id: "1141", name: "飛天奶茶代理商品" },
    ],
  },
];

const Template = () => (
  <EventSpringfishView
    rescuteProducts={rescuteProducts}
    terminalGirlProducts={terminalGirlProducts}
  />
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

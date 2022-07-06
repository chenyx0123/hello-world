import React from "react";

import mapValues from "lodash/mapValues";

import MyaProductView from ".";
import { TEST_VIEWPORT_SET } from "../../../.storybook/viewports";

export default {
  title: "📷/views/MyaProductView/index",
  component: MyaProductView,
};

const product = {
  id: "128718",
  owner: {
    id: "12345",
  },
  name: "米亞MYA | 失憶症候群 CD & 紀念周邊",
  main_image:
    "https://market-static.flyingmilktea.com/mya/product-image/4566f711-3e7e-49dc-9e41-4be130151103.jpeg",
  images: [
    "https://market-static.flyingmilktea.com/mya/product-image/4566f711-3e7e-49dc-9e41-4be130151103.jpeg",
    "https://market-static.flyingmilktea.com/mya/product-image/2d47cf9d-82bd-443c-9f7f-858549c2c17a.jpeg",
    "https://market-static.flyingmilktea.com/mya/product-image/1d898686-c33e-4380-a267-b971b7e1dc29.jpeg",
    "https://market-static.flyingmilktea.com/mya/product-image/b07552ec-5dcf-4b83-86a9-a7a20f323ed2.jpeg",
    "https://market-static.flyingmilktea.com/mya/product-image/aa994b0f-8cdb-4ee1-8429-9f6a9f127805.jpeg",
    "https://market-static.flyingmilktea.com/mya/product-image/db734a01-d1bc-4d28-91a2-37fc66875e7a.jpeg",
  ],
  description:
    '<p style="text-align:start"><span style="font-size: 14px;font-family: inherit">預購時間：即日起 至 6月6日（預購後，將會以公售價賣出餘量）</span></p>\n<p style="text-align:start"><span style="font-size: 14px;font-family: inherit">預計發貨時間：7月1日 至 7月31日（鑒於疫情影響，以上是保守估計之日期。但也有可能提早發貨。）</span></p>\n<p><span style="font-size: 14px">∷  </span></p>\n<p style="text-align:start"><span style="font-size: 14px"><strong>【請支持我們製作下一首原創曲 &amp; 3D化！】</strong> </span></p>\n<p style="text-align:start"><span style="font-size: 14px;font-family: inherit">∷ </span><span style="font-size: 14px"> </span></p>\n<p style="text-align:start"><span style="font-size: 14px">我們正在製作下一首原創曲，以及米亞3D化。我們需要你的支持🐼！</span></p>\n<p style="text-align:start"><span style="font-size: 14px">凡購買紙盒裝CD，你的名字將會放進下一首原創曲MV的感謝頁內，以及3D化直播的資訊欄中！ </span></p>\n<p style="text-align:start"><span style="font-size: 14px;font-family: inherit">∷ </span><span style="font-size: 14px"> </span></p>\n<p style="text-align:start"><span style="font-size: 14px;font-family: inherit"><strong>【商品詳情】</strong></span></p>\n<p><span style="font-size: 14px;font-family: inherit">▍</span><span style="font-size: 14px"> 失憶症候群 完整版CD【含親筆簽名於CD盒內頁】｜紙盒裝、雙層立體封面 | 141*125*12mm｜<br />附送QR Code下載電子版 及 A6 燙金簽名明信片兩張 </span></p>\n<p><span style="font-size: 14px">曲目包括：<br />1. 失憶症候群 Cantonese ver.<br />2. 失憶症候群 Japanese ver.<br /></span><span style="font-size: inherit;font-family: monospace">3. 失憶症候群</span><span style="font-size: 14px"> </span><span style="font-size: inherit;font-family: monospace">Instrumental ver.</span><span style="font-size: 14px"><br />4. 失憶症候群 Demo ver.</span></p>\n<p style="text-align:start"><span style="font-size: 14px;font-family: Roboto, Noto, sans-serif">▍</span><span style="font-size: 14px"> </span><span style="font-size: 14px;font-family: inherit">三層景深立牌｜20*10*0.8cm｜共六款 + 一款限定特別版｜附 </span><span style="font-size: 14px">專用發光底座｜20*45*30cm</span></p>\n<p><span style="font-size: 14px"><strong>單買選項</strong></span></p>\n<p><span style="font-size: 14px">▪ 三層景深立牌任選 1 個 + 1 個專用發光底座</span></p>\n<p><span style="font-size: 14px">▪ </span><span style="font-size: inherit;font-family: inherit">三層景深立牌任選 3 個 +</span><span style="font-size: 14px"> 1 個</span><span style="font-size: inherit;font-family: inherit">專用發光底座</span></p>\n<p><span style="font-size: 14px">▪ </span><span style="font-size: inherit;font-family: inherit">三層景深立牌全套</span><span style="font-size: 14px"> 6 個 </span><span style="font-size: inherit;font-family: inherit"> +</span><span style="font-size: 14px"> 1 個</span><span style="font-size: inherit;font-family: inherit">專用發光底座</span></p>\n<p><span style="font-size: 14px">▪ 加購發光底座</span></p>\n<p><span style="font-size: 14px;font-family: Roboto, Noto, sans-serif">▍</span><span style="font-size: 14px"> 失憶症候群 </span><span style="font-size: 14px;font-family: inherit">明信片套裝｜一套七張｜約</span><span style="font-size: 14px">A6 size</span></p>\n<p style="text-align:start"><span style="font-size: 14px;font-family: inherit">∷</span><span style="font-size: 14px"> </span></p>\n<p style="text-align:start"><span style="font-size: 14px"><strong>【套裝優惠】</strong> </span></p>\n<p><span style="font-size: 14px"><strong>失憶症候群套裝 </strong>包含以上所有商品，唯三層景深立牌【 <strong>任選 3 款 </strong></span><span style="font-size: inherit;font-family: inherit">+ 1 個</span><span style="font-size: 14px"> </span><span style="font-size: inherit;font-family: inherit">專用發光底座</span><span style="font-size: 14px"> 】，並附送 <strong>三層景深立牌【套裝特別版】</strong> 。</span></p>\n<p><span style="font-size: 14px;font-family: inherit"><strong>失憶症候群套裝EX </strong>包含以上所有商品，及三層景深立牌【 <strong>所有款式</strong> + 1 個</span><span style="font-size: 14px"> </span><span style="font-size: 14px;font-family: inherit">專用發光底座</span><span style="font-size: 14px"> </span><span style="font-size: 14px;font-family: inherit">】，並附送 </span><span style="font-size: 14px"><strong>三層景深立牌 </strong></span><span style="font-size: 14px;font-family: inherit"><strong>【套裝特別版】</strong>。</span></p>\n<p><span style="font-size: 14px;font-family: inherit">∷</span><span style="font-size: 14px"> </span></p>\n<p><span style="font-size: 14px;font-family: inherit"><strong>【貨品需知 ＆ 退貨政策】</strong></span><span style="font-size: 14px"> </span></p>\n<p><span style="font-size: 14px">▪ 三層景深立牌在製作過程中，無法避免有少量氣泡存於夾層中。除非氣泡影響範圍多於整體畫面20%，否則不接受退換。</span></p>\n<p><span style="font-size: 14px">▪  因CD皆經親筆簽名後再人手包裝，可能會含有少量米亞/甘米造成的人為失誤😥。</span></p>\n<p><span style="font-size: 14px">▪  如果貨品出現問題【例如過度的損壞、發貨內容錯誤、貨品印刷有嚴重問題】，可以於官方Discord【商品及會員週邊查詢】文字頻道查詢 / DM@小貓Nyan，或電郵至 littlegummii@gmail.com。</span></p>\n<p><span style="font-size: 14px">▪  如果有需要購買者退回的貨品的情況，我們可能會要求購買者使用平郵退貨，而我們將會在補寄時，付上同等價值之郵票補償郵費。</span></p>\n',
  short_description: "米亞MYA | 失憶症候群 CD & 紀念周邊",
  type: "variable",
  stock_status: "instock",
  shop: {
    id: "113469",
    main_image:
      "https://market-static.flyingmilktea.com/mya/shop-avatar/060b5c57-c536-42d1-8625-9e2f5d071cc2.jpg",
    name: "米亞MYA",
    owner: {
      id: "12345",
    },
  },
  variations: [
    {
      id: "128960",
      description:
        "失憶症候群 完整版CD【含親筆簽名於CD盒內頁】附送QR Code下載電子版 及 A6 燙金簽名明信片兩張",
      price: 200,
      stock_status: "instock",
    },
    {
      id: "128961",
      description: "失憶症候群套裝【附送 套裝特別版立牌】",
      price: 550,
      stock_status: "instock",
    },
    {
      id: "128962",
      description: "失憶症候群套裝EX【附送 套裝特別版立牌】",
      price: 650,
      stock_status: "instock",
    },
    {
      id: "128963",
      description: "三層景深立牌任選 1 個 + 1 個專用發光底座",
      price: 150,
      stock_status: "instock",
    },
    {
      id: "128964",
      description: "三層景深立牌任選 3 個 + 1 個專用發光底座",
      price: 250,
      stock_status: "instock",
    },
    {
      id: "128965",
      description: "三層景深立牌全套 6 個  + 1 個專用發光底座",
      price: 450,
      stock_status: "instock",
    },
    {
      id: "128966",
      description: "加購 發光底座",
      price: 60,
      stock_status: "instock",
    },
    {
      id: "128967",
      description: "明信片套裝｜一套七張",
      price: 50,
      stock_status: "instock",
    },
    {
      id: "128968",
      description: "立牌 1",
      price: 0,
      stock_status: "instock",
    },
    {
      id: "128969",
      description: "立牌 2",
      price: 0,
      stock_status: "instock",
    },
  ],
};

const Template = () => <MyaProductView product={product} />;

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

import React from "react";

import { Grid } from "@mui/material";

import mapValues from "lodash/mapValues";

import { TEST_VIEWPORT_SET } from "../../../.storybook/viewports";
import ShopSummaryItem from "./ShopSummaryItem";

export default {
  title: "📷/components/catalog/ShopSummaryItem",
  component: ShopSummaryItem,
};

const shop = {
  __typename: "WShop",
  id: "35009",
  name: "元氣幻想元氣幻想元氣幻想元氣幻想元氣幻想元氣幻想",
  short_description:
    "元氣幻想（Ganki Fantasy）是活躍於香港及台灣的同人組織，成立於2006年9月1日，目前偏向原創及二創少年漫畫題材漫畫風格發展。",
  description:
    '<p>歡迎來到「元氣幻想」線上商店！</p>\n<p>我們主要賣少年動漫作品相關產物，原創、改篇（二創）皆有，請各位多多支持我們喔！&nbsp;</p>\n<p>除了同人作品可賣以外，本社也接受少年插圖相關的委託喔！</p>\n<p>&nbsp;</p>\n<p>★★★★★★★★★★★★★★★★★★★★★★★★&nbsp;</p>\n<p>&nbsp;</p>\n<p>【◇本店最近有哪些新品呢？◇】</p>\n<p>目前新刊是Digimon（數碼暴龍 / 數碼寶貝） 「拍攝幕後花絮」本 《CUT NG！》。</p>\n<p><span style="font-size: inherit;font-family: inherit">原創方面就主打《正太魅‧動力少年進行曲》及相關周邊 ，以三種運動構成的熱血故事</span> 。</p>\n<p>&nbsp;</p>\n<p>另外最近新周邊就有以下這些：</p>\n<p>「Digimon」8/1御台場紀念日2020年 A4半透明檔案夾</p>\n<p>「Digimon」15.5cm巨型立牌（太一與數碼獸）</p>\n<p>「Digimon」15.5cm巨型立牌（大和與數碼獸）</p>\n<p>「怪物事變」匙扣（夏羽）</p>\n<p>「怪物事變」匙扣（織）</p>\n<p>「怪物事變」匙扣（晶）</p>\n<p>「怪物事變」帆布袋</p>\n<p>「怪物事變」名信片</p>\n<p>&nbsp;</p>\n<p>★★★★★★★★★★★★★★★★★★★★★★★★★</p>\n<p>&nbsp;</p>\n<p>【◇購買前注意事項◇】</p>\n<p>請在商品頁面內選擇<strong>【運送方式】</strong>。</p>\n<p>然後攤主會主動聯絡你，因應您想寄去的地區為您計算運費。</p>\n<p>按照攤主的指示，請到本頁面最上層的<strong>【打賞】</strong>，輸入相應的金額，攤主收到款項之後就會開始運送。&nbsp;</p>\n<p>運送時間、費用及狀況請參考<a href="https://www.hongkongpost.hk/tc/home/index.html" target="_blank" rel="noopener noreferrer"><strong>【香港郵政】</strong></a>及速遞公司。</p>\n<p>&nbsp;</p>\n<p>★買滿200個珍珠幣可獲免運費。</p>\n<p>★個別商品有「多買優惠」活動（例如襟章、立牌），凡購買一定的數量，請按<a href="https://market.flyingmilktea.com/chat?targetID=4436" target="_blank" rel="noopener noreferrer"><strong>【聯絡攤主】</strong></a>並告知您想要哪款<strong>有同類優惠裡面的款式</strong>。</p>\n<p>★無論購買的金額大小，即送原創作品名明信片一張。</p>\n<p>&nbsp;</p>\n<p>★★★★★★★★★★★★★★★★★★★★★★★★★</p>\n<p>&nbsp;</p>\n<p>【◇粉專連結◇】</p>\n<p><span style="color: inherit;font-size: inherit;font-family: inherit">◇</span><a href="https://www.facebook.com/GenkiFantasy/" target="_blank" rel="noopener noreferrer"><span style="color: inherit;font-size: inherit;font-family: inherit">FaceBook</span></a></p>\n<p><span style="color: inherit;font-size: inherit;font-family: inherit">◇</span><a href="https://www.instagram.com/tsubasahayate/" target="_blank" rel="noopener noreferrer"><span style="color: inherit;font-size: inherit;font-family: inherit">instagram</span></a></p>\n<p><span style="color: inherit;font-size: inherit;font-family: inherit">◇</span><a href="https://www.pixiv.net/users/2128543" target="_blank" rel="noopener noreferrer"><span style="color: inherit;font-size: inherit;font-family: inherit">pixiv</span></a></p>\n<p><span style="color: inherit;font-size: inherit;font-family: inherit">◇</span><a href="https://www.plurk.com/tsubasa_hayate" target="_blank" rel="noopener noreferrer"><span style="color: inherit;font-size: inherit;font-family: inherit">Plurk噗浪</span></a></p>\n<p>◇<a href="https://tsubasahayate.fanbox.cc/" target="_blank" rel="noopener noreferrer">FanBox</a></p>\n<p>&nbsp;</p>\n<p>★★★★★★★★★★★★★★★★★★★★★★★★★</p>\n<p>&nbsp;</p>\n<p><span style="color: inherit;font-size: inherit;font-family: inherit">非商業委託價目表（準備中）</span></p>\n',
  featured: false,
  main_image:
    "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/shop-avatar/6de1fc8f-6e62-4450-8128-b7e6c7c8844c.jpg",
  banner_image:
    "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/shop-banner/1e6c8cf6-a724-46e8-8c31-083d0c9dabaf.jpg",
  owner: { __typename: "User", id: "4436" },
  instock_products: [
    {
      __typename: "WProduct",
      id: "110622",
      name: "怪物事變 名信片",
      virtual: false,
      distributor_service: false,
      is_r18: false,
      short_description: "規格：4R（大概A6大小）",
      price_text: "10",
      main_image:
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/7c9057d0-388e-41e5-8b7b-f98fe6f4103a.jpg",
      images: [
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/7c9057d0-388e-41e5-8b7b-f98fe6f4103a.jpg",
      ],
      sale_price: null,
      regular_price: 10,
      type: "simple",
      stock_status: "instock",
      variations: null,
      categories: [{ __typename: "WCategory", id: "117", name: "插畫" }],
      tags: [
        { __typename: "WTag", id: "1675", name: "岩木山雪裡白那之五十六子晶" },
        { __typename: "WTag", id: "1672", name: "怪物事變" },
        { __typename: "WTag", id: "1673", name: "日下夏羽" },
        { __typename: "WTag", id: "1725", name: "米哈伊福洛雷斯克" },
        { __typename: "WTag", id: "1677", name: "紺" },
        { __typename: "WTag", id: "1674", name: "蓼丸織" },
        { __typename: "WTag", id: "1726", name: "野火丸" },
        { __typename: "WTag", id: "1676", name: "隱神鼓八千" },
      ],
    },
    {
      __typename: "WProduct",
      id: "109969",
      name: "正太魅‧動力少年進行曲(RG25限定套組)",
      virtual: false,
      distributor_service: false,
      is_r18: false,
      short_description: "原創運動少年本",
      price_text: "50 - 150",
      main_image:
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/ac9d5573-1b76-4955-901f-522e265b4f82.jpg",
      images: [
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/ac9d5573-1b76-4955-901f-522e265b4f82.jpg",
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/267fbdc1-6ca3-48d3-9d89-e1db89b013b5.jpg",
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/9b69e124-2fe3-4bef-acf6-02bfd3d35ba8.jpg",
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/4b796530-f1c7-40b8-aa92-2b1727f6d692.jpg",
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/fe091b95-d4c8-46b6-9555-d140d332da2a.jpg",
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/5dfa1aa2-be88-4f44-bbd5-35cbe71f2639.jpg",
      ],
      sale_price: null,
      regular_price: null,
      type: "variable",
      stock_status: "instock",
      variations: [
        {
          __typename: "WProductVariation",
          id: "109995",
          sale_price: null,
          regular_price: 50,
        },
        {
          __typename: "WProductVariation",
          id: "109996",
          sale_price: null,
          regular_price: 70,
        },
        {
          __typename: "WProductVariation",
          id: "109997",
          sale_price: null,
          regular_price: 80,
        },
        {
          __typename: "WProductVariation",
          id: "109998",
          sale_price: null,
          regular_price: 150,
        },
      ],
      categories: [{ __typename: "WCategory", id: "21", name: "其他" }],
      tags: [
        { __typename: "WTag", id: "473", name: "RG25" },
        { __typename: "WTag", id: "499", name: "RG25goods" },
        { __typename: "WTag", id: "81", name: "原創" },
        { __typename: "WTag", id: "1381", name: "原創漫畫" },
        { __typename: "WTag", id: "1384", name: "原創角色" },
        { __typename: "WTag", id: "1388", name: "原創角色故事" },
        { __typename: "WTag", id: "370", name: "少年" },
        { __typename: "WTag", id: "374", name: "拳擊" },
        { __typename: "WTag", id: "369", name: "正太" },
        { __typename: "WTag", id: "373", name: "賽車" },
        { __typename: "WTag", id: "372", name: "足球" },
        { __typename: "WTag", id: "371", name: "運動" },
      ],
    },
    {
      __typename: "WProduct",
      id: "109940",
      name: "CUT NG！(RG25限定套組)",
      virtual: false,
      distributor_service: false,
      is_r18: false,
      short_description: "Digimon Adventure 拍攝花絮本",
      price_text: "40 - 250",
      main_image:
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/5d47bca3-f457-4fb5-b2f8-480585fdd092.jpg",
      images: [
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/5d47bca3-f457-4fb5-b2f8-480585fdd092.jpg",
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/2bab6ec2-5539-4177-852c-e727d5fb87d1.jpg",
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/ba9c637b-d615-4380-90bd-42c22381fa49.jpg",
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/9ec64f3a-ec5d-4ec7-9b14-7e969a1e9fb5.jpg",
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/34c22e9b-3805-4602-b2f3-2ce30bb4fe89.jpg",
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/3d3e1bf7-7a37-4598-b4e1-71ad8a92dec4.jpg",
      ],
      sale_price: null,
      regular_price: null,
      type: "variable",
      stock_status: "instock",
      variations: [
        {
          __typename: "WProductVariation",
          id: "110236",
          sale_price: null,
          regular_price: 40,
        },
        {
          __typename: "WProductVariation",
          id: "110237",
          sale_price: null,
          regular_price: 70,
        },
        {
          __typename: "WProductVariation",
          id: "110238",
          sale_price: null,
          regular_price: 150,
        },
        {
          __typename: "WProductVariation",
          id: "110239",
          sale_price: null,
          regular_price: 250,
        },
      ],
      categories: [{ __typename: "WCategory", id: "114", name: "漫畫" }],
      tags: [
        { __typename: "WTag", id: "157", name: "Digimon" },
        { __typename: "WTag", id: "473", name: "RG25" },
        { __typename: "WTag", id: "499", name: "RG25goods" },
        { __typename: "WTag", id: "164", name: "四格漫畫" },
        { __typename: "WTag", id: "162", name: "惡搞" },
        { __typename: "WTag", id: "160", name: "搞笑" },
        { __typename: "WTag", id: "159", name: "數碼寶貝" },
        { __typename: "WTag", id: "158", name: "數碼暴龍" },
        { __typename: "WTag", id: "165", name: "短篇漫畫" },
        { __typename: "WTag", id: "163", name: "被選中的孩子們" },
        { __typename: "WTag", id: "335", name: "被選召的孩子們" },
      ],
    },
    {
      __typename: "WProduct",
      id: "109861",
      name: "自家原創海報 遠井空及洛克的夏日",
      virtual: false,
      distributor_service: false,
      is_r18: false,
      short_description: "A3 Size，遠井空及洛克的夏日為題",
      price_text: "20",
      main_image:
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/662e03cd-23e9-4bd7-a07a-3aab417f078f.jpg",
      images: [
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/662e03cd-23e9-4bd7-a07a-3aab417f078f.jpg",
      ],
      sale_price: null,
      regular_price: 20,
      type: "simple",
      stock_status: "instock",
      variations: null,
      categories: [{ __typename: "WCategory", id: "117", name: "插畫" }],
      tags: [
        { __typename: "WTag", id: "473", name: "RG25" },
        { __typename: "WTag", id: "499", name: "RG25goods" },
        { __typename: "WTag", id: "81", name: "原創" },
        { __typename: "WTag", id: "1384", name: "原創角色" },
        { __typename: "WTag", id: "370", name: "少年" },
        { __typename: "WTag", id: "369", name: "正太" },
      ],
    },
    {
      __typename: "WProduct",
      id: "109840",
      name: "怪物事變 帆布袋",
      virtual: false,
      distributor_service: false,
      is_r18: false,
      short_description: "33x38cm，帆布質料，以繪師喜愛的角色為主",
      price_text: "50",
      main_image:
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/4f87d1c2-ea55-4329-9729-c954a8fdfa7b.jpg",
      images: [
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/4f87d1c2-ea55-4329-9729-c954a8fdfa7b.jpg",
      ],
      sale_price: null,
      regular_price: 50,
      type: "simple",
      stock_status: "instock",
      variations: null,
      categories: [{ __typename: "WCategory", id: "21", name: "其他" }],
      tags: [
        { __typename: "WTag", id: "473", name: "RG25" },
        { __typename: "WTag", id: "499", name: "RG25goods" },
        { __typename: "WTag", id: "1675", name: "岩木山雪裡白那之五十六子晶" },
        { __typename: "WTag", id: "1672", name: "怪物事變" },
        { __typename: "WTag", id: "1673", name: "日下夏羽" },
        { __typename: "WTag", id: "1677", name: "紺" },
        { __typename: "WTag", id: "1674", name: "蓼丸織" },
        { __typename: "WTag", id: "1676", name: "隱神鼓八千" },
      ],
    },
    {
      __typename: "WProduct",
      id: "109830",
      name: "怪物事變 匙扣",
      virtual: false,
      distributor_service: false,
      is_r18: false,
      short_description: "6cm單面壓克力匙扣",
      price_text: "20 - 50",
      main_image:
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/59490240-0e72-4f71-967f-9a9043944309.jpg",
      images: [
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/59490240-0e72-4f71-967f-9a9043944309.jpg",
      ],
      sale_price: null,
      regular_price: null,
      type: "variable",
      stock_status: "instock",
      variations: [
        {
          __typename: "WProductVariation",
          id: "110219",
          sale_price: null,
          regular_price: 20,
        },
        {
          __typename: "WProductVariation",
          id: "110220",
          sale_price: null,
          regular_price: 20,
        },
        {
          __typename: "WProductVariation",
          id: "110221",
          sale_price: null,
          regular_price: 20,
        },
        {
          __typename: "WProductVariation",
          id: "110222",
          sale_price: null,
          regular_price: 50,
        },
      ],
      categories: [{ __typename: "WCategory", id: "121", name: "吊飾/襟章" }],
      tags: [
        { __typename: "WTag", id: "473", name: "RG25" },
        { __typename: "WTag", id: "499", name: "RG25goods" },
        { __typename: "WTag", id: "1675", name: "岩木山雪裡白那之五十六子晶" },
        { __typename: "WTag", id: "1672", name: "怪物事變" },
        { __typename: "WTag", id: "1673", name: "日下夏羽" },
        { __typename: "WTag", id: "1674", name: "蓼丸織" },
      ],
    },
    {
      __typename: "WProduct",
      id: "109824",
      name: "DIGIMON 巨型立牌套組",
      virtual: false,
      distributor_service: false,
      is_r18: false,
      short_description: "15.5cm雙面壓克力立牌（本體3件+底座+20cm背景板）",
      price_text: "100",
      main_image:
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/65752477-7f91-4395-aa75-7eb8074b0587.jpg",
      images: [
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/65752477-7f91-4395-aa75-7eb8074b0587.jpg",
      ],
      sale_price: null,
      regular_price: null,
      type: "variable",
      stock_status: "instock",
      variations: [
        {
          __typename: "WProductVariation",
          id: "110104",
          sale_price: null,
          regular_price: 100,
        },
        {
          __typename: "WProductVariation",
          id: "110105",
          sale_price: null,
          regular_price: 100,
        },
      ],
      categories: [{ __typename: "WCategory", id: "21", name: "其他" }],
      tags: [
        { __typename: "WTag", id: "157", name: "Digimon" },
        { __typename: "WTag", id: "473", name: "RG25" },
        { __typename: "WTag", id: "499", name: "RG25goods" },
        { __typename: "WTag", id: "413", name: "八神太一" },
        { __typename: "WTag", id: "159", name: "數碼寶貝" },
        { __typename: "WTag", id: "158", name: "數碼暴龍" },
        { __typename: "WTag", id: "1671", name: "數碼獸" },
        { __typename: "WTag", id: "1670", name: "石田大和" },
      ],
    },
    {
      __typename: "WProduct",
      id: "70516",
      name: "許願樹下的回憶",
      virtual: false,
      distributor_service: false,
      is_r18: false,
      short_description: "尋回少年埋下的「回憶」之旅本",
      price_text: "40",
      main_image:
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/b2a3a1ce-9b88-46ff-af6a-c82d2c455c8e.jpg",
      images: [
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/b2a3a1ce-9b88-46ff-af6a-c82d2c455c8e.jpg",
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/9cc8ba10-4c3d-4d39-a182-eda90efeecd1.jpg",
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/4bedeb49-60a0-4da3-abcd-b0c240a32e1e.jpg",
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/6196ba3f-8457-4e49-9de8-e27970bc6e9a.jpg",
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/2ccd4c80-c658-42fa-99d5-35f9df3a78e4.jpg",
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/0cb28ce8-ce3b-4552-9631-087d526eba76.jpg",
      ],
      sale_price: null,
      regular_price: 40,
      type: "simple",
      stock_status: "instock",
      variations: null,
      categories: [{ __typename: "WCategory", id: "114", name: "漫畫" }],
      tags: [
        { __typename: "WTag", id: "473", name: "RG25" },
        { __typename: "WTag", id: "499", name: "RG25goods" },
        { __typename: "WTag", id: "81", name: "原創" },
        { __typename: "WTag", id: "370", name: "少年" },
        { __typename: "WTag", id: "423", name: "高中生" },
      ],
    },
    {
      __typename: "WProduct",
      id: "70507",
      name: "綜合動漫 襟章",
      virtual: false,
      distributor_service: false,
      is_r18: false,
      short_description: "5.8cm襟章",
      price_text: "10 - 60",
      main_image:
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/fb821818-cf31-45fd-8e33-126cbfa9ad66.jpg",
      images: [
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/fb821818-cf31-45fd-8e33-126cbfa9ad66.jpg",
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/0f4105ce-3658-4e32-951e-78468546e8cd.jpg",
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/769f1ad7-8f82-4bdb-9752-2bc30a86532b.jpg",
      ],
      sale_price: null,
      regular_price: null,
      type: "variable",
      stock_status: "instock",
      variations: [
        {
          __typename: "WProductVariation",
          id: "110136",
          sale_price: null,
          regular_price: 10,
        },
        {
          __typename: "WProductVariation",
          id: "110137",
          sale_price: null,
          regular_price: 10,
        },
        {
          __typename: "WProductVariation",
          id: "110138",
          sale_price: null,
          regular_price: 10,
        },
        {
          __typename: "WProductVariation",
          id: "110139",
          sale_price: null,
          regular_price: 10,
        },
        {
          __typename: "WProductVariation",
          id: "110140",
          sale_price: null,
          regular_price: 10,
        },
        {
          __typename: "WProductVariation",
          id: "110141",
          sale_price: null,
          regular_price: 30,
        },
        {
          __typename: "WProductVariation",
          id: "110142",
          sale_price: null,
          regular_price: 45,
        },
        {
          __typename: "WProductVariation",
          id: "110143",
          sale_price: null,
          regular_price: 60,
        },
      ],
      categories: [{ __typename: "WCategory", id: "21", name: "其他" }],
      tags: [
        { __typename: "WTag", id: "473", name: "RG25" },
        { __typename: "WTag", id: "499", name: "RG25goods" },
        { __typename: "WTag", id: "410", name: "學園奶爸" },
        { __typename: "WTag", id: "422", name: "工作細胞" },
      ],
    },
    {
      __typename: "WProduct",
      id: "70500",
      name: "DIGIMON 襟章",
      virtual: false,
      distributor_service: false,
      is_r18: false,
      short_description: "5.8cm襟章，光面",
      price_text: "10 - 60",
      main_image:
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/943aeb67-fb99-49ca-b4c2-cb237c4fc1fa.jpg",
      images: [
        "https://market-static.flyingmilktea.com/%E7%96%BE%E9%A2%A8%E7%BF%BC/product-image/943aeb67-fb99-49ca-b4c2-cb237c4fc1fa.jpg",
      ],
      sale_price: null,
      regular_price: null,
      type: "variable",
      stock_status: "instock",
      variations: [
        {
          __typename: "WProductVariation",
          id: "110084",
          sale_price: null,
          regular_price: 10,
        },
        {
          __typename: "WProductVariation",
          id: "110085",
          sale_price: null,
          regular_price: 10,
        },
        {
          __typename: "WProductVariation",
          id: "110086",
          sale_price: null,
          regular_price: 10,
        },
        {
          __typename: "WProductVariation",
          id: "110087",
          sale_price: null,
          regular_price: 10,
        },
        {
          __typename: "WProductVariation",
          id: "110088",
          sale_price: null,
          regular_price: 10,
        },
        {
          __typename: "WProductVariation",
          id: "110089",
          sale_price: null,
          regular_price: 40,
        },
        {
          __typename: "WProductVariation",
          id: "110090",
          sale_price: null,
          regular_price: 45,
        },
        {
          __typename: "WProductVariation",
          id: "110091",
          sale_price: null,
          regular_price: 60,
        },
        {
          __typename: "WProductVariation",
          id: "110092",
          sale_price: null,
          regular_price: 30,
        },
      ],
      categories: [
        {
          __typename: "WCategory",
          id: "121",
          name: "吊飾/襟章",
        },
      ],
      tags: [
        { __typename: "WTag", id: "157", name: "Digimon" },
        { __typename: "WTag", id: "473", name: "RG25" },
        { __typename: "WTag", id: "499", name: "RG25goods" },
        { __typename: "WTag", id: "159", name: "數碼寶貝" },
        { __typename: "WTag", id: "158", name: "數碼暴龍" },
      ],
    },
  ],
};

const Template = () => (
  <Grid container>
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <ShopSummaryItem item={shop} />
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
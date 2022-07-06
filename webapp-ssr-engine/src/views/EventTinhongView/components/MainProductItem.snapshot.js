import React from "react";

import mapValues from "lodash/mapValues";

import { TEST_VIEWPORT_SET } from "../../../../.storybook/viewports";
import MainProductItem from "./MainProductItem";

export default {
  title: "📷/views/EventTinhongView/components/MainProductItem",
  component: MainProductItem,
};

const products = {
  __typename: "WProduct",
  id: "114758",
  name: "惡之華，聖光之十字",
  description:
    '<p><span style="font-size: 18px"><strong>【內容簡介】</strong></span></p>\n<p><span style="font-size: 16px">開啟約櫃需要一組蘊含數秘的符號密碼，</span></p>\n<p><span style="font-size: 16px">分別由《啟示錄》預言的七間教會保管。</span></p>\n<p><span style="font-size: 16px">到了中世紀，這七間教會全面陷落，</span></p>\n<p><span style="font-size: 16px">一個歷史上存在的神秘團體奪得了密碼。</span></p>\n<p>&nbsp;</p>\n<p><span style="font-size: 16px">聖地的戰火瀰漫之際，救世主團隊面臨滅團的厄運，</span></p>\n<p><span style="font-size: 16px">唯一的希望就在約櫃之內。</span></p>\n<p>&nbsp;</p>\n<p><span style="font-size: 16px">暗示「聖人」能力的線索，竟來自一個舉世知名的標誌！</span></p>\n<p>&nbsp;</p>\n<p><span style="font-size: 16px">血與聖杯，十字架的意義，將在罪惡之花上綻放⋯⋯</span></p>\n<p><span style="font-size: 16px">史詩式奇幻冒險的最終章，迎來人類末日存亡之戰！</span></p>\n<p>&nbsp;</p>\n<p><span style="font-size: 18px"><strong>【詳細資料】</strong></span></p>\n<p><span style="font-size: 16px">作者：天航</span></p>\n<p><span style="font-size: 16px">出版：天航出版社</span></p>\n<p><span style="font-size: 16px">語言：繁體中文</span></p>\n<p>&nbsp;</p>\n<p><span style="font-size: 18px"><strong>【運送方式】</strong></span></p>\n<p><span style="font-size: 16px">港澳地區默認使用「順豐到付」。</span></p>\n<p style="margin-left:0px"><span style="font-size: 16px;font-family: inherit">如使用順豐智能櫃到付或自取點到付，下單時請於「地址」一欄中填寫智能櫃/自取點編號。</span></p>\n<p>&nbsp;</p>\n<p><span style="font-size: 16px">易網遞可送達的國家默認使用「易網遞」。有郵件追蹤功能，送遞時間為7-14個工作天（送遞時間可能因疫情影響而延遲）。</span></p>\n<p><span style="font-size: 16px">其他詳情請查看 </span><a href="https://www.hongkongpost.hk/tc/sending_mail/international/air/eexpress/index.html" target="_blank" rel="noopener noreferrer"><span style="font-size: 16px">香港郵政易網遞 (e-Express)網頁</span></a><span style="font-size: 16px"> 。</span></p>\n<p>&nbsp;</p>\n<p><span style="font-size: 16px">凡是購買 天航作品 滿三本或以上、或希望郵寄到其他不在選項內的國家、或希望使用其他不在選項內的郵遞方式（例如掛號、速遞、到付等），可聯絡飛天奶茶為您重新計算運費👇🏻</span></p>\n<p><span style="font-size: 16px">1. 在郵寄選項中請選擇「與飛天奶茶聯絡」</span></p>\n<p><span style="font-size: 16px">2. 聯絡</span><a href="https://market.flyingmilktea.com/chat?targetID=19" target="_blank" rel="noopener noreferrer"><span style="font-size: 16px">飛天奶茶官方攤位</span></a><span style="font-size: 16px"> ，或聯絡飛天奶茶的</span><a href="http://www.facebook.com/flyingmilktea" target="_blank" rel="noopener noreferrer"><span style="font-size: 16px">Facebook</span></a><span style="font-size: 16px"> 或</span><a href="http://www.instagram.com/flyingmilktea_" target="_blank" rel="noopener noreferrer"><span style="font-size: 16px">Instagram</span></a>&nbsp;</p>\n<p><span style="font-size: 16px">3. 等待飛天奶茶的工作人員為您包裹商品、量度重量並計算運費</span></p>\n<p><span style="font-size: 16px">4. 按工作人員指示，到 </span><a href="https://market.flyingmilktea.com/product/83701" target="_blank" rel="noopener noreferrer"><span style="font-size: 16px">官方運費</span></a><span style="font-size: 16px">  購買相應件數</span></p>\n<p>&nbsp;</p>\n<p><span style="font-size: 16px">⚠️買家請自行承擔任何郵寄風險，順豐/易網遞也有可能寄失，如有需要請通知飛天奶茶官方加購保險。⚠️</span></p></p>\n',
  short_description: "作者：天航，D系列第七集（D07）",
  slug: "%e6%83%a1%e4%b9%8b%e8%8f%af%ef%bc%8c%e8%81%96%e5%85%89%e4%b9%8b%e5%8d%81%e5%ad%97",
  date_created_gmt: "2021-07-16T22:24:01.000Z",
  date_modified_gmt: "2021-09-26T10:24:34.000Z",
  type: "simple",
  is_r18: false,
  variations: null,
  stock_quantity: null,
  stock_status: "instock",
  status: "publish",
  featured: false,
  price: 78,
  price_text: "78",
  regular_price: 78,
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
      id: "115",
      name: "小說/書",
      image: {
        __typename: "WImage",
        name: "8",
        src: "http://wp-d-dev-kf-s2-graphql.flyingpigs.ninja/wp-content/uploads/2020/07/8.png",
        alt: "",
      },
    },
  ],
  tags: [
    {
      __typename: "WTag",
      id: "1887",
      name: "D系列",
      slug: "d%e7%b3%bb%e5%88%97",
      description: "",
    },
    {
      __typename: "WTag",
      id: "81",
      name: "原創",
      slug: "%e5%8e%9f%e5%89%b5",
      description: "",
    },
    {
      __typename: "WTag",
      id: "1889",
      name: "原創小說",
      slug: "%e5%8e%9f%e5%89%b5%e5%b0%8f%e8%aa%aa",
      description: "",
    },
    {
      __typename: "WTag",
      id: "1888",
      name: "天航",
      slug: "%e5%a4%a9%e8%88%aa",
      description: "",
    },
    {
      __typename: "WTag",
      id: "1890",
      name: "天航出版社",
      slug: "%e5%a4%a9%e8%88%aa%e5%87%ba%e7%89%88%e7%a4%be",
      description: "",
    },
    {
      __typename: "WTag",
      id: "950",
      name: "奇幻",
      slug: "%e5%a5%87%e5%b9%bb",
      description: "",
    },
    {
      __typename: "WTag",
      id: "964",
      name: "小說",
      slug: "%e5%b0%8f%e8%aa%aa",
      description: "",
    },
    {
      __typename: "WTag",
      id: "953",
      name: "長篇小說",
      slug: "%e9%95%b7%e7%af%87%e5%b0%8f%e8%aa%aa",
      description: "",
    },
    {
      __typename: "WTag",
      id: "1141",
      name: "飛天奶茶代理商品",
      slug: "%e9%a3%9b%e5%a4%a9%e5%a5%b6%e8%8c%b6%e4%bb%a3%e7%90%86%e5%95%86%e5%93%81-2",
      description: "",
    },
  ],
  main_image:
    "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/9e0caa81-1c0f-4b6e-a004-7178291bdb65.jpg",
  images: [
    "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/9e0caa81-1c0f-4b6e-a004-7178291bdb65.jpg",
  ],
  menu_order: 0,
  shipping: [
    {
      method: "與飛天奶茶聯絡",
      region: "ALL",
      shippingFeeFirst: 0,
      shippingFeeAdditional: 0,
    },
    {
      method: "順豐到付或智能櫃到付",
      region: "HK",
      shippingFeeFirst: 0,
      shippingFeeAdditional: 0,
    },
    {
      method: "順豐到付或智能櫃到付",
      region: "MO",
      shippingFeeFirst: 0,
      shippingFeeAdditional: 0,
    },
    {
      method: "香港郵政 易網遞",
      region: "AU",
      shippingFeeFirst: 78,
      shippingFeeAdditional: 78,
    },
    {
      method: "香港郵政 易網遞",
      region: "JP",
      shippingFeeFirst: 40,
      shippingFeeAdditional: 40,
    },
    {
      method: "香港郵政 易網遞",
      region: "GB",
      shippingFeeFirst: 86,
      shippingFeeAdditional: 86,
    },
    {
      method: "香港郵政 易網遞",
      region: "US",
      shippingFeeFirst: 99,
      shippingFeeAdditional: 99,
    },
    {
      method: "香港郵政 易網遞",
      region: "PH",
      shippingFeeFirst: 45,
      shippingFeeAdditional: 45,
    },
    {
      method: "香港郵政 易網遞",
      region: "SG",
      shippingFeeFirst: 42,
      shippingFeeAdditional: 42,
    },
    {
      method: "香港郵政 易網遞",
      region: "TH",
      shippingFeeFirst: 43,
      shippingFeeAdditional: 43,
    },
    {
      method: "香港郵政 易網遞",
      region: "KR",
      shippingFeeFirst: 45,
      shippingFeeAdditional: 45,
    },
    {
      method: "香港郵政 易網遞",
      region: "FR",
      shippingFeeFirst: 65,
      shippingFeeAdditional: 65,
    },
    {
      method: "香港郵政 易網遞",
      region: "DE",
      shippingFeeFirst: 66,
      shippingFeeAdditional: 66,
    },
  ],
};

const Template = () => <MainProductItem item={products} />;

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

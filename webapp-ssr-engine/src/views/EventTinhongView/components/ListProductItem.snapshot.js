import React from "react";

import mapValues from "lodash/mapValues";

import { TEST_VIEWPORT_SET } from "../../../../.storybook/viewports";
import ListProductItem from "./ListProductItem";

export default {
  title: "📷/views/EventTinhongView/components/ListProductItem",
  component: ListProductItem,
};

const product = {
  __typename: "WProduct",
  id: "114757",
  name: "曼德拉超時空實驗",
  description:
    '<p><span style="font-size: 18px"><strong>【內容簡介】</strong></span></p>\n<p><span style="font-size: 16px">第三次世界大戰之後，地球只剩兩個國家：</span></p>\n<p><span style="font-size: 16px">愛比堅尼聯合國及大東歐亞共和國。</span></p>\n<p><span style="font-size: 16px">而全球人口銳減至四億 ，人類正步向滅亡。</span></p>\n<p>&nbsp;</p>\n<p><span style="font-size: 16px">在歐洲某個角落，正在進行史無前例的實驗——</span></p>\n<p><span style="font-size: 16px">靈魂超越時空，在黑暗的歷史中按圖索驥。</span></p>\n<p><span style="font-size: 16px">保住一個人的性命，就能拯救整個世界。</span></p>\n<p>&nbsp;</p>\n<p><span style="font-size: 16px">好事，竟有另一伙人重返時空。</span></p>\n<p><span style="font-size: 16px">他們自稱是蛇的使者、撒但的傳人⋯⋯</span></p>\n<p>&nbsp;</p>\n<p><span style="font-size: 16px">如夢幻，如電影，發掘時空的奧妙。</span></p>\n<p><span style="font-size: 16px">七位救世主迎戰九歌，寫下末日戰爭的結局！</span></p>\n<p>&nbsp;</p>\n<p><span style="font-size: 18px"><strong>【詳細資料】</strong></span></p>\n<p><span style="font-size: 16px">作者：天航</span></p>\n<p><span style="font-size: 16px">出版：天航出版社</span></p>\n<p><span style="font-size: 16px">語言：繁體中文</span><br />&nbsp;</p>\n<p style="text-align:start"><span style="font-size: 18px;font-family: inherit"><strong>【運送方式】</strong></span></p>\n<p style="text-align:start"><span style="font-size: 16px;font-family: inherit">港澳地區默認使用「順豐到付」。</span></p>\n<p style="text-align:start"><span style="font-size: 16px;font-family: inherit">如使用順豐智能櫃到付或自取點到付，下單時請於「地址」一欄中填寫智能櫃/自取點編號。</span></p>\n<p style="text-align:start">&nbsp;</p>\n<p style="text-align:start"><span style="font-size: 16px;font-family: inherit">易網遞可送達的國家默認使用「易網遞」。有郵件追蹤功能，送遞時間為7-14個工作天（送遞時間可能因疫情影響而延遲）。</span></p>\n<p style="text-align:start"><span style="font-size: 16px;font-family: inherit">其他詳情請查看</span> <a href="https://www.hongkongpost.hk/tc/sending_mail/international/air/eexpress/index.html" target="_blank" rel="noopener noreferrer"><span style="color: inherit;font-size: inherit;font-family: inherit">香港郵政易網遞 (e-Express)網頁</span></a> <span style="font-size: 16px;font-family: inherit">。</span></p>\n<p style="text-align:start">&nbsp;</p>\n<p style="text-align:start"><span style="font-size: 16px;font-family: inherit">凡是購買 天航作品 滿三本或以上、或希望郵寄到其他不在選項內的國家、或希望使用其他不在選項內的郵遞方式（例如掛號、速遞、到付等），可聯絡飛天奶茶為您重新計算運費👇🏻</span></p>\n<p style="text-align:start"><span style="font-size: 16px;font-family: inherit">1. 在郵寄選項中請選擇「與飛天奶茶聯絡」</span></p>\n<p style="text-align:start"><span style="font-size: 16px;font-family: inherit">2. 聯絡</span><a href="https://market.flyingmilktea.com/chat?targetID=19" target="_blank" rel="noopener noreferrer"><span style="color: inherit;font-size: inherit;font-family: inherit">飛天奶茶官方攤位</span></a> <span style="font-size: 16px;font-family: inherit">，或聯絡飛天奶茶的</span><a href="http://www.facebook.com/flyingmilktea" target="_blank" rel="noopener noreferrer"><span style="color: inherit;font-size: inherit;font-family: inherit">Facebook</span></a><span style="font-size: 16px;font-family: inherit">或</span><a href="http://www.instagram.com/flyingmilktea_" target="_blank" rel="noopener noreferrer"><span style="color: inherit;font-size: inherit;font-family: inherit">Instagram</span></a>&nbsp;</p>\n<p style="text-align:start"><span style="font-size: 16px;font-family: inherit">3. 等待飛天奶茶的工作人員為您包裹商品、量度重量並計算運費</span></p>\n<p style="text-align:start"><span style="font-size: 16px;font-family: inherit">4. 按工作人員指示，到</span> <a href="https://market.flyingmilktea.com/product/83701" target="_blank" rel="noopener noreferrer"><span style="color: inherit;font-size: inherit;font-family: inherit">官方運費</span></a> <span style="font-size: 16px;font-family: inherit">購買相應件數</span></p>\n<p style="text-align:start">&nbsp;</p>\n<p style="text-align:start"><span style="font-size: 16px;font-family: inherit">⚠️買家請自行承擔任何郵寄風險，順豐/易網遞也有可能寄失，如有需要請通知飛天奶茶官方加購保險。⚠️</span></p>\n',
  short_description: "作者：天航，D系列第六集（D06）",
  slug: "%e6%9b%bc%e5%be%b7%e6%8b%89%e8%b6%85%e6%99%82%e7%a9%ba%e5%af%a6%e9%a9%97",
  date_created_gmt: "2021-07-16T22:19:05.000Z",
  date_modified_gmt: "2021-09-26T10:24:33.000Z",
  type: "simple",
  is_r18: false,
  variations: null,
  stock_quantity: null,
  stock_status: "instock",
  status: "publish",
  featured: false,
  price: 68,
  price_text: "68",
  regular_price: 68,
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
    "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/3d724c47-144b-4838-9635-9ad703a358a5.jpg",
  images: [
    "https://market-static.flyingmilktea.com/%E9%A3%9B%E5%A4%A9%E5%A5%B6%E8%8C%B6%20FlyingMilkTea/product-image/3d724c47-144b-4838-9635-9ad703a358a5.jpg",
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

const Template = () => <ListProductItem item={product} />;

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

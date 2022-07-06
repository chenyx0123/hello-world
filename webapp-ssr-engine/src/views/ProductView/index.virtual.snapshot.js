import React from "react";

import mapValues from "lodash/mapValues";

import ProductView from ".";
import { TEST_VIEWPORT_SET } from "../../../.storybook/viewports";

export default {
  title: "📷/views/ProductView/index.virtual",
  component: ProductView,
};

const product = {
  __typename: "WProduct",
  shop: {
    __typename: "WShop",
    id: "105702",
    name: "Valhalla-Production",
    main_image:
      "https://market-static.flyingmilktea.com/%E5%8B%87%E8%80%85%E9%9B%BB/shop-avatar/7a038627-c305-43d8-bffc-020d2097c831.jpg",
    owner: { __typename: "User", id: "10196" },
    products: [
      {
        __typename: "WProduct",
        id: "121252",
        name: "【ACG內容創作推廣活動】第十彈-文字間行走的吟遊詩人，成為輕小說家注意事項",
        virtual: true,
        distributor_service: false,
        is_r18: false,
        short_description:
          "從輕小說到冒險文字類遊戲的遊戲製作人，小鹿老師看似在一切都是文字的街道中輕鬆漫步。但是殊不知，這只是表面上的平和。實際上文字與文字、詞彙與詞彙之間的勇者鬥惡龍才是真正頭痛的問題。但身為文字吟遊詩人的小鹿老師，又是怎麼樣在這樣看次相同但又不相似的狀況下，完成一個又一個困難的冒險關卡呢? 就讓我們一起來聽聽小鹿老師怎麼說吧!!",
        price_text: "40",
        main_image:
          "https://market-static.flyingmilktea.com/%E5%8B%87%E8%80%85%E9%9B%BB/product-image/08fdf203-6797-4238-8d04-cdc229b7a8a8.jpg",
        sale_price: null,
        regular_price: 40,
        type: "simple",
        stock_status: "instock",
        variations: null,
        categories: [{ __typename: "WCategory", id: "21", name: "其他" }],
        tags: [
          { __typename: "WTag", id: "1569", name: "ACG文化" },
          { __typename: "WTag", id: "1979", name: "ACG講座" },
          { __typename: "WTag", id: "2012", name: "AVG遊戲製作" },
          { __typename: "WTag", id: "1631", name: "動漫" },
          { __typename: "WTag", id: "2013", name: "小鹿老師" },
          { __typename: "WTag", id: "2011", name: "輕小說" },
        ],
      },
      {
        __typename: "WProduct",
        id: "116292",
        name: "Acg內容創作推廣活動第九彈-原創IP的魅力展現，進擊的文創商品奇行種",
        virtual: true,
        distributor_service: false,
        is_r18: false,
        short_description:
          "仙界大濕所創作的壞壞漫畫系列，可說是非常幽默風趣以壞掉妹與白博士等人之間的互動更是讓人無比發笑。而在2019年我們更迎來了大濕的又一強力角色Happy，然而原先創作是和直播觀眾互動的無心之舉竟也成了一系列強力的原創角色風潮。同時壞掉妹與Happy系列更是與許多遊戲或廠商合作的搶手對象。這次將邀請大濕來與我們一起分享創作原創IP與設計商品的經驗",
        price_text: "40",
        main_image:
          "https://market-static.flyingmilktea.com/%E5%8B%87%E8%80%85%E9%9B%BB/product-image/2d4409eb-71a8-46b5-b132-0e73246cae8a.jpg",
        sale_price: null,
        regular_price: 40,
        type: "simple",
        stock_status: "instock",
        variations: null,
        categories: [{ __typename: "WCategory", id: "21", name: "其他" }],
        tags: [
          { __typename: "WTag", id: "1979", name: "ACG講座" },
          { __typename: "WTag", id: "1393", name: "仙界大濕" },
          { __typename: "WTag", id: "1980", name: "原創IP" },
        ],
      },
      {
        __typename: "WProduct",
        id: "109780",
        name: "Fate／Grand Order battle action!!",
        virtual: false,
        distributor_service: true,
        is_r18: false,
        short_description:
          "台灣同人社團【紳士們的瓦爾哈拉】最強力漫畫新星登場!! 熱血破表的戰鬥場面，絕對包你滿意!!",
        price_text: "75",
        main_image:
          "https://market-static.flyingmilktea.com/%E5%8B%87%E8%80%85%E9%9B%BB/product-image/6ca7882a-e5f0-41df-88d1-aaea1e868ab4.jpg",
        sale_price: null,
        regular_price: 75,
        type: "simple",
        stock_status: "instock",
        variations: null,
        categories: [{ __typename: "WCategory", id: "114", name: "漫畫" }],
        tags: [
          { __typename: "WTag", id: "621", name: "#FGO" },
          { __typename: "WTag", id: "171", name: "Fate" },
          { __typename: "WTag", id: "172", name: "FateGrandOrder" },
          { __typename: "WTag", id: "1129", name: "台灣" },
          { __typename: "WTag", id: "149", name: "同人" },
          { __typename: "WTag", id: "1658", name: "戰鬥" },
          { __typename: "WTag", id: "392", name: "漫畫" },
          { __typename: "WTag", id: "165", name: "短篇漫畫" },
          { __typename: "WTag", id: "1141", name: "飛天奶茶代理商品" },
          { __typename: "WTag", id: "1659", name: "龍龍" },
        ],
      },
    ],
  },
  id: "122099",
  name: "【ACG內容創作推廣活動】第11彈- 虛實之間，VTuber形象戰國風雲繪",
  description:
    '<p style="text-align:start">﹏﹏﹏﹏​<br />講者介紹<br />﹋﹋﹋﹋<br />➤ 講者 ：Clo BA　<br />同人創作圈知名創作者，原創角色-丘哥 他老爸。<br />2017年台北市大運 繪師國家隊企劃發起人<br />2019、2020 《紅白繪師大對決》企劃發起人<br />初音未來主題快閃店《未來STYLE》合作繪師<br />尖端出版 《前國民偶像要做國軍唯一的男子漢》輕小說繪師</p>\n<p>【VTuber委託製作】<br />1 貝莉莓-Vtype製作<br />2 秋月莉莉卡</p>\n<p style="text-align:start">\n<p><img src="https://static.accupass.com/eventintro/2111300431209344089280.jpg" alt="" style="height: 874px;width: 500px" /></p>\n<p style="text-align:start">\n<p><img src="https://static.accupass.com/eventintro/2111300431547763982290.jpg" alt="" style="height: 496px;width: 500px" /></p>\n<p style="text-align:start">﹏﹏﹏﹏​<br />講者粉專<br />﹋﹋﹋﹋<br /><a href="https://www.facebook.com/clobaluckyhouse/?__cft__[0]=AZVlAsjupdiKHOPYFN01LVfMcItmNlfB5VRbqm_oF9_B20V1y7TM-eP4McLR0fTUUoxjuDvabJpvRVZSYHJnb85EWWN0QhTEniWPek-Cjm_axWuVnqWN-z76ZuvKqX0XCn2kyau4xD0gK1D0bBMF7RGY&amp;__tn__=q" target="_self" rel="noopener noreferrer">https://www.facebook.com/clobaluckyhouse</a><br />﹏﹏﹏﹏​<br />活動大綱<br />﹋﹋﹋﹋　<br />1.VTber戰國時代<br />(1) 開始接觸與製作VTuber皮時間<br />(2) 近期合作Vtuber單位介紹</p>\n<p style="text-align:start">2 .如何讓自己的女兒獨樹一格<br />(1) Vtuber皮委託方注意事項<br />(2) 女兒衣服與元素搭配建議<br />﹏﹏﹏﹏​<br />活動流程<br />﹋﹋﹋﹋　<br />14：00 - 14：05_講師&amp;講座介紹<br />14：05 - 15：00_上半場：VTber戰國時代來臨!! (講者對目前產業觀察)<br />15：00 - 15：10_休息時間<br />15：10 - 16：10_下半場：如何讓自己的女兒獨樹一格<br />16：10 - 16：30_Q&amp;A時間<br />___________________________________<br />活動日期：12/11(六)<br />活動時間：下午2點~下午4點30分<br />活動地點：小聚點 活動藝術空間<br />台北市南港區同德路60路2樓<br />___________________________________<br />【計劃單位】<br />主辦單位 ：V-Production<br />合辦單位 ：幸運屋、小聚點Upper、飛天奶茶、第九星系<br />執行單位 ：V-Production&nbsp;</p>\n',
  short_description:
    "VT戰國時代逐漸火熱，在這個百花齊放、各顯神通的時代裡 你該怎麼讓你未來的女兒突破重圍呢!! 要設計出怎樣的皮才有吸引人呢!! 那就讓戰國知名參謀 Clo BA老師來幫你指點迷津吧!!",
  slug: "%e3%80%90acg%e5%85%a7%e5%ae%b9%e5%89%b5%e4%bd%9c%e6%8e%a8%e5%bb%a3%e6%b4%bb%e5%8b%95%e3%80%91%e7%ac%ac11%e5%bd%88-%e8%99%9b%e5%af%a6%e4%b9%8b%e9%96%93%ef%bc%8cvtuber%e5%bd%a2%e8%b1%a1%e6%88%b0",
  date_created_gmt: "2021-11-30T04:50:38.000Z",
  date_modified_gmt: "2021-12-16T09:00:10.000Z",
  type: "simple",
  is_r18: false,
  variations: null,
  stock_quantity: null,
  stock_status: "instock",
  status: "publish",
  featured: true,
  price: 40,
  price_text: "40",
  regular_price: 40,
  sale_price: null,
  date_on_sale_from_gmt: null,
  date_on_sale_to_gmt: null,
  purchasable: true,
  virtual: true,
  distributor_service: false,
  digitalAssetAuthorized: null,
  digitalAssets: [],
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
      id: "2022",
      name: "Clo BA",
      slug: "clo-ba",
      description: "",
    },
    {
      __typename: "WTag",
      id: "1412",
      name: "Vtuber",
      slug: "vtuber",
      description: "",
    },
    {
      __typename: "WTag",
      id: "2023",
      name: "V皮",
      slug: "v%e7%9a%ae",
      description: "",
    },
    {
      __typename: "WTag",
      id: "2021",
      name: "幸運屋",
      slug: "%e5%b9%b8%e9%81%8b%e5%b1%8b",
      description: "",
    },
    {
      __typename: "WTag",
      id: "1630",
      name: "繪圖",
      slug: "%e7%b9%aa%e5%9c%96",
      description: "",
    },
  ],
  main_image:
    "https://market-static.flyingmilktea.com/%E5%8B%87%E8%80%85%E9%9B%BB/product-image/0ec10de0-ee8e-4197-8969-26bb4fb7f56e.jpg",
  images: [
    "https://market-static.flyingmilktea.com/%E5%8B%87%E8%80%85%E9%9B%BB/product-image/0ec10de0-ee8e-4197-8969-26bb4fb7f56e.jpg",
  ],
  menu_order: 0,
  shipping: null,
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

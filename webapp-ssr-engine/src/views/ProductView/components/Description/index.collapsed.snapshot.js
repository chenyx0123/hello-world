import React from "react";

import mapValues from "lodash/mapValues";

import Description from ".";
import { TEST_VIEWPORT_SET } from "../../../../../.storybook/viewports";

export default {
  title: "📷/views/ProductView/components/Description/index.collapsed",
  component: Description,
};

const product = {
  description:
    '<p style="text-align:start">﹏﹏﹏﹏​<br />講者介紹<br />﹋﹋﹋﹋<br />➤ 講者 ：Clo BA　<br />同人創作圈知名創作者，原創角色-丘哥 他老爸。<br />2017年台北市大運 繪師國家隊企劃發起人<br />2019、2020 《紅白繪師大對決》企劃發起人<br />初音未來主題快閃店《未來STYLE》合作繪師<br />尖端出版 《前國民偶像要做國軍唯一的男子漢》輕小說繪師</p>\n<p>【VTuber委託製作】<br />1 貝莉莓-Vtype製作<br />2 秋月莉莉卡</p>\n<p style="text-align:start">\n<p><img src="https://static.accupass.com/eventintro/2111300431209344089280.jpg" alt="" style="height: 874px;width: 500px" /></p>\n<p style="text-align:start">\n<p><img src="https://static.accupass.com/eventintro/2111300431547763982290.jpg" alt="" style="height: 496px;width: 500px" /></p>\n<p style="text-align:start">﹏﹏﹏﹏​<br />講者粉專<br />﹋﹋﹋﹋<br /><a href="https://www.facebook.com/clobaluckyhouse/?__cft__[0]=AZVlAsjupdiKHOPYFN01LVfMcItmNlfB5VRbqm_oF9_B20V1y7TM-eP4McLR0fTUUoxjuDvabJpvRVZSYHJnb85EWWN0QhTEniWPek-Cjm_axWuVnqWN-z76ZuvKqX0XCn2kyau4xD0gK1D0bBMF7RGY&amp;__tn__=q" target="_self" rel="noopener noreferrer">https://www.facebook.com/clobaluckyhouse</a><br />﹏﹏﹏﹏​<br />活動大綱<br />﹋﹋﹋﹋　<br />1.VTber戰國時代<br />(1) 開始接觸與製作VTuber皮時間<br />(2) 近期合作Vtuber單位介紹</p>\n<p style="text-align:start">2 .如何讓自己的女兒獨樹一格<br />(1) Vtuber皮委託方注意事項<br />(2) 女兒衣服與元素搭配建議<br />﹏﹏﹏﹏​<br />活動流程<br />﹋﹋﹋﹋　<br />14：00 - 14：05_講師&amp;講座介紹<br />14：05 - 15：00_上半場：VTber戰國時代來臨!! (講者對目前產業觀察)<br />15：00 - 15：10_休息時間<br />15：10 - 16：10_下半場：如何讓自己的女兒獨樹一格<br />16：10 - 16：30_Q&amp;A時間<br />___________________________________<br />活動日期：12/11(六)<br />活動時間：下午2點~下午4點30分<br />活動地點：小聚點 活動藝術空間<br />台北市南港區同德路60路2樓<br />___________________________________<br />【計劃單位】<br />主辦單位 ：V-Production<br />合辦單位 ：幸運屋、小聚點Upper、飛天奶茶、第九星系<br />執行單位 ：V-Production&nbsp;</p>\n',
  short_description: "Digimon Adventure 拍攝花絮本",
};

const Template = () => <Description product={product} expanded={false} />;

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

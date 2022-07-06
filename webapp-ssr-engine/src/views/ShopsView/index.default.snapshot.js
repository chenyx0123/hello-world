import React from "react";

import mapValues from "lodash/mapValues";

import ShopsView from ".";
import { TEST_VIEWPORT_SET } from "../../../.storybook/viewports";

export default {
  title: "📷/views/ShopsView/index.default",
  component: ShopsView,
};

const shops = [
  {
    __typename: "WShop",
    id: "122081",
    name: "Bear CraftsArt 卡雕研究室",
    main_image:
      "https://market-static.flyingmilktea.com/Bear%20CraftsArt/shop-avatar/ce716e30-b2d5-43a4-b9b4-56bc88aaa6e1.jpg",
    banner_image:
      "https://market-static.flyingmilktea.com/Bear%20CraftsArt/shop-banner/2fbae159-1936-4f7f-b154-d63b2546342a.jpg",
  },
  {
    __typename: "WShop",
    id: "121941",
    name: "囧愛賣物店",
    main_image: null,
    banner_image: null,
  },
  {
    __typename: "WShop",
    id: "121420",
    name: "ww_ww的攤位",
    main_image:
      "https://market-static.flyingmilktea.com/ww_ww/shop-avatar/281df393-a158-4575-877f-71bb1620911b.jpg",
    banner_image:
      "https://market-static.flyingmilktea.com/ww_ww/shop-banner/8aecc1c2-d16d-4704-80e9-b1dbc2c53e86.jpg",
  },
  {
    __typename: "WShop",
    id: "121270",
    name: "Cross Ch. 月島クロス【HKVTuber】",
    main_image:
      "https://market-static.flyingmilktea.com/tksmcross/shop-avatar/b9291982-ffd3-47e1-affa-6b3b3e44f645.jpg",
    banner_image:
      "https://market-static.flyingmilktea.com/tksmcross/shop-banner/7d80aa9b-1a4f-4c73-974a-951ba6b6e715.jpg",
  },
  {
    __typename: "WShop",
    id: "121029",
    name: "chocobeads的攤位",
    main_image: null,
    banner_image: null,
  },
  {
    __typename: "WShop",
    id: "119180",
    name: "D9,10 貓狗貼貼",
    main_image:
      "https://market-static.flyingmilktea.com/Azuki_Inu/shop-avatar/ab5e8b79-911e-49fd-97a5-82b21a403577.jpg",
    banner_image: null,
  },
  {
    __typename: "WShop",
    id: "118947",
    name: "Kosame雨",
    main_image:
      "https://market-static.flyingmilktea.com/weki2926/shop-avatar/48bb9e34-c57d-4efc-9655-15ab3860bb26.jpg",
    banner_image:
      "https://market-static.flyingmilktea.com/weki2926/shop-banner/e4ea591b-0b4c-4b61-8f83-60392f4e15ae.jpg",
  },
  {
    __typename: "WShop",
    id: "118772",
    name: "😈魔王MoMo😈",
    main_image:
      "https://market-static.flyingmilktea.com/ki_momo73/shop-avatar/ec708f36-b705-4915-8301-3ff8d48a140b.jpg",
    banner_image:
      "https://market-static.flyingmilktea.com/ki_momo73/shop-banner/a638c40a-9ed2-4ccf-9fda-f41bfb686188.jpg",
  },
  {
    __typename: "WShop",
    id: "117862",
    name: "VTuber-ON",
    main_image:
      "https://market-static.flyingmilktea.com/vtuberonhk/shop-avatar/8165e0a1-745d-4fa5-b8e9-2fabdd1e0863.jpg",
    banner_image:
      "https://market-static.flyingmilktea.com/vtuberonhk/shop-banner/caa87b0c-788d-469c-8913-cff916b92c72.jpg",
  },
  {
    __typename: "WShop",
    id: "117833",
    name: "冬@auseklis_的攤位",
    main_image:
      "https://market-static.flyingmilktea.com/%E5%86%AC%40auseklis_/shop-avatar/55fc739e-c016-4695-9ca7-dddf96db755e.jpg",
    banner_image: null,
  },
  {
    __typename: "WShop",
    id: "117814",
    name: "丘比重工 @QBHeavyindustry",
    main_image:
      "https://market-static.flyingmilktea.com/KyubeyQB/shop-avatar/fa9bc109-894b-47e2-898a-5fbd6377b9c4.jpg",
    banner_image:
      "https://market-static.flyingmilktea.com/KyubeyQB/shop-banner/b690e702-9abd-4535-ad9d-ddcd55c1e151.jpg",
  },
  {
    __typename: "WShop",
    id: "117388",
    name: "涼茶メメ的攤位",
    main_image:
      "https://market-static.flyingmilktea.com/GARY661618/shop-avatar/64ead1a9-aec8-4efa-9d4a-695da404ca23.jpg",
    banner_image:
      "https://market-static.flyingmilktea.com/GARY661618/shop-banner/ca450d5a-20c3-49cf-bb49-b097b0ecdd12.jpg",
  },
  {
    __typename: "WShop",
    id: "117144",
    name: "漫畫代理人",
    main_image:
      "https://market-static.flyingmilktea.com/mangaagent/shop-avatar/c2619526-9c2c-4896-a285-a9f62408713f.jpg",
    banner_image:
      "https://market-static.flyingmilktea.com/mangaagent/shop-banner/63638ea0-88ef-4e5e-a03b-1ebd138b0784.jpg",
  },
  {
    __typename: "WShop",
    id: "117079",
    name: "kuanAMDYES的攤位",
    main_image: null,
    banner_image: null,
  },
  {
    __typename: "WShop",
    id: "116124",
    name: "▼期間限定彌嬤店▼",
    main_image:
      "https://market-static.flyingmilktea.com/yayoi_88impact/shop-avatar/ad84fa24-3209-4450-948d-f8b136cd3d59.jpg",
    banner_image:
      "https://market-static.flyingmilktea.com/yayoi_88impact/shop-banner/7375da00-7905-4cea-99c9-d92b6f4aa908.jpg",
  },
  {
    __typename: "WShop",
    id: "116103",
    name: "紙漫糖",
    main_image:
      "https://market-static.flyingmilktea.com/%E8%8B%A6%E8%8B%A6/shop-avatar/33d41c2e-7895-41be-a7cb-7e22153581b2.jpg",
    banner_image: null,
  },
  {
    __typename: "WShop",
    id: "115336",
    name: "紅茶",
    main_image:
      "https://market-static.flyingmilktea.com/a5768549/shop-avatar/a25a99e2-6b5b-4fa0-8a70-73ebda299f19.jpg",
    banner_image: null,
  },
  {
    __typename: "WShop",
    id: "115276",
    name: "KT.",
    main_image:
      "https://market-static.flyingmilktea.com/%E7%A5%9E%E7%84%A1%E6%9C%88%E5%87%9C/shop-avatar/3ebddace-0b16-4d9e-8b6c-47581086f773.jpg",
    banner_image:
      "https://market-static.flyingmilktea.com/%E7%A5%9E%E7%84%A1%E6%9C%88%E5%87%9C/shop-banner/9cd96052-9526-4289-b662-8f3bd9a09bb7.jpg",
  },
  {
    __typename: "WShop",
    id: "115146",
    name: "凱婷【HKVtuber】",
    main_image:
      "https://market-static.flyingmilktea.com/%E5%87%B1%E5%A9%B7HKVtuber/shop-avatar/401a178c-c3f6-465f-86e8-5b960fe2c171.jpg",
    banner_image:
      "https://market-static.flyingmilktea.com/%E5%87%B1%E5%A9%B7HKVtuber/shop-banner/fade5e31-6d39-4850-ab72-05a5bcb7e201.jpg",
  },
  {
    __typename: "WShop",
    id: "114219",
    name: "口木木☆RSKNIWN",
    main_image: null,
    banner_image: null,
  },
  {
    __typename: "WShop",
    id: "113469",
    name: "米亞MYA",
    main_image:
      "https://market-static.flyingmilktea.com/mya/shop-avatar/96579ab7-feec-4a22-8029-6b69647c225f.jpg",
    banner_image:
      "https://market-static.flyingmilktea.com/mya/shop-banner/843c4360-6957-41ac-8cff-50ca89b493f9.jpg",
  },
  {
    __typename: "WShop",
    id: "113246",
    name: "紡霊拉比 / Bourei Rabbi【HKVTuber】",
    main_image:
      "https://market-static.flyingmilktea.com/%E6%8B%89%E6%AF%94%E6%AF%94/shop-avatar/77163bf1-5589-4422-b2fa-e2a64effa488.jpg",
    banner_image:
      "https://market-static.flyingmilktea.com/%E6%8B%89%E6%AF%94%E6%AF%94/shop-banner/b0848c3c-c854-4cdf-a907-61cf0b1fd4ba.jpg",
  },
  {
    __typename: "WShop",
    id: "113100",
    name: "sky0415852的攤位",
    main_image:
      "https://market-static.flyingmilktea.com/sky0415852/shop-avatar/eea4cd88-e1ad-445d-b980-51dadf226d9d.jpg",
    banner_image:
      "https://market-static.flyingmilktea.com/sky0415852/shop-banner/c2d7b103-cd05-46e1-9ef5-7022d66405e5.jpg",
  },
  {
    __typename: "WShop",
    id: "112961",
    name: "甘美姐 【香港Vtuber】",
    main_image:
      "https://market-static.flyingmilktea.com/%E7%94%98%E7%BE%8E%E5%A7%90/shop-avatar/3bad5ebc-2643-4693-83f4-984f424d22d2.jpg",
    banner_image:
      "https://market-static.flyingmilktea.com/%E7%94%98%E7%BE%8E%E5%A7%90/shop-banner/1be34b68-850e-430a-aa5a-bb3466abaa81.jpg",
  },
];
const Template = () => <ShopsView shops={shops} />;

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

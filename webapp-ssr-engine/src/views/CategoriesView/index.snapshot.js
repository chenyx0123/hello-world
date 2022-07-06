import React from "react";

import mapValues from "lodash/mapValues";

import CategoriesView from ".";
import { TEST_VIEWPORT_SET } from "../../../.storybook/viewports";

export default {
  title: "📷/views/CategoriesView/index",
  component: CategoriesView,
};

const categories = [
  {
    __typename: "WCategory",
    id: "119",
    name: "Cosplay",
    description: "",
    image: {
      __typename: "WImage",
      src: "http://wp-d-dev-kf-s2-graphql.flyingpigs.ninja/wp-content/uploads/2020/07/10.png",
    },
    count: 2,
  },
  {
    __typename: "WCategory",
    id: "21",
    name: "其他",
    description: "",
    image: {
      __typename: "WImage",
      src: "http://wp-d-dev-kf-s2-graphql.flyingpigs.ninja/wp-content/uploads/2020/07/4.png",
    },
    count: 473,
  },
  {
    __typename: "WCategory",
    id: "121",
    name: "吊飾/襟章",
    description: "",
    image: {
      __typename: "WImage",
      src: "http://wp-d-dev-kf-s2-graphql.flyingpigs.ninja/wp-content/uploads/2020/07/12.png",
    },
    count: 422,
  },
  {
    __typename: "WCategory",
    id: "115",
    name: "小說/書",
    description: "",
    image: {
      __typename: "WImage",
      src: "http://wp-d-dev-kf-s2-graphql.flyingpigs.ninja/wp-content/uploads/2020/07/8.png",
    },
    count: 76,
  },
  {
    __typename: "WCategory",
    id: "117",
    name: "插畫",
    description: "",
    image: {
      __typename: "WImage",
      src: "http://wp-d-dev-kf-s2-graphql.flyingpigs.ninja/wp-content/uploads/2020/07/9.png",
    },
    count: 225,
  },
  {
    __typename: "WCategory",
    id: "111",
    name: "模型",
    description: "",
    image: {
      __typename: "WImage",
      src: "http://wp-d-dev-kf-s2-graphql.flyingpigs.ninja/wp-content/uploads/2020/07/5.png",
    },
    count: 6,
  },
  {
    __typename: "WCategory",
    id: "114",
    name: "漫畫",
    description: "",
    image: {
      __typename: "WImage",
      src: "http://wp-d-dev-kf-s2-graphql.flyingpigs.ninja/wp-content/uploads/2020/07/7.png",
    },
    count: 150,
  },
  {
    __typename: "WCategory",
    id: "113",
    name: "衣物",
    description: "",
    image: {
      __typename: "WImage",
      src: "http://wp-d-dev-kf-s2-graphql.flyingpigs.ninja/wp-content/uploads/2020/07/2.png",
    },
    count: 34,
  },
  {
    __typename: "WCategory",
    id: "120",
    name: "貼紙/紙膠帶",
    description: "",
    image: {
      __typename: "WImage",
      src: "http://wp-d-dev-kf-s2-graphql.flyingpigs.ninja/wp-content/uploads/2020/07/11.png",
    },
    count: 185,
  },
  {
    __typename: "WCategory",
    id: "109",
    name: "遊戲",
    description: "",
    image: {
      __typename: "WImage",
      src: "http://wp-d-dev-kf-s2-graphql.flyingpigs.ninja/wp-content/uploads/2020/07/3.png",
    },
    count: 100,
  },
];

const Template = () => <CategoriesView categories={categories} />;

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

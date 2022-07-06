import React from "react";

import mapValues from "lodash/mapValues";

import Tags from ".";
import { TEST_VIEWPORT_SET } from "../../../../../.storybook/viewports";

export default {
  title: "📷/views/ProductView/components/Tags/index",
  component: Tags,
};

const product = {
  tags: [
    {
      __typename: "WTag",
      id: "157",
      name: "Digimon",
      slug: "digimon",
      description: "",
    },
    {
      __typename: "WTag",
      id: "473",
      name: "RG25",
      slug: "rg25",
      description: "",
    },
    {
      __typename: "WTag",
      id: "499",
      name: "RG25goods",
      slug: "rg25goods-2",
      description: "",
    },
    {
      __typename: "WTag",
      id: "164",
      name: "四格漫畫",
      slug: "%e5%9b%9b%e6%a0%bc%e6%bc%ab%e7%95%ab",
      description: "",
    },
    {
      __typename: "WTag",
      id: "162",
      name: "惡搞",
      slug: "%e6%83%a1%e6%90%9e",
      description: "",
    },
    {
      __typename: "WTag",
      id: "160",
      name: "搞笑",
      slug: "%e6%90%9e%e7%ac%91",
      description: "",
    },
    {
      __typename: "WTag",
      id: "159",
      name: "數碼寶貝",
      slug: "%e6%95%b8%e7%a2%bc%e5%af%b6%e8%b2%9d",
      description: "",
    },
    {
      __typename: "WTag",
      id: "158",
      name: "數碼暴龍",
      slug: "%e6%95%b8%e7%a2%bc%e6%9a%b4%e9%be%8d",
      description: "",
    },
    {
      __typename: "WTag",
      id: "165",
      name: "短篇漫畫",
      slug: "%e7%9f%ad%e7%af%87%e6%bc%ab%e7%95%ab",
      description: "",
    },
    {
      __typename: "WTag",
      id: "163",
      name: "被選中的孩子們",
      slug: "%e8%a2%ab%e9%81%b8%e4%b8%ad%e7%9a%84%e5%ad%a9%e5%ad%90%e5%80%91",
      description: "",
    },
    {
      __typename: "WTag",
      id: "335",
      name: "被選召的孩子們",
      slug: "%e8%a2%ab%e9%81%b8%e5%8f%ac%e7%9a%84%e5%ad%a9%e5%ad%90%e5%80%91",
      description: "",
    },
  ],
};
const Template = () => <Tags product={product} />;

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

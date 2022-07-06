import React from "react";

import mapValues from "lodash/mapValues";

import { TEST_VIEWPORT_SET } from "../../../.storybook/viewports";
import CategoryItem from "./CategoryItem";

export default {
  title: "📷/components/catalog/CategoryItem",
  component: CategoryItem,
};

const item = {
  __typename: "WCategory",
  id: "119",
  name: "Cosplay",
  description: "",
  image: {
    __typename: "WImage",
    src: "http://wp-d-dev-kf-s2-graphql.flyingpigs.ninja/wp-content/uploads/2020/07/10.png",
  },
  count: 2,
};

const Template = () => <CategoryItem item={item} />;

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

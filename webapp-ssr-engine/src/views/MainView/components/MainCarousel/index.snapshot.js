import React from "react";

import mapValues from "lodash/mapValues";

import MainCarousel from ".";
import { TEST_VIEWPORT_SET } from "../../../../../.storybook/viewports";
import azuriteImg from "../../../../../public/banners/azurite_banner.jpg";
import districtFolderImg from "../../../../../public/banners/district_folder_banner.jpg";
import melissaImg from "../../../../../public/banners/melissa_banner.jpg";
import springfishImg from "../../../../../public/banners/springfish_banner.jpg";
import tinhongImg from "../../../../../public/banners/tinhong_banner.jpg";

export default {
  title: "📷/views/MainView/components/MainCarousel/index",
  component: MainCarousel,
};

const CAROUSEL_BANNERS = [
  {
    src: melissaImg,
  },
  {
    src: springfishImg,
  },
  {
    src: tinhongImg,
  },
  {
    src: districtFolderImg,
  },
  {
    src: azuriteImg,
  },
];

const Template = () => <MainCarousel items={CAROUSEL_BANNERS} />;

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

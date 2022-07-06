import React from "react";

import mapValues from "lodash/mapValues";
import { FormProvider, useForm } from "react-hook-form";

import QuantitySelector from ".";
import { TEST_VIEWPORT_SET } from "../../../../../.storybook/viewports";

export default {
  title: "📷/views/ProductView/components/QuantitySelector/index.virtual",
  component: QuantitySelector,
};

const product = {
  id: "109940",
  name: "CUT NG！(RG25限定套組)",
  virtual: true,
  stock_quantity: null,
  stock_status: "instock",
  price: 123,
};

const Template = () => {
  const formMethods = useForm();
  return (
    <FormProvider {...formMethods}>
      <QuantitySelector product={product} />
    </FormProvider>
  );
};

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

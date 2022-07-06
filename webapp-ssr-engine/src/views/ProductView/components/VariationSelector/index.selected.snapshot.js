import React from "react";

import mapValues from "lodash/mapValues";
import { FormProvider, useForm } from "react-hook-form";

import VariationSelector from ".";
import { TEST_VIEWPORT_SET } from "../../../../../.storybook/viewports";

export default {
  title: "📷/views/ProductView/components/VariationSelector/index.selected",
  component: VariationSelector,
};

const product = {
  id: "12345",
  type: "variable",
  variations: [
    {
      __typename: "WProductVariation",
      id: "116928",
      description: "新衣裝紀念全SET(+手寫卡特典)",
      price: 500,
      regular_price: 500,
      sale_price: null,
      date_on_sale_from_gmt: null,
      date_on_sale_to_gmt: null,
      stock_quantity: 0,
      stock_status: "outofstock",
    },
    {
      __typename: "WProductVariation",
      id: "116929",
      description: "零錢包",
      price: 70,
      regular_price: 70,
      sale_price: null,
      date_on_sale_from_gmt: null,
      date_on_sale_to_gmt: null,
      stock_quantity: 10,
      stock_status: "instock",
    },
    {
      __typename: "WProductVariation",
      id: "116930",
      description: "通常版立牌",
      price: 80,
      regular_price: 80,
      sale_price: null,
      date_on_sale_from_gmt: null,
      date_on_sale_to_gmt: null,
      stock_quantity: 5,
      stock_status: "instock",
    },
    {
      __typename: "WProductVariation",
      id: "116931",
      description: "新衣版立牌",
      price: 80,
      regular_price: 80,
      sale_price: null,
      date_on_sale_from_gmt: null,
      date_on_sale_to_gmt: null,
      stock_quantity: 5,
      stock_status: "instock",
    },
    {
      __typename: "WProductVariation",
      id: "116932",
      description: "通常+新衣立牌一套兩款",
      price: 140,
      regular_price: 140,
      sale_price: null,
      date_on_sale_from_gmt: null,
      date_on_sale_to_gmt: null,
      stock_quantity: 10,
      stock_status: "instock",
    },
    {
      __typename: "WProductVariation",
      id: "116933",
      description: "襟章(Rumii)",
      price: 25,
      regular_price: 25,
      sale_price: null,
      date_on_sale_from_gmt: null,
      date_on_sale_to_gmt: null,
      stock_quantity: 103,
      stock_status: "instock",
    },
    {
      __typename: "WProductVariation",
      id: "116934",
      description: "襟章(老味)",
      price: 25,
      regular_price: 25,
      sale_price: null,
      date_on_sale_from_gmt: null,
      date_on_sale_to_gmt: null,
      stock_quantity: 91,
      stock_status: "instock",
    },
    {
      __typename: "WProductVariation",
      id: "116935",
      description: "襟章(貓耳)",
      price: 25,
      regular_price: 25,
      sale_price: null,
      date_on_sale_from_gmt: null,
      date_on_sale_to_gmt: null,
      stock_quantity: 102,
      stock_status: "instock",
    },
    {
      __typename: "WProductVariation",
      id: "116936",
      description: "襟章(自畫像)",
      price: 25,
      regular_price: 25,
      sale_price: null,
      date_on_sale_from_gmt: null,
      date_on_sale_to_gmt: null,
      stock_quantity: 9,
      stock_status: "instock",
    },
    {
      __typename: "WProductVariation",
      id: "116937",
      description: "襟章一套四款",
      price: 80,
      regular_price: 80,
      sale_price: null,
      date_on_sale_from_gmt: null,
      date_on_sale_to_gmt: null,
      stock_quantity: 29,
      stock_status: "instock",
    },
    {
      __typename: "WProductVariation",
      id: "116938",
      description: "貼紙包(全三款每款兩張)",
      price: 40,
      regular_price: 40,
      sale_price: null,
      date_on_sale_from_gmt: null,
      date_on_sale_to_gmt: null,
      stock_quantity: 13,
      stock_status: "instock",
    },
    {
      __typename: "WProductVariation",
      id: "117136",
      description: "帆布袋",
      price: 200,
      regular_price: 200,
      sale_price: null,
      date_on_sale_from_gmt: null,
      date_on_sale_to_gmt: null,
      stock_quantity: 0,
      stock_status: "outofstock",
    },
  ],
};

const Template = () => {
  const formMethods = useForm({ defaultValues: { variationId: "116930" } });
  return (
    <FormProvider {...formMethods}>
      <VariationSelector product={product} />
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

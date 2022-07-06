import React from "react";

import { Box } from "@mui/material";

import map from "lodash/map";

import SectionTitle from "../SectionTitle";
import VariationRadioGroup from "./VariationRadioGroup";

const VariationSelector = ({ maxStep, product, stepIndex, sx, ...props }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      rowGap: 2,
      ...sx,
    }}
    {...props}
  >
    <SectionTitle
      title={`${
        maxStep > 1
          ? `${String.fromCharCode("①".charCodeAt(0) + stepIndex)} `
          : ""
      }選擇款式`}
      color="secondary"
    />
    <VariationRadioGroup
      name="variationId"
      choices={map(product.variations, (v) => ({
        value: v.id,
        label: v.description,
        stock_status: v.stock_status,
      }))}
      registerProps={{
        required: "請告訴我們您感興趣的項目類型",
      }}
    />
  </Box>
);

export default VariationSelector;

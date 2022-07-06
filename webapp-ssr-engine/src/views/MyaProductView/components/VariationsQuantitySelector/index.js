import React, { useMemo } from "react";

import { Box, Typography } from "@mui/material";

import map from "lodash/map";

import withFormContext from "../../../../hoc/withFormContext";
import SectionTitle from "../../../ProductView/components/SectionTitle";
import { calculateQuantity } from "../utils";
import VariationQuantityInput from "./VariationQuantityInput";

const VariationsQuantitySelector = ({
  maxStep,
  product,
  stepIndex,
  sx,
  formContext: { watch },
  ...props
}) => {
  const data = watch();
  const calculatedQuantity = useMemo(() => calculateQuantity(data), [data]);
  return (
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
        }選擇 ${
          calculatedQuantity.requiredQuantity
        } 款立牌款式 (請輸入所需數量)`}
        color="secondary"
      />
      <Box
        sx={{
          alignItems: "stretch",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          columnGap: "2%",
          rowGap: 1.5,
        }}
      >
        {map(product.variations, (v) => (
          <VariationQuantityInput key={v.id} variation={v} />
        ))}
      </Box>
      {!calculatedQuantity.isQuantityValid &&
        (calculatedQuantity.requiredQuantity - calculatedQuantity.quantity >
        0 ? (
          <Typography color="warning.main">
            還需選擇{" "}
            {calculatedQuantity.requiredQuantity - calculatedQuantity.quantity}{" "}
            個
          </Typography>
        ) : (
          <Typography color="warning.main">
            請減少{" "}
            {calculatedQuantity.quantity - calculatedQuantity.requiredQuantity}{" "}
            個選擇
          </Typography>
        ))}
    </Box>
  );
};

export default withFormContext(VariationsQuantitySelector);

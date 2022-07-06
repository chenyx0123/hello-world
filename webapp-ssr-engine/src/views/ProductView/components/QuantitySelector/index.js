import React, { useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";

import find from "lodash/find";
import map from "lodash/map";
import range from "lodash/range";
import { useRegion } from "market-webapp-commons";
import { useFormContext } from "react-hook-form";

import StandardSelect from "../../../../components/standard-form-fields/StandardSelect";
import SectionTitle from "../SectionTitle";

const QuantitySelector = ({ maxStep, product, stepIndex, sx, ...props }) => {
  const { toLocalCurrency } = useRegion();
  const { setValue, watch } = useFormContext();
  const variationId = watch("variationId");

  const [selectedProduct, setSelectedProduct] = useState();

  useEffect(() => {
    const p =
      product.type === "variable"
        ? find(product.variations, (v) => v.id === variationId) ?? {}
        : product;
    const minQuantity = p.stock_status === "instock" ? 1 : 0;
    let maxQuantity = 0;
    if (p.stock_status === "instock") {
      maxQuantity = Math.min(p.stock_quantity ?? 999, p.virtual ? 1 : 20);
    } else {
      maxQuantity = 0;
    }
    const requireSelectQuantity = !p.virtual;
    const disableSelectQuantity =
      (p.type === "variable" && !variationId) || p.stock_status !== "instock";

    setSelectedProduct({
      ...p,
      minQuantity,
      maxQuantity,
      requireSelectQuantity,
      disableSelectQuantity,
    });
    if (!disableSelectQuantity) {
      setValue("quantity", 1);
    } else {
      setValue("quantity", 0);
    }
  }, [product, variationId, setValue]);

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
        }${stepIndex === 0 ? "立即購買" : "更改數量"}`}
        color="secondary"
      />
      <Box px={2}>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <Typography display="inline" variant="body2">
            {product.virtual ? "" : "每件"}價格：
          </Typography>
          <Box flexGrow={1} />
          <Typography
            display="inline-block"
            fontSize={28}
            lineHeight={0}
            variant="body1"
          >
            {selectedProduct?.price}
          </Typography>
          <Typography display="inline" variant="body2">
            &nbsp;珍珠
          </Typography>
          <Typography display="inline-block" color="grey.500" variant="body2">
            &nbsp;/ {toLocalCurrency(selectedProduct?.price)}
          </Typography>
        </Box>
        {!product.virtual && (
          <Box
            sx={{
              alignItems: "baseline",
              display: "flex",
            }}
          >
            <Box flexGrow={1} />
            <Typography display="inline" variant="caption">
              &nbsp;+ 郵費
            </Typography>
          </Box>
        )}
        {selectedProduct?.requireSelectQuantity && (
          <StandardSelect
            name="quantity"
            choices={map(
              range(
                selectedProduct.minQuantity,
                selectedProduct.maxQuantity + 1
              ),
              (i) => ({
                value: i,
                label: `${i} 件`,
              })
            )}
            required
            label="數量"
            size="small"
            registerProps={{
              required: "請選擇數量",
            }}
            selectProps={{
              disabled: selectedProduct.disableSelectQuantity,
            }}
          />
        )}
        {selectedProduct?.stock_quantity !== null && (
          <Typography variant="caption">
            尚有 {selectedProduct?.stock_quantity} 件
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default QuantitySelector;

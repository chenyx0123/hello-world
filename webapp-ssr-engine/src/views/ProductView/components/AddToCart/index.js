import React, { useEffect, useState } from "react";

import { Box, Button, CircularProgress, Typography } from "@mui/material";

import ShoppingCart from "@mui/icons-material/ShoppingCart";

import find from "lodash/find";
import { useCart } from "market-webapp-commons";

import withFormContext from "../../../../hoc/withFormContext";

const AddToCart = ({
  maxStep,
  product,
  stepIndex,
  formContext: { watch },
  sx,
  disabled,
  ...props
}) => {
  const { loading } = useCart();
  const [variationId, quantity] = watch(["variationId", "quantity"]);

  const [selectedProduct, setSelectedProduct] = useState({
    stock_status: "instock",
  });

  useEffect(() => {
    const p =
      product.type === "variable"
        ? find(product.variations, (v) => v.id === variationId) ?? {}
        : product;
    setSelectedProduct(p);
  }, [product, variationId]);

  let label = "加到購物車";
  let startIcon = <ShoppingCart fontSize="small" />;

  if (selectedProduct?.virtual && selectedProduct?.digitalAssetAuthorized) {
    label = "已購買";
  } else if (selectedProduct?.stock_status === "outofstock") {
    label = "(つω`｡)　售罄了";
    startIcon = undefined;
  }

  if (loading) {
    startIcon = <CircularProgress size={16} color="inherit" />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        px: 2,
        rowGap: 2,
        ...sx,
      }}
      {...props}
    >
      <Button
        type="submit"
        fullWidth
        size="large"
        color="secondary"
        variant="contained"
        startIcon={startIcon}
        disabled={
          disabled ||
          selectedProduct?.stock_status !== "instock" ||
          !quantity > 0 ||
          loading
        }
      >
        {label}
      </Button>
      <Typography variant="caption">
        加入購物車後,可以點擊右上角的
        <Box display="inline">
          <ShoppingCart fontSize="small" sx={{ verticalAlign: "middle" }} />
        </Box>
        圖案查詢你的購物車並進行結帳。
      </Typography>
    </Box>
  );
};

export default withFormContext(AddToCart);

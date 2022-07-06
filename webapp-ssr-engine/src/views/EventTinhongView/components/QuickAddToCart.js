import React from "react";

import { Button, CircularProgress } from "@mui/material";

import { useCart } from "market-webapp-commons";

const QuickAddToCart = ({ item, ...props }) => {
  const { addToCart, loading } = useCart();

  return (
    <Button
      variant="contained"
      color="secondary"
      disabled={item.stock_status === "outofstock" || loading}
      onClick={() => addToCart({ productId: item.id, quantity: 1 })}
      {...props}
    >
      {loading && <CircularProgress size={24} />}
      {!loading &&
        (item.stock_status === "outofstock" ? "缺貨中" : "加到購物車")}
    </Button>
  );
};

export default QuickAddToCart;

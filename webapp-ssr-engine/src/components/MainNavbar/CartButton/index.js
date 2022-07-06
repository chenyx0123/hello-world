import React, { useEffect, useState } from "react";

import Link from "next/link";

import { Badge, IconButton } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { APP_ROUTES, withCart } from "market-webapp-commons";

const CartButton = ({ cartItemsCount }) => {
  const [prevCount, setPrevCount] = useState(undefined);

  useEffect(() => {
    if (prevCount + cartItemsCount >= 0 && prevCount !== cartItemsCount) {
      setTimeout(() => {
        setPrevCount(cartItemsCount);
      }, 500);
    } else {
      setPrevCount(cartItemsCount);
    }
  }, [prevCount, cartItemsCount]);

  return (
    <Link href={APP_ROUTES.CART} passHref>
      <IconButton
        color="inherit"
        size="small"
        sx={() => ({
          ...(prevCount + cartItemsCount >= 0 && prevCount !== cartItemsCount
            ? {
                animation:
                  "shopping-cart-shake 0.6s cubic-bezier(.36,.07,.19,.97) both",
                transform: "translate3d(0, 0, 0)",
              }
            : {}),
        })}
      >
        <Badge
          badgeContent={cartItemsCount}
          color="secondary"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          sx={(theme) => ({
            mr: theme.spacing(cartItemsCount > 0 ? 1 : 0),
            pr: theme.spacing(cartItemsCount > 0 ? 0.5 : 0),
          })}
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Link>
  );
};

export default withCart(CartButton);

/* eslint-disable jsx-a11y/anchor-is-valid */
//* anchors are valid in this file, in dev, replaced with # to prevent accidently linked to production
import React from "react";

import { Box, Divider } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreIcon from "@mui/icons-material/Store";

import map from "lodash/map";
import { APP_ROUTES } from "market-webapp-commons";

import MenuLink from "../MenuLink";

const MenuLinkSet2 = [
  {
    label: "攤位概覽",
    startIcon: <StoreIcon />,
    href: APP_ROUTES.DASHBOARD_SHOP,
  },
  {
    label: "編輯商品",
    startIcon: <EditIcon />,
    href: APP_ROUTES.DASHBOARD_PRODUCTS,
  },
  {
    label: "處理訂單",
    startIcon: <LocalShippingIcon />,
    href: APP_ROUTES.DASHBOARD_ORDERS,
  },
];

const ShopSection = () => (
  <Box
    sx={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Box px={1}>{map(MenuLinkSet2, MenuLink)}</Box>
    <Divider sx={{ my: 2 }} />
  </Box>
);

export default ShopSection;

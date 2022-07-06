/* eslint-disable jsx-a11y/anchor-is-valid */
//* anchors are valid in this file, in dev, replaced with # to prevent accidently linked to production
import React from "react";

import { Box, Divider } from "@mui/material";

import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";

import map from "lodash/map";
import { APP_ROUTES } from "market-webapp-commons";

import MenuLink from "../MenuLink";

const MenuLinkSet0 = [
  {
    label: "註冊",
    startIcon: <PersonIcon />,
    //! Absolute URL used
    href: "https://www.flyingmilktea.com/registration/",
  },
  {
    label: "登入",
    startIcon: <LoginIcon />,
    href: APP_ROUTES.LOGIN(),
  },
  {
    label: "開設商店",
    startIcon: <AddBusinessIcon />,
    href: APP_ROUTES.LOGIN(APP_ROUTES.DASHBOARD_INIT),
  },
];

const UnauthSection = () => (
  <Box
    sx={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Box px={1}>{map(MenuLinkSet0, MenuLink)}</Box>
    <Divider sx={{ my: 2 }} />
  </Box>
);

export default UnauthSection;

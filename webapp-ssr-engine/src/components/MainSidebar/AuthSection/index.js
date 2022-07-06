/* eslint-disable jsx-a11y/anchor-is-valid */
//* anchors are valid in this file, in dev, replaced with # to prevent accidently linked to production
import React from "react";

import { Box, Divider } from "@mui/material";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import HistoryIcon from "@mui/icons-material/History";
import PaidIcon from "@mui/icons-material/Paid";

import map from "lodash/map";
import { APP_ROUTES } from "market-webapp-commons";

import MenuLink from "../MenuLink";

const MenuLinkSet1 = [
  {
    label: "帳戶資料/更改地址",
    startIcon: <AccountBoxIcon />,
    href: APP_ROUTES.ACCOUNT,
  },
  {
    label: "購買記錄",
    startIcon: <HistoryIcon />,
    href: APP_ROUTES.ACCOUNT_PURCHASES,
  },
  {
    label: "打賞記錄",
    startIcon: <PaidIcon />,
    href: APP_ROUTES.ACCOUNT_DONATIONS,
  },
  {
    label: "我的下載",
    startIcon: <CloudDownloadIcon />,
    href: APP_ROUTES.ACCOUNT_DOWNLOADS,
  },
  {
    label: "聯絡攤主",
    startIcon: <AccountBoxIcon />,
    href: APP_ROUTES.CHATS,
  },
];

const AuthSection = () => (
  <Box
    sx={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Box px={1}>{map(MenuLinkSet1, MenuLink)}</Box>
    <Divider sx={{ my: 2 }} />
  </Box>
);

export default AuthSection;

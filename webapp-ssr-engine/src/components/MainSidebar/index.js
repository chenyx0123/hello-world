/* eslint-disable jsx-a11y/anchor-is-valid */
//* anchors are valid in this file, in dev, replaced with # to prevent accidently linked to production
import React from "react";

import getConfig from "next/config";

import { Box, Divider, Drawer, IconButton, Typography } from "@mui/material";

import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import CloseIcon from "@mui/icons-material/Close";

import { APP_ROUTES, withAuth } from "market-webapp-commons";

import Logo from "../Logo";
import AuthSection from "./AuthSection";
import GeneralSection from "./GeneralSection";
import LogoutButton from "./LogoutButton";
import MenuLink from "./MenuLink";
import ShopSection from "./ShopSection";
import UnauthSection from "./UnauthSection";

const { publicRuntimeConfig } = getConfig() ?? {};

const MainSidebar = ({
  isAuthenticated,
  isInitialized,
  user,
  onClose,
  open,
}) => (
  <Drawer
    anchor="right"
    onClose={onClose}
    open={open}
    PaperProps={{ sx: { width: 300 } }}
    sx={{
      zIndex: (theme) => theme.zIndex.appBar + 100,
    }}
    variant="temporary"
  >
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ width: "100%", textAlign: "end" }}>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Logo sx={{ textAlign: "center", width: "100%" }} />

      {(!isAuthenticated || !isInitialized) && <UnauthSection />}

      {isAuthenticated && isInitialized && <AuthSection />}

      {isAuthenticated && isInitialized && user.shopCreated && <ShopSection />}

      {isAuthenticated && isInitialized && !user.shopCreated && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box px={1}>
            <MenuLink
              label="開設商店"
              startIcon={<AddBusinessIcon />}
              href={APP_ROUTES.DASHBOARD_INIT}
            />
          </Box>
          <Divider sx={{ my: 2 }} />
        </Box>
      )}

      <GeneralSection />

      {isAuthenticated && isInitialized && (
        <Box px={1}>
          <LogoutButton onClose={onClose} />
        </Box>
      )}

      <Box sx={{ flexGrow: 1 }} />
      <Box px={1} textAlign="end">
        <Typography
          variant="caption"
          sx={{ fontSize: "0.6rem", color: "#cccccc" }}
        >
          未來墟 @NEXT {publicRuntimeConfig?.NEXT_PUBLIC_BUILD_COMMIT_ID}
        </Typography>
      </Box>
    </Box>
  </Drawer>
);

export default withAuth(MainSidebar);

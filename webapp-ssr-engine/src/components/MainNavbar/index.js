import React from "react";

import Link from "next/link";

import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Link as MuiLink,
  Toolbar,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { APP_ROUTES, withAuth } from "market-webapp-commons";

import Logo from "../Logo";
import BugReport from "./BugReport";
import CartButton from "./CartButton";
import ChatButton from "./ChatButton";
import LoginButton from "./LoginButton";
import SearchButton from "./SearchButton";
import WalletButton from "./WalletButton";

const MainNavbar = ({ isAuthenticated, onOpenSidebar, user }) => (
  <AppBar
    elevation={0}
    sx={{
      backgroundColor: "background.paper",
      color: "text.secondary",
    }}
  >
    <BugReport />
    <Toolbar variant="dense">
      <Logo sx={{ mr: 1 }} />
      <Link href={APP_ROUTES.HOME} passHref>
        <MuiLink
          color="textPrimary"
          noWrap
          underline="none"
          variant="subtitle1"
        >
          未來墟
        </MuiLink>
      </Link>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
        }}
      >
        <SearchButton />
        {isAuthenticated && <WalletButton />}
        {isAuthenticated && <CartButton />}
        {
          // TODO: Panel not supported on this app
          // <NotificationButton />
        }
      </Box>
      <Box
        sx={{
          alignItems: "center",
          display: { xs: "none", sm: "flex" },
        }}
      >
        {isAuthenticated && <ChatButton />}
        {isAuthenticated && (
          <Button color="inherit" size="small" onClick={onOpenSidebar}>
            你好, {user.name}
          </Button>
        )}
      </Box>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
        }}
      >
        {!isAuthenticated && <LoginButton />}
        <IconButton color="inherit" size="small" onClick={onOpenSidebar}>
          <MenuIcon />
        </IconButton>
      </Box>
    </Toolbar>
    <Divider />
  </AppBar>
);

export default withAuth(MainNavbar);

import { React, useEffect, useState } from "react";

import { useRouter } from "next/router";

import { Box } from "@mui/material";

import { styled } from "@mui/material/styles";

import Footer from "../components/Footer";
import MainNavbar from "../components/MainNavbar";
import MainSidebar from "../components/MainSidebar";

const MainLayoutRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100%",
  paddingTop: 72,
}));

const MainLayout = ({ children, defaultState = { isSidebarOpen: false } }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(defaultState.isSidebarOpen);

  const router = useRouter();
  useEffect(() => setSidebarOpen(false), [router?.asPath]);

  return (
    <MainLayoutRoot>
      <MainNavbar onOpenSidebar={() => setSidebarOpen(true)} />
      <MainSidebar onClose={() => setSidebarOpen(false)} open={isSidebarOpen} />
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Box sx={{ flexGrow: 1 }}>{children}</Box>
        <Footer sx={{ flexShrink: 0 }} />
      </Box>
    </MainLayoutRoot>
  );
};

export default MainLayout;

import React from "react";

import { Box } from "@mui/material";

import BackgroundImageMobile from "../../../public/login-background-mobile.jpg";
import BackgroundImageFullscreen from "../../../public/login-background.jpg";
import ArtistCredit from "./components/ArtistCredit";
import LoginForm from "./components/LoginForm";

// TODO: snapshot testing coverage inadaquet
// TODO: redirect should rework
const LoginView = () => (
  <Box
    sx={{
      position: "relative",
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
      backgroundImage: {
        xs: `url(${BackgroundImageMobile.src})`,
        md: `url(${BackgroundImageFullscreen.src})`,
      },
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
  >
    <LoginForm position="absolute" left="50%" top="60%" />
    <ArtistCredit
      sx={(theme) => ({
        position: "absolute",
        top: theme.spacing(2),
        right: theme.spacing(3),
      })}
    />
  </Box>
);

export default LoginView;

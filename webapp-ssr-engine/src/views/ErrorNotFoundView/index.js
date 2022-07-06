import React from "react";

import Image from "next/image";

import { Box } from "@mui/material";

import NotFoundImage from "../../../public/errors/404.png";

const ErrorNotFoundView = () => (
  <Box
    display="flex"
    width="100%"
    height="100%"
    alignItems="center"
    justifyContent="center"
    sx={{ p: { xs: 4, sm: 8 } }}
  >
    <Image src={NotFoundImage} />
  </Box>
);

export default ErrorNotFoundView;

import React from "react";

import Image from "next/image";

import { Box } from "@mui/material";

import ServerMaintenanceImage from "../../../public/errors/500.png";

const ErrorServerMaintenanceView = () => (
  <Box
    display="flex"
    width="100%"
    height="100%"
    alignItems="center"
    justifyContent="center"
    sx={{ p: { xs: 4, sm: 8 } }}
  >
    <Image src={ServerMaintenanceImage} />
  </Box>
);

export default ErrorServerMaintenanceView;

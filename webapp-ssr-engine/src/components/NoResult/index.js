import React from "react";

import Image from "next/image";

import { Box } from "@mui/material";

import NoResultImage from "../../../public/errors/no_result.png";

const NoResult = ({ sx, ...props }) => (
  <Box
    display="flex"
    width="100%"
    height="100%"
    alignItems="center"
    justifyContent="center"
    sx={{ p: { xs: 4, sm: 8 }, ...sx }}
    {...props}
  >
    <Image src={NoResultImage} />
  </Box>
);

export default NoResult;

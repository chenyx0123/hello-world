import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Box, Link as MuiLink } from "@mui/material";

import { APP_ROUTES } from "market-webapp-commons";

import LogoImage from "../../public/logo.png";

const Logo = ({ sx, ...props }) => (
  <Box
    sx={{
      borderRadius: "50%",
      height: 32,
      overflow: "hidden",
      width: 32,
      ...sx,
    }}
    {...props}
  >
    <Link href={APP_ROUTES.HOME} passHref>
      <MuiLink sx={{ lineHeight: 1 }}>
        <Image alt="飛天奶茶" height={32} width={32} src={LogoImage} priority />
      </MuiLink>
    </Link>
  </Box>
);

export default Logo;

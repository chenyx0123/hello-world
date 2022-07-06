import React from "react";

import Link from "next/link";

import { Link as MuiLink, Typography } from "@mui/material";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Heading = ({
  label,
  href,
  variant = "h5",
  arrow = false,
  arrowSize = "large",
}) =>
  href ? (
    <Link href={href} passHref>
      <MuiLink
        underline="none"
        variant={variant}
        gutterBottom
        color="textPrimary"
        sx={{
          alignItems: "center",
          display: "flex",
          fontWeight: "bold",
        }}
      >
        {label}
        {arrow && <NavigateNextIcon fontSize={arrowSize} />}
      </MuiLink>
    </Link>
  ) : (
    <Typography
      variant={variant}
      gutterBottom
      color="textPrimary"
      sx={{
        alignItems: "center",
        display: "flex",
        fontWeight: "bold",
      }}
    >
      {label}
    </Typography>
  );

export default Heading;

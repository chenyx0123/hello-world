import React from "react";

import Link from "next/link";

import { Button, Typography } from "@mui/material";

const MenuLink = ({ href, startIcon, label }) => (
  <Link key={href} href={href} passHref>
    <Button
      size="large"
      disableRipple
      startIcon={startIcon}
      sx={(theme) => ({
        color: theme.palette.text.secondary,
        justifyContent: "flex-start",
        px: 2,
        py: 1.5,
        width: "100%",
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
        },
      })}
    >
      <Typography color="textSecondary" variant="body1">
        {label}
      </Typography>
    </Button>
  </Link>
);

export default MenuLink;

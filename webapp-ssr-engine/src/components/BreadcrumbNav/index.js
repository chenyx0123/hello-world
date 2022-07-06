import React from "react";

import Link from "next/link";

import { Box, Breadcrumbs, Link as MuiLink, Typography } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";

import { APP_ROUTES } from "market-webapp-commons";

const BreadcrumbNav = ({ paths = [], ...props }) => (
  <Box {...props}>
    <Breadcrumbs separator=">">
      <Link href={APP_ROUTES.HOME} passHref>
        <MuiLink
          underline="hover"
          sx={{ display: "flex", alignItems: "center", columnGap: 0.5 }}
        >
          <HomeIcon color="primary" fontSize="small" />
        </MuiLink>
      </Link>
      {paths.map((p) => {
        const typo = (
          <Typography
            key={p.name}
            variant="body2"
            color={p.active ? "secondary" : "textSecondary"}
          >
            {p.name}
          </Typography>
        );
        return !p.active && p.href ? (
          <Link key={p.name} href={p.href} passHref>
            <MuiLink underline="hover">{typo}</MuiLink>
          </Link>
        ) : (
          typo
        );
      })}
    </Breadcrumbs>
  </Box>
);

export default BreadcrumbNav;

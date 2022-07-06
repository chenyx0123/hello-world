import React from "react";

import Link from "next/link";

import { IconButton } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import { APP_ROUTES } from "market-webapp-commons";

const SearchButton = () => (
  <Link href={APP_ROUTES.PRODUCTS()} passHref>
    <IconButton>
      <SearchIcon />
    </IconButton>
  </Link>
);
export default SearchButton;

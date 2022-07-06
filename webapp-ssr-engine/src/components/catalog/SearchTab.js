import React from "react";

import { useRouter } from "next/router";

import { Tab, Tabs } from "@mui/material";

import { APP_ROUTES } from "market-webapp-commons";

import useBreakpointValue from "../../hooks/useBreakpointValue";

const SearchTab = ({ search, selectedTab = "product", ...props }) => {
  const router = useRouter();
  const variant = useBreakpointValue({ xs: "fullWidth", md: "centered" });
  return (
    <Tabs value={selectedTab} variant={variant} {...props}>
      <Tab
        value="product"
        label="商品"
        onClick={
          selectedTab !== "product"
            ? () => router.push(APP_ROUTES.PRODUCTS({ search }))
            : undefined
        }
      />
      <Tab
        value="shop"
        label="攤位"
        onClick={
          selectedTab !== "shop"
            ? () => router.push(APP_ROUTES.SHOPS({ search }))
            : undefined
        }
      />
      <Tab
        value="tag"
        label="標籤"
        onClick={
          selectedTab !== "tag"
            ? () => router.push(APP_ROUTES.TAGS({ search }))
            : undefined
        }
      />
    </Tabs>
  );
};

export default SearchTab;

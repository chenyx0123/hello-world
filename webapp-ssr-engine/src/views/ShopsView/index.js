import React from "react";

import { Box, Container } from "@mui/material";

import NoResult from "../../components/NoResult";
import ItemGrid from "../../components/catalog/ItemGrid";
import PaginationComponent from "../../components/catalog/PaginationComponent";
import Search from "../../components/catalog/Search";
import ShopSummaryItem from "../../components/catalog/ShopSummaryItem";

const ShopsView = ({
  shops,
  filter = { page: 1, per_page: 24 },
  paginationHref,
  onSearch,
}) => (
  <Box height="100%" display="flex" flexDirection="column">
    <Search
      defaultValues={filter}
      placeholder="搜尋攤位..."
      selectedTab="shop"
      onSearch={onSearch}
    />
    <Container
      maxWidth="xl"
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        px: 1,
        py: 4,
        rowGap: 2,
      }}
    >
      {shops.length > 0 ? (
        <ItemGrid
          items={shops}
          component={ShopSummaryItem}
          gridItemProps={{ xs: 6, sm: 4, md: 3, lg: 2 }}
          columnSpacing={0.5}
          justifyContent="center"
          rowSpacing={0.5}
          sx={{ mx: -2 }}
        />
      ) : (
        <NoResult />
      )}
      {(filter.page > 1 || shops.length === filter.per_page) && (
        <PaginationComponent
          hasNextPage={shops.length === filter.per_page}
          page={filter.page}
          paginationHref={paginationHref}
        />
      )}
    </Container>
  </Box>
);

export default ShopsView;

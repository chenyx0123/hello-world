import React from "react";

import { Box, Container } from "@mui/material";

import NoResult from "../../components/NoResult";
import ItemGrid from "../../components/catalog/ItemGrid";
import PaginationComponent from "../../components/catalog/PaginationComponent";
import ProductSummaryItem from "../../components/catalog/ProductSummaryItem";
import AdvancedSearch from "./components/AdvancedSearch";

const ProductsView = ({
  products,
  filter = { stock_status: "instock", page: 1, per_page: 24 },
  paginationHref,
}) => (
  <Box height="100%" display="flex" flexDirection="column">
    <AdvancedSearch defaultValues={filter} />
    <Container
      maxWidth="xl"
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        py: 2,
        rowGap: 2,
      }}
    >
      {products.length > 0 ? (
        <ItemGrid
          items={products}
          component={ProductSummaryItem}
          columnSpacing={2}
          rowSpacing={2}
        />
      ) : (
        <NoResult />
      )}
      {(filter.page > 1 || products.length === filter.per_page) && (
        <PaginationComponent
          hasNextPage={products.length === filter.per_page}
          page={filter.page}
          paginationHref={paginationHref}
        />
      )}
    </Container>
  </Box>
);
export default ProductsView;

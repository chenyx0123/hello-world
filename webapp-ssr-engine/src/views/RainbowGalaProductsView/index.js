import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Box, Container, Link as MuiLink } from "@mui/material";

import { APP_ROUTES } from "market-webapp-commons";

import BannerImg from "../../../public/banners/rg27_banner.jpg";
import NoResult from "../../components/NoResult";
import ItemGrid from "../../components/catalog/ItemGrid";
import PaginationComponent from "../../components/catalog/PaginationComponent";
import ProductSummaryItem from "../../components/catalog/ProductSummaryItem";

const ProductsView = ({
  products,
  filter = { stock_status: "instock", page: 1, per_page: 24 },
  paginationHref,
}) => (
  <Box display="flex" flexDirection="column" bgcolor="#f5eeeb">
    <Container
      maxWidth="xl"
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        pb: 2,
        rowGap: 2,
      }}
    >
      <Box sx={{ mx: { xs: -2, sm: -3 } }}>
        <Link href={APP_ROUTES.EVENT_RAINBOW_GALA()} passHref>
          <MuiLink>
            <Image src={BannerImg} alt="" priority />
          </MuiLink>
        </Link>
      </Box>
      {(filter.page > 1 || products.length === filter.per_page) && (
        <PaginationComponent
          hasNextPage={products.length === filter.per_page}
          page={filter.page}
          paginationHref={paginationHref}
        />
      )}
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

import React from "react";

import { Box, Container, Typography } from "@mui/material";

import { APP_ROUTES } from "market-webapp-commons";

import PreviewAlert from "../../components/PreviewAlert/index";
import ItemGrid from "../../components/catalog/ItemGrid";
import ProductSummaryItem from "../../components/catalog/ProductSummaryItem";
import ManagementFabs from "./components/ManagementFabs";
import ShopDescription from "./components/ShopDescription";
import ShopHeading from "./components/ShopHeading";

const ShopView = ({ shop, preview }) => (
  <>
    {preview && <PreviewAlert path={APP_ROUTES.SHOP(shop.id)} />}
    <Box sx={{ bgcolor: "white", pb: 4 }}>
      <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2, md: 3 } }}>
        <ShopHeading shop={shop} />
      </Container>
    </Box>

    <Box sx={(theme) => ({ bgcolor: theme.palette.grey["50"] })}>
      <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2, md: 3 } }}>
        <ShopDescription shop={shop} sx={{ py: 4 }} />
      </Container>
    </Box>
    {shop.instock_products?.length > 0 && (
      <Box sx={{ bgcolor: "white", px: 1, py: 4 }}>
        <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2, md: 3 } }}>
          <Typography variant="h4" gutterBottom>
            販售中的商品
          </Typography>
          <ItemGrid
            items={shop.instock_products}
            component={ProductSummaryItem}
            columnSpacing={2}
            rowSpacing={2}
          />
        </Container>
      </Box>
    )}
    {shop?.outofstock_products?.length > 0 && (
      <Box sx={{ bgcolor: "white", px: 1, py: 4 }}>
        <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2, md: 3 } }}>
          <Typography variant="h4" gutterBottom>
            已售罄
          </Typography>
          <ItemGrid
            items={shop.outofstock_products}
            component={ProductSummaryItem}
            columnSpacing={2}
            rowSpacing={2}
          />
        </Container>
      </Box>
    )}
    <ManagementFabs shop={shop} />
  </>
);

export default ShopView;

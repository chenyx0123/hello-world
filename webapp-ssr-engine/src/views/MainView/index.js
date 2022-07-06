import React from "react";

import Link from "next/link";

import { Box, Button, Container, Grid } from "@mui/material";

import { APP_ROUTES } from "market-webapp-commons";

import ItemFlexList from "../../components/catalog/ItemFlexList";
import ItemGrid from "../../components/catalog/ItemGrid";
import LinkedChipItem from "../../components/catalog/LinkedChipItem";
import ShopSummaryItem from "../../components/catalog/ShopSummaryItem";
import useBreakpointValue from "../../hooks/useBreakpointValue";
import Heading from "./components/Heading";
import MainCarousel from "./components/MainCarousel";
import MainProductSummaryItem from "./components/MainProductSummaryItem";
import MarketWorkflowBrief from "./components/MarketWorkflowBrief";

const MainView = ({
  carouselBanners,
  featuredProducts,
  newProducts,
  shops,
  categories,
  tags,
}) => {
  const displayedFeaturedProductsMax = useBreakpointValue({
    xs: 6,
    sm: 9,
    md: 12,
    lg: 18,
  });
  const displayedProducts = useBreakpointValue({
    xs: 4,
    sm: 6,
    md: 8,
    lg: 12,
  });
  const displayedShops = useBreakpointValue({
    xs: 4,
    sm: 6,
    md: 8,
    lg: 12,
  });
  const displayedTags = useBreakpointValue({
    xs: 24,
    sm: 36,
  });

  return (
    <>
      <MainCarousel items={carouselBanners} sx={{ mb: 4 }} />
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" rowGap={4}>
          <Box>
            <Link href={APP_ROUTES.DASHBOARD} passHref>
              <Button
                variant="contained"
                color="primary"
                sx={{ float: "right" }}
              >
                我的攤位
              </Button>
            </Link>
            <Heading
              label="人氣商品"
              href={APP_ROUTES.PRODUCTS({ featured: true })}
              arrow
            />
            <ItemGrid
              items={featuredProducts.slice(0, displayedFeaturedProductsMax)}
              component={MainProductSummaryItem}
              size="medium"
              columnSpacing={2}
              rowSpacing={3}
            />
            <Link href={APP_ROUTES.PRODUCTS({ featured: true })} passHref>
              <Button fullWidth color="inherit">
                顯示更多...
              </Button>
            </Link>
          </Box>
          <Grid container spacing={4} direction="row">
            <Grid
              item
              xs={12}
              md={2}
              order={{ xs: 2, md: 1 }}
              sx={{ position: "relative" }}
            >
              <Box
                sx={(theme) => ({ position: "sticky", top: theme.spacing(9) })}
              >
                <Heading
                  label="熱門分類"
                  href={APP_ROUTES.CATEGORIES}
                  variant="h6"
                />
                <ItemFlexList
                  items={categories}
                  component={LinkedChipItem}
                  size="small"
                  columnGap={0.5}
                  rowGap={0.5}
                  componentProps={{
                    variant: "contained",
                    hrefFn: (item) => APP_ROUTES.CATEGORY({ id: item.id }),
                  }}
                />
                <Box mb={2} />
                <Heading
                  label="熱門標籤"
                  href={APP_ROUTES.TAGS()}
                  variant="h6"
                />
                <ItemFlexList
                  items={tags.slice(0, displayedTags)}
                  component={LinkedChipItem}
                  size="small"
                  columnGap={0.5}
                  rowGap={0.5}
                  componentProps={{
                    variant: "outlined",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={10} order={{ xs: 1, md: 2 }}>
              <Heading label="最新商品" href={APP_ROUTES.PRODUCTS()} arrow />
              <ItemGrid
                items={newProducts.slice(0, displayedProducts)}
                component={MainProductSummaryItem}
                size="medium"
                columnSpacing={2}
                rowSpacing={3}
              />
              <Box mb={2} />
              <Heading label="人氣攤位" href={APP_ROUTES.SHOPS()} arrow />
              <ItemGrid
                items={shops.slice(0, displayedShops)}
                component={ShopSummaryItem}
                size="medium"
                columnSpacing={1}
                rowSpacing={1}
              />
            </Grid>
          </Grid>
          <MarketWorkflowBrief />
        </Box>
      </Container>
    </>
  );
};

export default MainView;

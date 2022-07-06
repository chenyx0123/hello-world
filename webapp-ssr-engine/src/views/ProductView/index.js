import React from "react";

import { Box, Container, Grid } from "@mui/material";

import map from "lodash/map";
import { APP_ROUTES, useCart } from "market-webapp-commons";
import { FormProvider, useForm } from "react-hook-form";

import PreviewAlert from "../../components/PreviewAlert/index";
import {
  AddToCart,
  Description,
  DigitalAssetList,
  DistributorServiceTag,
  Heading,
  ImageCarousel,
  ManagementFabs,
  QuantitySelector,
  R18Warning,
  ShippingList,
  Tags,
  VariationSelector,
} from "./components";

const DEFAULT_FORM_VALUES = {
  variationId: "",
  quantity: "",
};

const ProductView = ({
  product,
  defaultValues = DEFAULT_FORM_VALUES,
  preview,
}) => {
  const { addToCart } = useCart();
  const formMethods = useForm({ defaultValues });
  const { handleSubmit } = formMethods;

  const formSections = [];
  if (product.type === "variable") {
    formSections.push(VariationSelector);
  }
  formSections.push(QuantitySelector);
  formSections.push(AddToCart);

  return (
    <>
      {preview && <PreviewAlert path={APP_ROUTES.PRODUCT(product.id)} />}
      <Box
        sx={(theme) => ({
          py: 4,
          backgroundColor: theme.palette.background.paper,
        })}
      >
        <Container>
          <FormProvider {...formMethods}>
            <form
              onSubmit={handleSubmit((data) =>
                addToCart({ productId: product.id, ...data })
              )}
            >
              <Grid container columnSpacing={{ sm: 2, md: 4 }} rowSpacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={7}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 2,
                  }}
                >
                  <DistributorServiceTag
                    display={{ xs: "block", sm: "none" }}
                    product={product}
                  />
                  <Heading
                    display={{ xs: "block", sm: "none" }}
                    product={product}
                  />
                  <Description
                    short
                    display={{ xs: "block", sm: "none" }}
                    product={product}
                  />
                  <ImageCarousel product={product} />
                  <Description product={product} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={5}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 2,
                  }}
                >
                  <DistributorServiceTag
                    display={{ xs: "none", sm: "block" }}
                    product={product}
                  />
                  <Heading
                    display={{ xs: "none", sm: "block" }}
                    product={product}
                  />
                  <Description
                    short
                    display={{ xs: "none", sm: "block" }}
                    product={product}
                  />
                  {map(formSections, (Component, idx, arr) => (
                    <Component
                      key={idx}
                      product={product}
                      maxStep={arr.length - 1}
                      stepIndex={idx}
                      disabled={preview}
                    />
                  ))}
                  <R18Warning my={2} product={product} />
                  <DigitalAssetList product={product} />
                  <ShippingList product={product} />
                  <Tags product={product} />
                </Grid>
              </Grid>
            </form>
          </FormProvider>
        </Container>
      </Box>

      {/* 
      // TODO: fix other products list
      <Container>
        {product.shop.products.length > 0 && (
          <Box mt={4}>
            <Typography variant="h5" sx={title} gutterBottom>
              {product.shop.name}的其他商品
            </Typography>
            <ProductList items={product.shop.products} />
          </Box>
        )}
      </Container> */}

      <ManagementFabs product={product} />
    </>
  );
};

export default ProductView;

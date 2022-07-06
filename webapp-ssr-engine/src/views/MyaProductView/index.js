import React, { useCallback, useMemo } from "react";

import { Box, Container, Grid } from "@mui/material";

import { omitBy, pickBy, toArray } from "lodash";
import forEach from "lodash/forEach";
import { useCart } from "market-webapp-commons";
import { FormProvider, useForm } from "react-hook-form";

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
} from "../ProductView/components";
import { VariationsQuantitySelector } from "./components";
import { CUSTOM_QUANTITY, calculateQuantity } from "./components/utils";

const DEFAULT_FORM_VALUES = { selected: "", variationQuantity: {} };

const MAIN_VARIATIONS = Object.keys(CUSTOM_QUANTITY);
const REQUIRE_SELECT_VARIATIONS = Object.keys(
  pickBy(CUSTOM_QUANTITY, (v) => v > 0)
);

const ProductView = ({ product, defaultValues = DEFAULT_FORM_VALUES }) => {
  const { addToCart } = useCart();
  const formMethods = useForm({ defaultValues });
  const { handleSubmit, watch } = formMethods;

  const formData = watch();
  const maxStep = REQUIRE_SELECT_VARIATIONS.includes(formData.variationId)
    ? 4
    : 3;
  const calculatedQuantity = useMemo(
    () => calculateQuantity(formData),
    [formData]
  );

  const onSubmit = useCallback(
    (data) => {
      if (!calculatedQuantity.isQuantityValid) return;
      addToCart({
        productId: product.id,
        variationId: data.variationId,
        quantity: data.quantity,
      });
      if (calculatedQuantity.requiredQuantity > 0) {
        forEach(data.variationQuantity, (value, key) => {
          if (value)
            addToCart({
              productId: product.id,
              variationId: key,
              quantity: parseInt(value, 10),
            });
        });
      }
    },
    [product.id, calculatedQuantity, addToCart]
  );

  return (
    <>
      <Box
        sx={(theme) => ({
          py: 4,
          backgroundColor: theme.palette.background.paper,
        })}
      >
        <Container>
          <FormProvider {...formMethods}>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                  <VariationSelector
                    product={{
                      ...product,
                      variations: toArray(
                        pickBy(product.variations, (v) =>
                          MAIN_VARIATIONS.includes(v.id)
                        )
                      ),
                    }}
                    maxStep={maxStep}
                    stepIndex={0}
                  />
                  <QuantitySelector
                    product={product}
                    maxStep={maxStep}
                    stepIndex={1}
                  />
                  {maxStep === 4 && (
                    <VariationsQuantitySelector
                      product={{
                        ...product,
                        variations: toArray(
                          omitBy(product.variations, (v) =>
                            MAIN_VARIATIONS.includes(v.id)
                          )
                        ),
                      }}
                      maxStep={maxStep}
                      stepIndex={2}
                    />
                  )}
                  <AddToCart
                    product={product}
                    maxStep={maxStep}
                    stepIndex={maxStep - 1}
                    disabled={!calculatedQuantity.isQuantityValid}
                  />
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

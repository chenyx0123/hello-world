import React, { useCallback, useRef } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import {
  Box,
  Chip,
  Container,
  IconButton,
  InputAdornment,
  Link as MuiLink,
  Paper,
} from "@mui/material";

import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";

import isUndefined from "lodash/isUndefined";
import omitBy from "lodash/omitBy";
import { APP_ROUTES } from "market-webapp-commons";
import { FormProvider, useForm } from "react-hook-form";

import SearchTab from "../../../../components/catalog/SearchTab";
import StandardCheckbox from "../../../../components/standard-form-fields/StandardCheckbox";
import StandardTextField from "../../../../components/standard-form-fields/StandardTextField";

const AdvancedSearch = ({
  defaultValues = { stock_status: "instock" },
  ...props
}) => {
  const formMethods = useForm({
    defaultValues: omitBy(
      {
        ...defaultValues,
        anyStock: defaultValues.stock_status !== "instock",
      },
      isUndefined
    ),
  });
  const { handleSubmit, setValue, watch } = formMethods;
  const [search, tag, category] = watch(["search", "tag", "category"]);
  const submitRef = useRef();

  const router = useRouter();
  const routeSearch = useCallback(
    (data) => {
      const { search: s, featured, tag: t, category: c, anyStock } = data;
      const basicCriteria = (featured ? 1 : 0) + (t ? 1 : 0) + (c ? 1 : 0);
      const advancedCriteria = anyStock ? 1 : 0;
      if (basicCriteria <= 1 && advancedCriteria === 0) {
        if (t) return router.push(APP_ROUTES.TAG({ id: t.id, search: s }));
        if (c) return router.push(APP_ROUTES.CATEGORY({ id: c.id, search: s }));
        return router.push(APP_ROUTES.PRODUCTS({ featured, search: s }));
      }
      return router.push(
        APP_ROUTES.SEARCH({
          search: s,
          featured,
          tag: t?.id,
          category: c?.id,
          stock_status: anyStock ? "any" : undefined,
        })
      );
    },
    [router]
  );

  return (
    <Paper {...props}>
      <Container maxWidth="md" sx={{ pt: 2 }}>
        <form onSubmit={handleSubmit(routeSearch)}>
          <FormProvider {...formMethods}>
            <StandardTextField
              name="search"
              textFieldProps={{
                InputProps: {
                  endAdornment: (
                    <InputAdornment position="end">
                      {search && (
                        <IconButton
                          onClick={() => {
                            setValue("search", "");
                            submitRef.current?.click();
                          }}
                        >
                          <ClearIcon />
                        </IconButton>
                      )}
                      <IconButton type="submit" edge="end" ref={submitRef}>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
                size: "small",
              }}
            />
            <Box
              alignItems="baseline"
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              flexWrap="wrap"
              pt={1}
            >
              <Box display="flex" columnGap={1}>
                {tag ? (
                  <Chip
                    size="small"
                    label={`標籤：${tag.name}`}
                    deleteIcon={<ClearIcon />}
                    onDelete={() => {
                      setValue("tag", undefined);
                      submitRef.current?.click();
                    }}
                  />
                ) : (
                  !category && (
                    <Link href={APP_ROUTES.TAGS()} passHref>
                      <MuiLink variant="body2">搜尋標籤</MuiLink>
                    </Link>
                  )
                )}
                {category ? (
                  <Chip
                    size="small"
                    label={`分類：${category.name}`}
                    deleteIcon={<ClearIcon />}
                    onDelete={() => {
                      setValue("category", undefined);
                      submitRef.current?.click();
                    }}
                  />
                ) : (
                  !tag && (
                    <Link href={APP_ROUTES.CATEGORIES} passHref>
                      <MuiLink variant="body2">搜尋分類</MuiLink>
                    </Link>
                  )
                )}
              </Box>
              <Box display="flex" columnGap={1}>
                <StandardCheckbox
                  name="featured"
                  label="熱門商品"
                  fieldProps={{
                    onChange: (e) => {
                      setValue("featured", e.target.checked);
                      submitRef.current?.click();
                    },
                  }}
                />
                <StandardCheckbox
                  name="anyStock"
                  label="顯示已售罄"
                  fieldProps={{
                    onChange: (e) => {
                      setValue("anyStock", e.target.checked);
                      submitRef.current?.click();
                    },
                  }}
                />
              </Box>
            </Box>
          </FormProvider>
        </form>
        <SearchTab search={search} selectedTab="product" />
      </Container>
    </Paper>
  );
};

export default AdvancedSearch;

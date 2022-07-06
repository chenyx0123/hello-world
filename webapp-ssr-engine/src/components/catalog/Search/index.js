import React, { useCallback, useRef } from "react";

import { Container, IconButton, InputAdornment, Paper } from "@mui/material";

import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";

import isUndefined from "lodash/isUndefined";
import omitBy from "lodash/omitBy";
import { FormProvider, useForm } from "react-hook-form";

import StandardTextField from "../../standard-form-fields/StandardTextField";
import SearchTab from "../SearchTab";

const Search = ({
  defaultValues = {},
  placeholder,
  onSearch,
  selectedTab,
  ...props
}) => {
  const formMethods = useForm({
    defaultValues: omitBy(defaultValues, isUndefined),
  });
  const { handleSubmit, setValue, watch } = formMethods;
  const [search] = watch(["search"]);

  const submitRef = useRef();

  const routeSearch = useCallback(
    (data) => onSearch && onSearch(data),
    [onSearch]
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
                  placeholder,
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
          </FormProvider>
        </form>
        <SearchTab search={search} selectedTab={selectedTab} />
      </Container>
    </Paper>
  );
};

export default Search;

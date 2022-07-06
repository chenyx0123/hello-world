import React from "react";

import { Box, MenuItem, Select, Typography } from "@mui/material";

import map from "lodash/map";
import reduce from "lodash/reduce";
import { Controller } from "react-hook-form";

import withFormContext from "../../hoc/withFormContext";
import StyledFormLabel from "./StyledFormLabel";

const StandardSelect = ({
  name,
  choices = [],
  required = false,
  label,
  registerProps = {},
  selectProps = {},
  formContext: {
    control,
    formState: { errors },
  },
  ...props
}) => {
  const controllerRender = ({ field }) => (
    <Select variant="outlined" fullWidth {...selectProps} {...field}>
      {map(choices, (o) => (
        <MenuItem key={o.value} value={o.value}>
          {o.label}
        </MenuItem>
      ))}
    </Select>
  );

  return (
    <Box {...props}>
      {label && (
        <StyledFormLabel
          label={label}
          required={required}
          error={
            reduce(name.split("."), (obj, key) => obj?.[key], errors)?.message
          }
          sx={{ mb: 1 }}
        />
      )}
      <Controller
        control={control}
        name={name}
        render={controllerRender}
        rules={registerProps}
      />
      {!label &&
        reduce(name.split("."), (obj, key) => obj?.[key], errors)?.message && (
          <Typography color="error">
            {reduce(name.split("."), (obj, key) => obj?.[key], errors)?.message}
          </Typography>
        )}
    </Box>
  );
};

export default withFormContext(StandardSelect);

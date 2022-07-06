import React from "react";

import { Box, Button, Typography } from "@mui/material";

import map from "lodash/map";
import reduce from "lodash/reduce";

import withFormContext from "../../hoc/withFormContext";
import StyledFormLabel from "./StyledFormLabel";

const StandardFileSelect = ({
  name,
  required = false,
  actionLabel = "Upload",
  label,
  registerProps = {},
  buttonProps = {},
  inputProps = {},
  formContext: {
    register,
    watch,
    formState: { errors },
  },
  ...props
}) => {
  const files = watch(name);

  return (
    <Box {...props}>
      <StyledFormLabel
        label={label}
        required={required}
        error={
          reduce(name.split("."), (obj, key) => obj?.[key], errors)?.message
        }
        sx={{ mb: 1 }}
      />
      <Box>
        <Typography variant="caption">已選擇檔案：</Typography>
        {map(files, (f) => (
          <Typography key={f.name} variant="caption" gutterBottom>
            {f.name}
          </Typography>
        ))}
      </Box>
      <Button component="label" {...buttonProps}>
        {actionLabel}
        <input
          {...register(name, registerProps)}
          type="file"
          hidden
          {...inputProps}
        />
      </Button>
    </Box>
  );
};

export default withFormContext(StandardFileSelect);

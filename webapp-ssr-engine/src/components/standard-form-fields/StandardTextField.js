import React from "react";

import { Box, TextField, Typography } from "@mui/material";

import reduce from "lodash/reduce";

import withFormContext from "../../hoc/withFormContext";
import StyledFormLabel from "./StyledFormLabel";

const StandardTextField = ({
  name,
  type = "text",
  required = false,
  label,
  placeholder,
  errorMessageProps = {},
  registerProps = {},
  textFieldProps = {},
  formContext: {
    register,
    formState: { errors },
  },
  ...props
}) => {
  const error = reduce(
    name.split("."),
    (obj, key) => obj?.[key],
    errors
  )?.message;
  return (
    <Box width="100%" {...props}>
      {label && (
        <StyledFormLabel
          label={label}
          required={required}
          error={error}
          sx={{ mb: 1 }}
        />
      )}
      <TextField
        variant="outlined"
        fullWidth
        type={type}
        placeholder={placeholder}
        {...register(name, registerProps)}
        {...textFieldProps}
        error={!!error}
      />
      {!label && error && (
        <Typography variant="caption" color="error" {...errorMessageProps}>
          {error}
        </Typography>
      )}
    </Box>
  );
};
export default withFormContext(StandardTextField);

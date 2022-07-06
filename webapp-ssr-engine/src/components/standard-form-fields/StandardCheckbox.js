import React from "react";

import { Box, FormControlLabel, Typography } from "@mui/material";

import withFormContext from "../../hoc/withFormContext";

const StandardCheckbox = ({
  name,
  required,
  label,
  registerProps = {},
  fieldProps = {},
  formContext: { register },
  ...props
}) => (
  <Box {...props}>
    <FormControlLabel
      control={
        <Box sx={{ width: 24, height: 24, mt: 0.5 }}>
          <input type="checkbox" {...register(name, registerProps)} />
        </Box>
      }
      label={
        <Typography color="textPrimary" variant="body1">
          {label}
        </Typography>
      }
      sx={{ mx: 0 }}
      {...fieldProps}
    />
  </Box>
);

export default withFormContext(StandardCheckbox);

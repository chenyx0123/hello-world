import React from "react";

import { Box, FormControlLabel, Typography } from "@mui/material";

import reduce from "lodash/reduce";

import withFormContext from "../../hoc/withFormContext";
import StyledFormLabel from "./StyledFormLabel";

const StandardCheckbox = ({
  name,
  choices = [],
  required,
  label,
  registerProps = {},
  formContext: {
    register,
    formState: { errors },
  },
  ...props
}) => (
  <Box {...props}>
    <StyledFormLabel
      label={label}
      required={required}
      error={reduce(name.split("."), (obj, key) => obj?.[key], errors)?.message}
      sx={{ mb: 1 }}
    />
    <Box flexDirection="row">
      {choices.map((o) => (
        <FormControlLabel
          control={
            <Box sx={{ width: 24, height: 24, mx: 0.5, mt: 0.5 }}>
              <input
                type="checkbox"
                {...register(`${name}.${o.name}`, registerProps)}
              />
            </Box>
          }
          key={o.name}
          label={
            <Typography color="textPrimary" variant="body1">
              {o.label}
            </Typography>
          }
        />
      ))}
    </Box>
  </Box>
);

export default withFormContext(StandardCheckbox);

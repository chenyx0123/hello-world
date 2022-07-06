import React from "react";

import { Box, FormControlLabel, RadioGroup, Typography } from "@mui/material";

import reduce from "lodash/reduce";

import withFormContext from "../../hoc/withFormContext";
import StyledFormLabel from "./StyledFormLabel";

const StandardRadioGroup = ({
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
    {
      // TODO: use mui radio and hidden input to register
    }
    <RadioGroup sx={{ flexDirection: "row" }}>
      {choices.map((o) => (
        <FormControlLabel
          control={
            <Box sx={{ width: 24, height: 24, mx: 0.5, mt: 0.5 }}>
              <input
                type="radio"
                color="primary"
                value={o.value}
                {...register(name, registerProps)}
              />
            </Box>
          }
          key={o.value}
          label={
            <Typography color="textPrimary" variant="body1">
              {o.label}
            </Typography>
          }
        />
      ))}
    </RadioGroup>
  </Box>
);

export default withFormContext(StandardRadioGroup);

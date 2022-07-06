import React from "react";

import { FormControlLabel, RadioGroup, Typography } from "@mui/material";

import withFormContext from "../../../../hoc/withFormContext";

const VariationRadioGroup = ({
  name,
  choices = [],
  registerProps = {},
  formContext: { register, watch },
}) => {
  const selectedValue = watch(name);
  return (
    <RadioGroup
      sx={{
        alignItems: "stretch",
        flexDirection: "row",
        justifyContent: "space-between",
        columnGap: "2%",
        rowGap: 1.5,
      }}
    >
      {choices.map((o) => (
        <FormControlLabel
          key={o.value}
          control={
            <input
              type="radio"
              value={o.value}
              {...register(name, registerProps)}
              style={{ display: "none" }}
            />
          }
          sx={{
            mx: 0,
            flexGrow: 1,
            flexBasis: `${Math.min(
              100,
              ((o.label.length * 2 -
                o.label.replace(/[^ -\x7F]+/g, "").length) /
                32) *
                95
            )}%`,
          }}
          label={
            <Typography
              variant="body1"
              sx={(theme) => ({
                border: `1px solid ${
                  selectedValue === o.value
                    ? theme.palette.secondary.main
                    : theme.palette.grey[!selectedValue ? 600 : 300]
                }`,
                borderRadius: 1,
                px: 1,
                py: 1,
                width: "100%",
                height: "100%",
                textAlign: "center",
                textDecoration:
                  o.stock_status === "instock" ? undefined : "line-through",
              })}
            >
              {o.label}
            </Typography>
          }
        />
      ))}
    </RadioGroup>
  );
};

export default withFormContext(VariationRadioGroup);

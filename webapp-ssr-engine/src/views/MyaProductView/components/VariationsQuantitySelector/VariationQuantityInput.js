import React from "react";

import { TextField } from "@mui/material";

import isUndefined from "lodash/isUndefined";

import withFormContext from "../../../../hoc/withFormContext";

const VariationQuantityInput = ({
  variation,
  formContext: { register, watch, setValue },
  registerProps,
}) => {
  const [value, selectedId] = watch([
    `variationQuantity.${variation.id}`,
    "selected",
  ]);

  return (
    <TextField
      label={variation.description}
      type="number"
      value={value ?? ""}
      {...register(`variationQuantity.${variation.id}`, registerProps)}
      inputProps={{
        inputMode: "decimal",
        min: 0,
        max: isUndefined(variation.quantity)
          ? 99
          : Math.min(99, variation.quantity),
      }}
      color={selectedId === variation.id ? "secondary" : undefined}
      disabled={variation.stock_status === "outofstock"}
      focused={selectedId === variation.id ?? false}
      onClick={() => setValue("selected", variation.id)}
      InputLabelProps={{
        sx: {
          textDecoration:
            variation.stock_status === "instock" ? undefined : "line-through",
        },
      }}
      sx={{
        mx: 0,
        flexGrow: 1,
        flexBasis: `${Math.min(
          100,
          ((variation.description.length * 3 -
            variation.description.replace(/[^ -\x7F]+/g, "").length) /
            32) *
            95
        )}%`,
      }}
    />
  );
};

export default withFormContext(VariationQuantityInput);

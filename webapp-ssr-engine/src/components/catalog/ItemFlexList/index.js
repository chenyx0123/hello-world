import React from "react";

import { Box } from "@mui/material";

import map from "lodash/map";
import range from "lodash/range";

const ItemFlexList = ({
  items,
  size = "medium",
  component: Component,
  placeholder: Placeholder,
  placeholderCount = 6,
  loading = false,
  componentProps = {},
  ...props
}) => (
  <Box display="flex" flexWrap="wrap" {...props}>
    {map(items, (item) => (
      <Component key={item.id} item={item} size={size} {...componentProps} />
    ))}
    {Placeholder &&
      loading &&
      map(range(placeholderCount), (id) => (
        <Placeholder key={`pl/${id}`} size={size} {...componentProps} />
      ))}
  </Box>
);

export default ItemFlexList;

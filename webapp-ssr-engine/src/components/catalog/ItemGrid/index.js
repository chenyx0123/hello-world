import React from "react";

import { Grid } from "@mui/material";

import map from "lodash/map";
import range from "lodash/range";

const gridItemDefaultsMedium = {
  xs: 6,
  sm: 4,
  md: 3,
  lg: 2,
};

const gridItemDefaultsLarge = {
  xs: 12,
  sm: 6,
  md: 4,
  lg: 3,
};

const ItemGrid = ({
  items,
  size = "medium",
  component: Component,
  placeholder: Placeholder,
  loading = false,
  gridItemProps = {},
  ...props
}) => (
  <Grid container {...props}>
    {map(items, (item) => (
      <Grid
        item
        {...(size === "large" ? gridItemDefaultsLarge : gridItemDefaultsMedium)}
        key={item.id}
        {...gridItemProps}
      >
        <Component item={item} size={size} />
      </Grid>
    ))}
    {Placeholder &&
      loading &&
      map(range(6), (id) => (
        <Grid
          item
          {...(size === "large"
            ? gridItemDefaultsLarge
            : gridItemDefaultsMedium)}
          key={`pl/${id}`}
          {...gridItemProps}
        >
          <Placeholder size={size} />
        </Grid>
      ))}
  </Grid>
);

export default ItemGrid;

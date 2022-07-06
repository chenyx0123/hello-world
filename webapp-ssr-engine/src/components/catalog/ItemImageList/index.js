import React from "react";

import { ImageList, ImageListItem } from "@mui/material";

import map from "lodash/map";
import range from "lodash/range";

const ItemImageList = ({
  items,
  cols = 2,
  component: Component,
  placeholder: Placeholder,
  loading = false,
  ...props
}) => (
  <ImageList cols={cols} {...props}>
    {map(items, (item) => (
      <ImageListItem key={item.id}>
        <Component item={item} />
      </ImageListItem>
    ))}
    {Placeholder &&
      loading &&
      map(range(cols), (id) => (
        <ImageListItem key={`pl/${id}`}>
          <Placeholder />
        </ImageListItem>
      ))}
  </ImageList>
);

export default ItemImageList;

import React from "react";

import { APP_ROUTES } from "market-webapp-commons";

import ChipItem from "./ChipItem";

const LinkedChipItem = ({
  item,
  hrefFn = ({ id }) => APP_ROUTES.TAG({ id }),
  ...props
}) => (
  <ChipItem
    item={item}
    component="a"
    clickable
    href={hrefFn(item)}
    {...props}
  />
);

export default LinkedChipItem;

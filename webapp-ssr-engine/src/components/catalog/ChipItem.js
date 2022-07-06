import React from "react";

import { Chip } from "@mui/material";

const ChipItem = ({ item, ...props }) => (
  <Chip
    label={item.name}
    variant="outlined"
    sx={{
      py: 1.5,
    }}
    {...props}
  />
);

export default ChipItem;

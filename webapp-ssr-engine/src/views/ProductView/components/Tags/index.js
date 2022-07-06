import React from "react";

import { Box } from "@mui/material";

import ItemFlexList from "../../../../components/catalog/ItemFlexList";
import LinkedChipItem from "../../../../components/catalog/LinkedChipItem";
import SectionTitle from "../SectionTitle";

const Tags = ({ product, ...props }) =>
  product.tags && product.tags.length > 0 ? (
    <Box {...props}>
      <SectionTitle title="標籤" color="textSecondary" mb={1} />
      <ItemFlexList
        items={product.tags}
        component={LinkedChipItem}
        size="small"
        rowGap={0.5}
        columnGap={0.5}
      />
    </Box>
  ) : null;

export default Tags;

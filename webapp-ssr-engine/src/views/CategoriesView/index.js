import React from "react";

import { Container } from "@mui/material";

import CategoryItem from "../../components/catalog/CategoryItem";
import ItemImageList from "../../components/catalog/ItemImageList";
import useBreakpointValue from "../../hooks/useBreakpointValue";

const CategoriesView = ({ categories, ...props }) => {
  const cols = useBreakpointValue({
    xs: 1,
    sm: 2,
    md: 3,
  });

  return (
    <Container maxWidth="lg" {...props}>
      <ItemImageList items={categories} component={CategoryItem} cols={cols} />
    </Container>
  );
};

export default CategoriesView;

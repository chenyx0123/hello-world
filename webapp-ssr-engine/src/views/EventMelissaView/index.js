import React from "react";

import { Box, Container } from "@mui/material";

import ItemGrid from "../../components/catalog/ItemGrid";
import ProductSummaryItem from "../../components/catalog/ProductSummaryItem";
import EventDetails from "./components/EventDetails";

const EventMelissaView = ({ products }) => (
  <Box>
    <EventDetails sx={{ bgcolor: "white", pb: 2 }} />
    <Box width="100%" bgcolor="white" sx={{ pt: 2 }}>
      <Container maxWidth="lg">
        <ItemGrid
          items={products}
          component={ProductSummaryItem}
          size="large"
          columnSpacing={2}
          rowSpacing={2}
        />
      </Container>
    </Box>
  </Box>
);

export default EventMelissaView;

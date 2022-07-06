import React from "react";

import { Box, Container } from "@mui/material";

import NoResult from "../../components/NoResult";
import ItemFlexList from "../../components/catalog/ItemFlexList";
import LinkedChipItem from "../../components/catalog/LinkedChipItem";
import Search from "../../components/catalog/Search";

const TagsView = ({ tags, filter, onSearch }) => (
  <Box height="100%" display="flex" flexDirection="column">
    <Search
      defaultValues={filter}
      placeholder="搜尋標籤..."
      selectedTab="tag"
      onSearch={onSearch}
    />
    <Container
      maxWidth="xl"
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        py: 2,
        rowGap: 2,
      }}
    >
      {tags.length > 0 ? (
        <ItemFlexList
          items={tags}
          component={LinkedChipItem}
          size="medium"
          justifyContent="center"
          rowGap={1}
          columnGap={1}
        />
      ) : (
        <NoResult />
      )}
    </Container>
  </Box>
);

export default TagsView;

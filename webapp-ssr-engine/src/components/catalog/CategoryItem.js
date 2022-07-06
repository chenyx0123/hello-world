import React from "react";

import Link from "next/link";

import {
  Badge,
  IconButton,
  ImageListItem,
  ImageListItemBar,
  Link as MuiLink,
} from "@mui/material";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { APP_ROUTES } from "market-webapp-commons";

// https://material-ui.com/components/grid-list/#grid-list-with-titlebars
const CategoryItem = ({ item }) => (
  <ImageListItem>
    <Link href={APP_ROUTES.CATEGORY({ id: item.id })} passHref>
      <MuiLink>
        <img src={item.image?.src} width="100%" alt={item.name} />
        <ImageListItemBar
          title={
            <>
              {item.name}
              <Badge
                badgeContent={item.count}
                max={9999}
                color="primary"
                showZero
                sx={{
                  position: "static",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  transform: "translate(0,0)",
                  mx: 1,
                  px: 1,
                }}
              />
            </>
          }
          subtitle={item.description}
          actionIcon={
            <IconButton>
              <NavigateNextIcon />
            </IconButton>
          }
        />
      </MuiLink>
    </Link>
  </ImageListItem>
);

export default CategoryItem;

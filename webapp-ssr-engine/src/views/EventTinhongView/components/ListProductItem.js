import React from "react";

import Link from "next/link";

import {
  Box,
  Container,
  Grid,
  Link as MuiLink,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { APP_ROUTES, getImageUrl, useRegion } from "market-webapp-commons";

import ExpandableTextContainer from "../../../components/ExpandableTextContainer";
import QuickAddToCart from "./QuickAddToCart";

const ListProductItem = ({ item, expanded, ...props }) => {
  const { toLocalCurrency } = useRegion();
  const xsOnly = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  let desc;
  let shortDesc;

  if (
    item.description &&
    item.description.trim().length > 0 &&
    item.description.trim() !== "</p>"
  ) {
    desc = item.description.trim();
  }
  if (
    item.short_description &&
    item.short_description.trim().length > 0 &&
    item.short_description.trim() !== "</p>"
  ) {
    shortDesc = item.short_description.trim();
  }

  return (
    (item && (
      <Box py={4} {...props}>
        <Container maxWidth="md">
          <Grid container spacing={3} alignItems="flex-start">
            <Grid item xs={12} sm={5}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Link href={APP_ROUTES.PRODUCT(item.id)} passHref>
                  <MuiLink underline="none">
                    <img
                      className="lazyload"
                      data-src={getImageUrl(item.main_image, {
                        w: 500,
                        h: 500,
                        t: "webp",
                      })}
                      style={{
                        width: "100%",
                        maxHeight: "50vh",
                        objectFit: "cover",
                      }}
                      alt={item.name}
                    />
                  </MuiLink>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Link href={APP_ROUTES.PRODUCT(item.id)} passHref>
                <MuiLink underline="none">
                  <Typography
                    gutterBottom
                    variant="h6"
                    color="textPrimary"
                    fontSize="20px"
                  >
                    {item.name}
                  </Typography>
                </MuiLink>
              </Link>
              <Box display="inline" mb={1}>
                <Typography color="textPrimary" fontSize="20px">
                  售價: {item.price_text} 珍珠
                  <Typography
                    color="textSecondary"
                    underline="none"
                    variant="caption"
                    fontSize="15px"
                  >
                    / {toLocalCurrency(item.price_text)}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="caption"
                    fontSize="15px"
                  >
                    +運費
                  </Typography>
                </Typography>
              </Box>
              <ExpandableTextContainer
                htmlText={(desc ?? shortDesc)
                  ?.replace(/width: ([0-9.]+(px|%)|auto)/g, "max-width: 100%")
                  ?.replace(/height: ([0-9.]+(px|%)|auto)/g)}
                expanded={expanded}
                sx={{ fontSize: "15px", mb: 3, pt: "2%" }}
                TextContainerProps={{
                  sx: {
                    "& p": {
                      margin: 0,
                      fontFamily:
                        '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
                      fontWeight: 400,
                      fontSize: "13px",
                      lineHeight: 1.5,
                    },
                  },
                }}
              />
              <QuickAddToCart
                item={item}
                fullWidth={xsOnly}
                sx={{ minWidth: "200px" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    )) ||
    null
  );
};

export default ListProductItem;

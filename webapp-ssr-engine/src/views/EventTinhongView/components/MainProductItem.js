import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Box, Grid, Link as MuiLink, Typography } from "@mui/material";

import { APP_ROUTES, useRegion } from "market-webapp-commons";

import EventMainProduct from "../../../../public/th_d7_cover.png";
import ExpandableTextContainer from "../../../components/ExpandableTextContainer";
import QuickAddToCart from "./QuickAddToCart";

const mainFontColor = {
  color: "#ffd379",
};

const MainProductItem = ({ item, expanded, ...props }) => {
  const { toLocalCurrency } = useRegion();
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
      <Box alignItems="center" bgcolor="#362130" py={2} {...props}>
        <Grid container columnSpacing={4} alignItems="start">
          <Grid item xs={12} sm={6}>
            <Link href={APP_ROUTES.PRODUCT(item.id)} passHref>
              <MuiLink>
                <Image src={EventMainProduct} layout="responsive" priority />
              </MuiLink>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box px={2}>
              <Link href={APP_ROUTES.PRODUCT(item.id)} passHref>
                <MuiLink underline="none">
                  <Typography
                    gutterBottom
                    variant="h3"
                    sx={mainFontColor}
                    paddingTop="5%"
                  >
                    天航最新力作
                  </Typography>
                  <Typography gutterBottom variant="h6" sx={mainFontColor}>
                    {item.name}
                  </Typography>
                </MuiLink>
              </Link>
              <ExpandableTextContainer
                htmlText={(desc || shortDesc)
                  ?.replace(/width: ([0-9.]+(px|%)|auto)/g, "max-width: 100%")
                  ?.replace(/height: ([0-9.]+(px|%)|auto)/g)}
                expanded={expanded}
                sx={{ ...mainFontColor, mb: 3 }}
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
              <Grid
                item
                xs={12}
                container
                alignItems="baseline"
                sx={{ pb: "5%" }}
              >
                <Typography
                  variant="body1"
                  fontSize="20px"
                  sx={{ ...mainFontColor }}
                >
                  售價: {item.price_text} 珍珠&nbsp;
                </Typography>
                <Typography
                  variant="body1"
                  fontSize="14px"
                  sx={{ ...mainFontColor }}
                >
                  / {toLocalCurrency(item.price_text)}
                </Typography>
              </Grid>
              <QuickAddToCart item={item} fullWidth />
            </Box>
          </Grid>
        </Grid>
      </Box>
    )) ||
    null
  );
};

export default MainProductItem;

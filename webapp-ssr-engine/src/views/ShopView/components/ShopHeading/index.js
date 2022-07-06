import React from "react";

import Link from "next/link";

import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Link as MuiLink,
  Typography,
} from "@mui/material";

import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

import { APP_ROUTES, getImageUrl } from "market-webapp-commons";

import ContactButton from "../../../../components/ContactButton";

const ShopHeading = ({ shop, hideActions, ...props }) => (
  <Box {...props}>
    {shop.banner_image && (
      <Box
        sx={{
          backgroundColor: "#ffffff",
          mx: { xs: 0, sm: -2, md: -3, lg: 0 },
        }}
      >
        <img
          src={getImageUrl(shop.banner_image, {
            w: 1200,
            t: "webp",
          })}
          style={{ width: "100%" }}
          alt=""
        />
      </Box>
    )}
    <Card
      elevation={0}
      sx={{
        borderRadius: 0,
        backgroundColor: "#ffffff",
        px: { xs: 1, sm: 0 },
        py: 2,
      }}
    >
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={3} lg={2} textAlign="center">
          <Link href={APP_ROUTES.SHOP(shop.id)} passHref>
            <MuiLink>
              <CardMedia
                sx={{
                  cursor: "pointer",
                  display: "inline-block",
                  width: 128,
                  height: 128,
                  borderRadius: "50%",
                }}
                image={
                  shop.main_image
                    ? getImageUrl(shop.main_image, {
                        w: 128,
                        h: 128,
                        t: "webp",
                        f: "cover",
                      })
                    : ""
                }
                title={shop.name}
              />
            </MuiLink>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          sm={9}
          lg={10}
          textAlign={{ xs: "center", sm: "inherit" }}
          sx={{ m: 0, p: 0 }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent={{ xs: "center", sm: "flex-start" }}
            overflow="hidden"
          >
            <Link href={APP_ROUTES.SHOP(shop.id)} passHref>
              <MuiLink underline="none" variant="h6" color="textPrimary">
                {shop.name}
              </MuiLink>
            </Link>
            {!hideActions && (
              <ContactButton
                contact={shop.owner}
                sx={{ display: { xs: "none", sm: "block" }, ml: 2 }}
              />
            )}
          </Box>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            sx={{ lineHeight: 1.2 }}
          >
            {shop.short_description}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ pt: 2 }} />
        <Grid item xs={12} sm={3} lg={2} textAlign="center">
          {/* <IconButton size="small">
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton size="small">
                <InstagramIcon />
              </IconButton> */}
        </Grid>
        {!hideActions && (
          <Grid item xs={12} sm={9} lg={10} align="right">
            <ContactButton
              isButton
              contact={shop.owner}
              sx={{
                display: { xs: "inline", sm: "none" },
                mx: { xs: 1, sm: 0 },
              }}
            />{" "}
            <Link href={APP_ROUTES.SHOP_DONATE(shop.id)}>
              <Button
                startIcon={<MonetizationOnIcon />}
                color="primary"
                variant="outlined"
                size="large"
                sx={{ mr: { xs: 0, sm: 2 } }}
              >
                打賞
              </Button>
            </Link>
          </Grid>
        )}
      </Grid>
    </Card>
  </Box>
);

export default ShopHeading;

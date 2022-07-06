import React from "react";

import Link from "next/link";

import { Box, Card, Link as MuiLink } from "@mui/material";

import { APP_ROUTES, getImageUrl } from "market-webapp-commons";

import StubImage from "../../../public/stub-image.png";

const PLACEHOLDER_PIXEL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";

const ShopSummaryItem = ({ item, sx, ...props }) => (
  <Card
    sx={(theme) => ({
      position: "relative",
      width: "100%",
      pb: theme.spacing(4),
      ...sx,
    })}
    {...props}
  >
    <Link href={APP_ROUTES.SHOP(item.id)} passHref>
      <MuiLink underline="none" color="textPrimary">
        <Box
          sx={{
            backgroundColor: "#f9f9f9",
            aspectRatio: "2",
            position: "relative",
          }}
        >
          <img
            alt=""
            className="lazyload"
            data-src={
              item.banner_image ?? item.main_image
                ? getImageUrl(item.banner_image ?? item.main_image, {
                    w: 300,
                    h: 150,
                    t: "webp",
                    f: "cover",
                  })
                : PLACEHOLDER_PIXEL
            }
            style={{ position: "absolute", left: 0, top: 0, maxWidth: "100%" }}
          />
        </Box>
      </MuiLink>
    </Link>
    <Box
      display="flex"
      flexWrap="nowrap"
      alignItems="flex-end"
      position="absolute"
      bottom={0}
      width="100%"
    >
      <Link href={APP_ROUTES.SHOP(item.id)} passHref>
        <MuiLink underline="none" color="textPrimary">
          <Box
            sx={{
              bgcolor: "#fff",
              borderTopRightRadius: "50%",
              overflow: "hidden",
              pr: 0.5,
              pt: 0.5,
            }}
          >
            <img
              className="lazyload"
              data-src={
                item.main_image
                  ? getImageUrl(item.main_image, {
                      w: 128,
                      h: 128,
                      t: "webp",
                      f: "cover",
                    })
                  : StubImage.src
              }
              height={48}
              width={48}
              style={{ display: "block", borderTopRightRadius: "inherit" }}
              alt={item.name}
            />
          </Box>
        </MuiLink>
      </Link>
      <Link href={APP_ROUTES.SHOP(item.id)} passHref>
        <MuiLink
          underline="none"
          variant="subtitle1"
          color="textPrimary"
          overflow="hidden"
          textOverflow="ellipsis"
          noWrap
          sx={{ pl: 1.5, py: 0.5, ml: -0.5, bgcolor: "#fff", width: "100%" }}
        >
          {item.name}
        </MuiLink>
      </Link>
    </Box>
  </Card>
);

export default ShopSummaryItem;

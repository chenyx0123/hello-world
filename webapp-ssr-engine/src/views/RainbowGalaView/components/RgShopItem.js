import React from "react";

import Link from "next/link";

import { Box, Link as MuiLink, Typography } from "@mui/material";

import { APP_ROUTES, getImageUrl } from "market-webapp-commons";

const PLACEHOLDER_PIXEL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";

const color = {
  PINK: "#f1bad2",
  RED: "#e96974",
  ORANGE: "#f3a96c",
  YELLOW: "#ffe26d",
  GREEN: "#8be187",
  BLUE: "#6bc8e6",
  INDIGO: "#858ede",
  VIOLET: "#db8fff",
  WHITE: "#c9c9c9",
  BIZ: "#8e9191",
};

const RgShopItem = ({ item }) => (
  <Box style={{ position: "relative" }}>
    <Link href={APP_ROUTES.SHOP(item.id)} passHref>
      <MuiLink style={{ overflow: "hidden" }}>
        <Box
          sx={{
            width: "100%",
            pb: "100%",
            position: "relative",
          }}
        >
          <img
            data-src={
              item?.rg27_image
                ? getImageUrl(item?.rg27_image, {
                    w: 500,
                    h: 500,
                    t: "webp",
                    f: "cover",
                  })
                : PLACEHOLDER_PIXEL
            }
            className="lazyload"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
            alt=""
          />
          <Box
            sx={{
              bgcolor: `${color[item.rg27_color]}b0`,
              borderRadius: "0 8px 0 0",
              bottom: 0,
              color: "#ffffff",
              display: item.rg27_show_name_on_booth ? "block" : "none",
              maxWidth: "50%",
              left: 0,
              position: "absolute",
              px: 1,
            }}
          >
            <Typography variant="subtitle1" noWrap>
              {item.rg27_name}
            </Typography>
          </Box>
        </Box>
      </MuiLink>
    </Link>
  </Box>
);

export default RgShopItem;

/* eslint-disable camelcase */
import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Box, Button, Container, Grid, Typography } from "@mui/material";

import { map, toArray } from "lodash";
import { APP_ROUTES } from "market-webapp-commons";
import ImageMapper from "react-img-mapper";

import BannerImg from "../../../public/banners/rg27_banner.jpg";
import ImageD13F from "../../../public/events/rainbow-gala-27/rg27_3fmap_day1.png";
import ImageD23F from "../../../public/events/rainbow-gala-27/rg27_3fmap_day2.png";
import ImageD16F from "../../../public/events/rainbow-gala-27/rg27_6fmap_day1.png";
import ImageD26F from "../../../public/events/rainbow-gala-27/rg27_6fmap_day2.png";
import ItemGrid from "../../components/catalog/ItemGrid";
import ItemImageList from "../../components/catalog/ItemImageList";
import ProductSummaryItem from "../../components/catalog/ProductSummaryItem";
import useBreakpointValue from "../../hooks/useBreakpointValue";
import RgShopItem from "./components/RgShopItem";

const MAX_MAP_SIZE = 1000;

const FLOOR = {
  "day1-3f": {
    label: "Day1 3/F",
    map: ImageD13F,
  },
  "day1-6f": {
    label: "Day1 6/F",
    map: ImageD16F,
  },
  "day2-3f": {
    label: "Day2 3/F",
    map: ImageD23F,
  },
  "day2-6f": {
    label: "Day2 6/F",
    map: ImageD26F,
  },
};

const OVERLAY_MAP = [
  {
    name: "PINK",
    shape: "rect",
    coords: [80, 180, 315, 900],
    fillColor: "#EBA2AE80",
  },
  {
    name: "RED",
    shape: "rect",
    coords: [315, 180, 410, 900],
    fillColor: "#D1000080",
  },
  {
    name: "ORANGE",
    shape: "rect",
    coords: [410, 180, 505, 900],
    fillColor: "#D1680080",
  },
  {
    name: "YELLOW",
    shape: "rect",
    coords: [505, 180, 600, 900],
    fillColor: "#D1D10080",
  },
  {
    name: "GREEN",
    shape: "rect",
    coords: [600, 180, 695, 900],
    fillColor: "#00D10080",
  },
  {
    name: "BLUE",
    shape: "rect",
    coords: [695, 180, 790, 900],
    fillColor: "#0068D180",
  },
  {
    name: "INDIGO",
    shape: "rect",
    coords: [790, 180, 885, 900],
    fillColor: "#3F3FBF80",
  },
  {
    name: "VIOLET",
    shape: "rect",
    coords: [885, 180, 1100, 900],
    fillColor: "#6800D180",
  },
  {
    name: "WHITE",
    shape: "rect",
    coords: [315, 50, 885, 180],
    fillColor: "#FFFFFF80",
  },
  {
    name: "BIZ",
    shape: "rect",
    coords: [315, 900, 885, 1050],
    fillColor: "#FFFFFF80",
  },
];

const getWidth = () => {
  if (window.innerWidth / window.innerHeight > 1.5) {
    return Math.min(window.innerHeight, MAX_MAP_SIZE);
  }
  return Math.min(document.body.offsetWidth, MAX_MAP_SIZE);
};

const getShopSectionTitle = (rg27_floor, rg27_color) => {
  if (!rg27_floor && !rg27_color) return "全部攤位";
  const currentColorName = rg27_color === "biz" ? "商業攤位" : rg27_color;
  return `${FLOOR[rg27_floor]?.label ?? "Day1&2"} ${
    currentColorName?.toUpperCase() ?? ""
  }`;
};

const RainbowGalaView = ({
  rg27_products,
  rg27_shops,
  rg27_floor,
  rg27_color,
}) => {
  const router = useRouter();
  const [width, setWidth] = useState(MAX_MAP_SIZE);

  useEffect(() => {
    const updateWidthAndHeight = () => {
      setWidth(getWidth());
    };
    updateWidthAndHeight();
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  return (
    <Box sx={{ bgcolor: "#f5eeeb" }}>
      <Container>
        <Box sx={{ mx: { xs: -2, sm: -3 } }}>
          <Image src={BannerImg} alt="" priority />
        </Box>
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box my={4}>
            <Typography variant="h4">Rainbow Gala 27 地圖</Typography>
          </Box>
          <Typography variant="body1">
            Rainbow Gala 27 線上販售區，請點擊地圖，進入相應的樓層和分區！
          </Typography>
          <Typography variant="body1">
            可以根據「日期」，「樓層」和「顏色」尋找到特定的攤位哦！
          </Typography>
          <Grid container sx={{ my: 3 }} columnSpacing={2}>
            <Grid item xs={3}>
              <Link
                href={APP_ROUTES.EVENT_RAINBOW_GALA({
                  rg27_floor: "day1-3f",
                })}
                passHref
                scroll={false}
              >
                <Button
                  color="inherit"
                  fullWidth
                  size="large"
                  variant="contained"
                  sx={{
                    color: "#ffffff",
                    bgcolor: "#6bc8e6",
                    textAlign: "center",
                    ":hover": { color: "#ffffff", bgcolor: "#6bc8e6a0" },
                  }}
                >
                  Day1 3/F
                </Button>
              </Link>
            </Grid>
            <Grid item xs={3}>
              <Link
                href={APP_ROUTES.EVENT_RAINBOW_GALA({
                  rg27_floor: "day1-6f",
                })}
                passHref
                scroll={false}
              >
                <Button
                  color="inherit"
                  fullWidth
                  size="large"
                  variant="contained"
                  sx={{
                    color: "#ffffff",
                    bgcolor: "#6bc8e6",
                    textAlign: "center",
                    ":hover": { color: "#ffffff", bgcolor: "#6bc8e6a0" },
                  }}
                >
                  Day1 6/F
                </Button>
              </Link>
            </Grid>
            <Grid item xs={3}>
              <Link
                href={APP_ROUTES.EVENT_RAINBOW_GALA({
                  rg27_floor: "day2-3f",
                })}
                passHref
                scroll={false}
              >
                <Button
                  color="inherit"
                  fullWidth
                  size="large"
                  variant="contained"
                  sx={{
                    color: "#ffffff",
                    bgcolor: "#e7a672",
                    textAlign: "center",
                    ":hover": { color: "#ffffff", bgcolor: "#e7a672a0" },
                  }}
                >
                  Day2 3/F
                </Button>
              </Link>
            </Grid>
            <Grid item xs={3}>
              <Link
                href={APP_ROUTES.EVENT_RAINBOW_GALA({
                  rg27_floor: "day2-6f",
                })}
                passHref
                scroll={false}
              >
                <Button
                  color="inherit"
                  fullWidth
                  size="large"
                  variant="contained"
                  sx={{
                    color: "#ffffff",
                    bgcolor: "#e7a672",
                    textAlign: "center",
                    ":hover": { color: "#ffffff", bgcolor: "#e7a672a0" },
                  }}
                >
                  Day2 6/F
                </Button>
              </Link>
            </Grid>
          </Grid>
          <Box
            sx={{
              position: "relative",
              height: width,
            }}
          >
            <ImageMapper
              src={FLOOR[rg27_floor || "day1-3f"].map.src}
              map={{
                name: "map",
                areas: toArray(
                  map(OVERLAY_MAP, (x) => ({
                    ...x,
                    href: APP_ROUTES.EVENT_RAINBOW_GALA({
                      rg27_floor,
                      rg27_color: x.name.toLowerCase(),
                    }),
                  }))
                ),
              }}
              imgWidth={1200}
              width={width}
              active
              onClick={(area) =>
                router.push(area.href, undefined, { scroll: false })
              }
            />
          </Box>
        </Box>

        <Box>
          <Box display="flex" flexDirection="column" alignItems="center" py={4}>
            <Typography variant="h5">線上攤位</Typography>
            <Typography variant="h4">
              {getShopSectionTitle(rg27_floor, rg27_color)}
            </Typography>
          </Box>
          <Box justifyContent="center" my={2}>
            <ItemImageList
              items={rg27_shops}
              component={RgShopItem}
              cols={useBreakpointValue({ xs: 2, sm: 2, md: 3, lg: 4 })}
            />
          </Box>
          <Box my={2}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box my={2}>
                <Typography>
                  Rainbow Gala 27 線上販售區攤位現已接受登記!
                </Typography>
              </Box>
              <Button
                variant="outlined"
                color="inherit"
                href={APP_ROUTES.DASHBOARD_REGISTER_RG}
              >
                你是攤主嗎？立即登記
              </Button>
            </Box>
          </Box>
        </Box>

        {rg27_products.length >= 0 && (
          <Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              py={4}
            >
              <Typography variant="h4">Rainbow Gala 27</Typography>
              <Typography variant="h4">線上販售區商品</Typography>
            </Box>
            <ItemGrid
              items={rg27_products}
              component={ProductSummaryItem}
              columnSpacing={2}
              rowSpacing={2}
            />
            <Link
              href={APP_ROUTES.EVENT_RAINBOW_GALA_PRODUCTS({ page: 2 })}
              passHref
            >
              <Button fullWidth color="inherit">
                顯示更多...
              </Button>
            </Link>
          </Box>
        )}
        <Box pb={8} />
      </Container>
    </Box>
  );
};

export default RainbowGalaView;

import React, { useCallback, useEffect, useRef, useState } from "react";

import Image from "next/image";

import { Box, Container, Tab, Tabs, Typography } from "@mui/material";

import EventBanner from "../../../public/banners/tinhong_banner.jpg";
import ItemImageList from "../../components/catalog/ItemImageList";
import ListProductItem from "./components/ListProductItem";
import MainProductItem from "./components/MainProductItem";

const ANCHOR_OFFSET = -120;

const EventTinhongView = ({ products, containerMaxWidth }) => {
  const [tabValue, setTabValue] = useState("d7");
  const refD7 = useRef();
  const refD = useRef();
  const refAmoeba = useRef();
  const refs = {
    d7: refD7,
    "d-series": refD,
    "amoeba-series": refAmoeba,
  };

  const handleScroll = useCallback(() => {
    const refAmoebaPos =
      refAmoeba.current?.offsetTop === undefined
        ? 100000
        : refAmoeba.current?.offsetTop;
    const refDPos =
      refD.current?.offsetTop === undefined ? 100000 : refD.current?.offsetTop;

    if (window.pageYOffset >= refAmoebaPos + ANCHOR_OFFSET) {
      setTabValue("amoeba-series");
      return;
    }

    if (window.pageYOffset >= refDPos + ANCHOR_OFFSET) {
      setTabValue("d-series");
      return;
    }

    setTabValue("d7");
  }, [refD, refAmoeba]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleChange = (e, v) => {
    setTabValue(v);
    window.scrollTo({
      top: (refs[v]?.current?.offsetTop ?? 0) + ANCHOR_OFFSET,
      behavior: "smooth",
    });
  };

  return (
    <Box>
      <Container maxWidth={containerMaxWidth}>
        <Box sx={{ lineHeight: 0, mx: { xs: -2, sm: -3 } }}>
          <Image src={EventBanner} alt="" />
        </Box>
      </Container>
      <>
        <Box
          sx={{
            width: "100%",
            zIndex: 100,
            position: "sticky",
            top: 72,
            backgroundColor: "white",
          }}
        >
          <Container maxWidth="md">
            <Tabs
              value={tabValue}
              id="series_tab"
              onChange={handleChange}
              variant="fullWidth"
            >
              <Tab label="最新作品" value="d7" wrapped />
              <Tab label="D系列" value="d-series" wrapped />
              <Tab label="愛情阿米巴系列" value="amoeba-series" wrapped />
            </Tabs>
          </Container>
        </Box>
        <div ref={refD7} />
        <Box bgcolor="#362130">
          <Container maxWidth="md">
            <Box
              sx={{
                py: 6,
                width: "100%",
              }}
              display="flex"
              justifyContent="center"
            >
              <MainProductItem item={products.s1[0]} />
            </Box>
          </Container>
        </Box>
        <Box py={2}>
          <Typography display="block" variant="caption" align="center">
            注意：由於部分書籍可能會缺貨，印刷補貨需時，所以在此訂購商品後需要等候一段時間，到貨後官方會立即寄出！敬請體諒。
          </Typography>
        </Box>
        <div ref={refD} />
        <Box width="100%" bgcolor="white" py={4}>
          <Container maxWidth="md">
            <Typography variant="h4" align="center">
              D系列（D01~D06）
            </Typography>
          </Container>
        </Box>
        <ItemImageList
          items={products.s2}
          component={ListProductItem}
          cols={1}
          sx={{
            my: 0,
            "& li:nth-child(odd)": {
              bgcolor: "white",
            },
          }}
        />
        <div ref={refAmoeba} />
        <Box width="100%" bgcolor="white" py={4}>
          <Container maxWidth="md">
            <Typography variant="h4" align="center">
              愛情阿米巴系列
            </Typography>
          </Container>
        </Box>
        <ItemImageList
          items={products.s3}
          component={ListProductItem}
          cols={1}
          sx={{
            my: 0,
            "& li:nth-child(odd)": {
              bgcolor: "white",
            },
          }}
        />
      </>
    </Box>
  );
};

export default EventTinhongView;

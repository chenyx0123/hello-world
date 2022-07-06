import React, { useMemo, useRef } from "react";

import { Box, Button, GlobalStyles, IconButton } from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import map from "lodash/map";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import MainCarouselItem from "../MainCarouselItem";

const MainCarousel = ({ items, carouselProps, sx, ...props }) => {
  const imageGallary = useRef();

  const stopAutoPlay = useMemo(() => {
    imageGallary.current?.pause();
  }, [imageGallary]);
  const startAutoPlay = useMemo(() => {
    imageGallary.current?.play();
  }, [imageGallary]);

  return (
    <Box sx={{ ...sx }} {...props}>
      <GlobalStyles
        styles={(theme) => ({
          ".main-carousel": {
            [theme.breakpoints.up("lg")]: {
              overflow: "hidden",
            },
          },
          ".image-gallery-slides": {
            [theme.breakpoints.up("lg")]: {
              transform: "translateX(20%)",
              overflow: "visible",
            },
          },
          ".image-gallery-slide": {
            [theme.breakpoints.up("lg")]: {
              display: "block !important",
              transition: "opacity !important",
              paddingLeft: theme.spacing(2),
              paddingRight: theme.spacing(2),
              width: "60%",
              opacity: 0,
            },
          },
          ".left,.right,": {
            [theme.breakpoints.up("lg")]: {
              animation: "opacity-transform-side ease-out 450ms",
              opacity: 0.5,
            },
          },
          ".center": {
            [theme.breakpoints.up("lg")]: {
              animation: "opacity-transform-center ease-out 450ms",
              opacity: 1,
            },
          },
        })}
      />
      <ImageGallery
        ref={imageGallary}
        items={map(items, ({ src, href }) => ({
          original: src,
          href,
        }))}
        additionalClass="main-carousel"
        autoPlay={process.env.NODE_ENV === "production"}
        infinite
        onMouseLeave={startAutoPlay}
        onMouseOver={stopAutoPlay}
        onTouchStart={stopAutoPlay}
        renderItem={(p) => <MainCarouselItem {...p} />}
        renderLeftNav={(onClick, disabled) => (
          <IconButton
            color="primary"
            disabled={disabled}
            disableRipple
            onClick={onClick}
            sx={{
              borderRadius: 0,
              bgcolor: "#ffffff80",
              height: { xs: "64px", lg: "100%" },
              justifyContent: "flex-end",
              left: 0,
              minWidth: "24px",
              position: "absolute",
              px: 0,
              top: "50%",
              transform: "translateY(-50%)",
              width: { xs: undefined, lg: "calc(20% + 12px)" },
              zIndex: "1",
              "&:hover": {
                bgcolor: "#ffffff40",
              },
            }}
            {...props}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
        )}
        renderRightNav={(onClick, disabled) => (
          <Button
            color="primary"
            {...props}
            disabled={disabled}
            disableRipple
            onClick={onClick}
            sx={{
              borderRadius: 0,
              bgcolor: "#ffffff80",
              height: { xs: "64px", lg: "100%" },
              justifyContent: "flex-start",
              minWidth: "24px",
              position: "absolute",
              px: 0,
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              width: { xs: undefined, lg: "calc(20% + 12px)" },
              zIndex: "1",
              "&:hover": {
                bgcolor: "#ffffff40",
              },
            }}
          >
            <ArrowForwardIosIcon />
          </Button>
        )}
        showFullscreenButton={false}
        showNav
        showPlayButton={false}
        showThumbnails={false}
        slideInterval={10000}
        {...carouselProps}
      />
    </Box>
  );
};

export default MainCarousel;

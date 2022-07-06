import React, { useRef, useState } from "react";

import { Box } from "@mui/material";

import map from "lodash/map";
import { getImageUrl } from "market-webapp-commons";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import ImageCarouselModal from "./ImageCarouselModal";

const PlaceholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAH0CAYAAAB/+X6sAAABoUlEQVR42u3PAREAAAQEMJKL/nJwW4N1KlMPtIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiMh9C76X3lXQtV/PAAAAAElFTkSuQmCC";

const ImageCarousel = ({ product, sx, ...props }) => {
  const hasImage = product.images && product.images.length > 0;
  const multipleImage = product.images && product.images.length > 1;
  const images = hasImage
    ? map(product.images, (src) => ({
        fullscreen: getImageUrl(src),
        original: getImageUrl(src, {
          w: 700,
          h: 700,
          t: "webp",
          bg: "f5f5f5",
        }),
        thumbnail: getImageUrl(src, {
          w: 200,
          h: 200,
          t: "webp",
          f: "cover",
        }),
      }))
    : [{ original: PlaceholderImage, thumbnail: PlaceholderImage }];

  const imageGallary = useRef();
  const stopAutoPlay = () => {
    imageGallary.current.pause();
  };
  const startAutoPlay = () => {
    imageGallary.current.play();
  };

  const [isGalleryFullScreen, setGalleryFullScreen] = useState(false);

  return (
    <Box
      sx={(theme) => ({
        mx: { xs: -2, sm: 0 },
        "& div.image-gallery": {
          opacity: isGalleryFullScreen ? "0" : "1",
          transition: isGalleryFullScreen ? "opacity .3s" : "",
        },
        "& div.image-gallery-slide-wrapper": {
          backgroundColor: theme.palette.grey["100"],
          height: 0,
          cursor: "zoom-in",
          pt: "100%",
          position: "relative",
          "& div.image-gallery-slides": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            "& div.image-gallery-slide": {
              width: "100%",
              height: "100%",
              "& img.image-gallery-image": {
                width: "100%",
                height: "100%",
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              },
            },
          },
        },
        "& button.image-gallery-thumbnail": {
          width: "100px",
          height: "100px",
          // following prevent placeholder image from exceeding thumbnail container
          "& span.image-gallery-thumbnail-inner": {
            width: "100%",
            height: "100%",
            "& img.image-gallery-thumbnail-image": {
              objectFit: "contain",
              width: "100%",
              height: "100%",
            },
          },
        },
        ...sx,
      })}
      {...props}
    >
      <ImageGallery
        ref={imageGallary}
        items={images}
        lazyLoad
        autoPlay={
          process.env.NODE_ENV === "production" &&
          multipleImage &&
          !isGalleryFullScreen
        }
        infinite={multipleImage}
        slideInterval={7000}
        onMouseLeave={isGalleryFullScreen ? stopAutoPlay : startAutoPlay}
        onMouseOver={stopAutoPlay}
        onTouchStart={stopAutoPlay}
        onThumbnailClick={stopAutoPlay}
        showFullscreenButton={false}
        showNav={false}
        showPlayButton={false}
        showThumbnails={multipleImage}
        thumbnailPosition={multipleImage ? "bottom" : undefined}
        useBrowserFullscreen={false}
        onClick={() => {
          setGalleryFullScreen(true);
        }}
      />
      <ImageCarouselModal
        open={isGalleryFullScreen}
        onClick={() => {
          setGalleryFullScreen(false);
        }}
        src={
          imageGallary?.current
            ? images[multipleImage ? imageGallary.current.getCurrentIndex() : 0]
                .fullscreen
            : PlaceholderImage
        }
      />
    </Box>
  );
};

export default ImageCarousel;

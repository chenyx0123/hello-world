import React, { useState } from "react";

import Link from "next/link";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  IconButton,
  Link as MuiLink,
  Typography,
} from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import {
  APP_ROUTES,
  getImageUrl,
  useCart,
  useRegion,
} from "market-webapp-commons";

const PlaceholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAH0CAYAAAB/+X6sAAABoUlEQVR42u3PAREAAAQEMJKL/nJwW4N1KlMPtIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiMh9C76X3lXQtV/PAAAAAElFTkSuQmCC";

const FlipIndicator =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><defs><clipPath id="be121c46-5017-4662-b892-9d7a70ce652d" transform="translate(-9.3 -9.26)"><path d="M32,16,16,32a0,0,0,0,1,0,0,6.13,6.13,0,0,0,1.2-2.52,13.09,13.09,0,0,0,.31-1.75c.07-.69.12-1.38.14-2.07s0-1.09,0-1.64c0-1.1,0-2.21,0-3.32,0-.51,0-1,0-1.53s.05-.79.07-1.18c0-.13,0-.15.15-.15.59,0,1.18-.08,1.76-.09l4.27,0q1.08,0,2.16-.06a18.8,18.8,0,0,0,2.59-.27,8.37,8.37,0,0,0,2.07-.62,4.91,4.91,0,0,0,1.11-.69Z" style="fill:none"/></clipPath></defs><g style="isolation:isolate"><g id="ff5e9e83-7cdd-47f0-bf8b-fb3486b4da5c" data-name="Layer 1"><image width="93" height="93" transform="translate(2.58 2.62) scale(0.24)" xlink:href="data:image/png;base64,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" style="mix-blend-mode:multiply;opacity:0.5"/><g style="clip-path:url(%23be121c46-5017-4662-b892-9d7a70ce652d)"><image width="98" height="99" transform="translate(-0.02 -0.22) scale(0.24)" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABjCAYAAABg+dWrAAAACXBIWXMAAC4jAAAuIwF4pT92AAAGf0lEQVR4Xu3d627aMACG4TdOQo4E6CbtPnb/t7DexbSq0qZq1Q7SVLwf1K0xBhJwEof4k1AhhIP8YDs21ImklITs5/7+Xn7+/Dk6t5/LiHM7zC339/cS4MuXL4N+QgOEFoWg8u3bt8EwAsRrdAQpJWmaIqXk4eFhEIwAwSHCYrHg48ePRNGum3h8fOwdY/YQNoQPHz4QRdHbBeD79++9YswawkTIsuwAYSiM2UKYCHmec3d3Z0UQ4r2Ynp6eesGYJYSJUBQFm83mJIK6HkURP3/+dI4xOwgdIYoiiqJgvV6fRdCbKIDn52enGLOCUAhSSoQQ5HneCcHE+PXrlzOM2UDoCHEck+c5q9XqIgQd4/fv304wZgFhIhRFQdM0VoC2CHoH/vfv36sxbh7ChrBcLq0IemG3QdDv+/fv31UYybkdphwdIUkSiqKgruurEWz7Amy3WymEuGjW9mYhTISyLKmqyjmC2qb+SillpHbqkJtsmkyEqqoGQVCRF3zJc3MQJkJd15Rl2TuCAdG5z7gpCB0hTVOWyyVFUQyOsN1ugW5HU9EFtcjL6CPmsizJsowsy0ZBkFIipeTl5QUpJWVZnu0zbqJG6AhJkpDn+egIqlZAuxH45CF0hDiOaZqGxWIxOoK6rnJubmrSECbCarXyDkG/fmrWdrIQJsJ6vbYimIU9BkIbjEl21jaENE2tBS1E+7mjYwhxHO/tC5ch6GmaZq8Dn1yN0BGEEJNEgMM+Y1IQ5tHRZrOZJIKKPs6YDIQ5Yp5qTQD23gsgYSKTfuaIeb1ekySJUwS9Mx4CIUkSkuSt+KX3EG0Ruh6iqtgQdAD12n0gaBB+1wgTYbPZvBXUtQjmY4dAEEIQx/EBAhB520fMCQE8rRF9IejbdAT9PpUhEcDDo6Y5IoBnNUJHWCwWbDabvULrC0GHGAMBPILwFUGfzu4LATyB0BE+ffoE4CWCuu0aATyA0Kct0jQF2BtQjYWgF3bfCDAyhDl3ZP4sHvYLUt0eAkHvE/pGgBEhjiEI8X4gZxbcrSLASIevpxBOFfbQCPr1Y3GBACNAmF/qqH8QsSGojIWgb7PFFQIM3DSZCHd3dwghjtYEvQBVk9UFoe9ZVFcIMGCNCAinMwiE+aWOGqy1RdBv+4CgXsMVAgzQNNm+T4jj+CoEVdBq29AICsAVAvQM0RZBb3rOIZjNlImgA6jX9h0BeoQwEVarlTMEFf3T3zeC6z7BTC8QNoQkSZwgmI/Vp8j1TAkBeoDoC0HfZj526gjgGMJEaJqmFwTzefRMEQEcQtgQ0jS1Ihwr7K4IZm14eXlBvYcpIYAjiC5HR30hqIJVk3RTQgAHEL4gKADg7T91bPf7iABXjqzNL3XGRthut281wXa/rwhwBYQ5ld00TUC4Ihc1TeYEXl3Xg3fMZmds6xNMGFt8QIALIGwIWZZdjKBf1DYXCOcAwB8E6Ng0mQhVVZHn+QGCXmhjIZzD8AkBOkDoCEIIyrKkKAorglnAAeF8WjVNNoSyLCeJoCYKfUKAFhAmQl3Xk64JAFmWAXiDAGeaJn2wJoSgqiqvEGyXY1HPq2qETwhwAkJHiOPYu+bIVhuORT2vaop8Q4AjTZNZE4qioKqqAwQh2s2imgVsQ1DPpTInBLBAmAh5nlPXtRME26e/bwQh/Do6Opa9d2YiZFlG0zRXI+jb9McGhPe8vTsTYbFYsFqtnCOEmmBPAvsIUbRrT9frtRVBL1i4HEHdpzJnBIDERFArBPeNoEPMHQFea4RCyLLMCwRz6vrWEQCEOs3XYrEYpDnqimCOom2ZOgLwvl7T169f5dgI5iffRLHlFhCA/YWzHh4eZEAYJwcrmD0+PsqAMHysS8mpkxoFhOFydE2/Hz9+SAgIQ+Xk4opPT0/SLPCA0E/OrnKplscMCP3mLATsVmQcGyGK/J/KviatIGC3vnVA6C+tIWB3hikbghDdZ1EDwn46QcBurVIF0TfCLfcJZjpDwO4MUwHBbS6CAJDGA10jCCFI03QWCNDhl35mIq1nDgjX5+IaobLdbqVLhDk1R3ourhEqQohIR9AhICC0zdUQAGmaRgoBCAgXxAkEQJ7nEQSES+MMAng7zVdA6B6nEABVVe3VDFsCwmGcQwAsl8ujhRkQ7OkFAg5PZgQB4VR6g4B9jIBwOlcP6Nrk+flZBoTTGQQC4M+fP3Ju0xZdMhjEa/QXCwhaeu0jLImMvyGv+Q/cmNF1JFrK2wAAAABJRU5ErkJggg=="/></g></g></g></svg>';

const OverlayTagSx = {
  position: "absolute",
  bottom: 0,
  left: 0,
  minWidth: "96px",
  width: "40%",
  maxWidth: "120px",
  minHeight: "24px",
  height: "10%",
  maxHeight: "30px",
  borderBottomLeftRadius: 15,
  borderTopRightRadius: 15,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "& div": {
    color: "white",
    margin: "auto",
  },
};

const ProductSummaryItem = ({ item, sx, ...props }) => {
  const hasMultipleImage = item?.images?.length > 1;

  const [imageSrc, setImageSrc] = React.useState(undefined);

  const { addToCart } = useCart();

  const getOriginalPrice = (val) => {
    if (val && val.type === "variable") {
      if (val.variations.find((v) => v.sale_price !== null)) {
        return `${val.variations.reduce(
          (min, v) => (v.regular_price < min ? v.regular_price : min),
          val.variations[0].regular_price
        )} - ${val.variations.reduce(
          (max, v) => (v.regular_price > max ? v.regular_price : max),
          val.variations[0].regular_price
        )}`;
      }
    } else if (val && val.sale_price) {
      return val.regular_price;
    }
    return null;
  };

  const [originalPrice] = useState(getOriginalPrice(item));
  const { toLocalCurrency } = useRegion();
  return (
    <Card
      elevation={0}
      sx={{
        bgcolor: "#00000000",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        ...sx,
      }}
      {...props}
    >
      <Link href={APP_ROUTES.PRODUCT(item.id)} passHref>
        <MuiLink sx={{ display: "block", position: "relative" }}>
          <Box
            sx={{
              width: "100%",
              pb: "100%",
              position: "relative",
              "&::after": {
                display: hasMultipleImage ? "block" : "none",
                content: `url('${FlipIndicator}')`,
                transform: "translate(20%,20%)",
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "24px",
                height: "24px",
                zIndex: 100,
              },
            }}
          >
            <img
              alt=""
              className="lazyload"
              data-src={
                item?.images?.[0]
                  ? getImageUrl(item?.images?.[0], {
                      w: 500,
                      h: 500,
                      t: "webp",
                    })
                  : PlaceholderImage
              }
              src={
                imageSrc
                  ? getImageUrl(imageSrc, {
                      w: 500,
                      h: 500,
                      t: "webp",
                    })
                  : imageSrc
              }
              onBlur={
                hasMultipleImage ? () => setImageSrc(item.images[0]) : undefined
              }
              onFocus={
                hasMultipleImage ? () => setImageSrc(item.images[1]) : undefined
              }
              onMouseLeave={
                hasMultipleImage ? () => setImageSrc(item.images[0]) : undefined
              }
              onMouseOver={
                hasMultipleImage ? () => setImageSrc(item.images[1]) : undefined
              }
              style={{
                borderRadius: 16,
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          {item.stock_status !== "instock" && (
            <Box sx={OverlayTagSx} backgroundColor="#80808098">
              <div>售罄</div>
            </Box>
          )}
          {item.stock_status === "instock" && item.virtual && (
            <Box sx={OverlayTagSx} backgroundColor="#FFA50098">
              <div>虛擬商品</div>
            </Box>
          )}
          {item.stock_status === "instock" && item.distributor_service && (
            <Box sx={OverlayTagSx} backgroundColor="#2196f398">
              <div>代理商品</div>
            </Box>
          )}
        </MuiLink>
      </Link>
      <CardContent
        align="left"
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          py: 1,
          px: 0,
          "&:last-child": { pb: 0 },
        }}
      >
        <Link href={APP_ROUTES.PRODUCT(item.id)} passHref>
          <MuiLink underline="none" sx={{ flexGrow: 1 }}>
            <Typography
              color="textPrimary"
              display="block"
              variant="subtitle1"
              sx={{
                lineHeight: "1.2em",
                fontWeight: 600,
                maxHeight: "2.4em",
                overflow: "hidden",
              }}
            >
              {item.name}
            </Typography>
          </MuiLink>
        </Link>
        {item.shop && (
          <Link href={APP_ROUTES.SHOP(item.shop.id)} passHref>
            <MuiLink underline="none" sx={{ display: "block", py: 0.5 }}>
              <Box display="flex" alignItems="center" columnGap={0.5}>
                {item.shop.main_image && (
                  <Avatar
                    sx={(theme) => ({
                      display: "inline-block",
                      width: theme.spacing(2),
                      height: theme.spacing(2),
                    })}
                    src={getImageUrl(item.shop.main_image, {
                      w: 24,
                      h: 24,
                      t: "webp",
                      f: "cover",
                    })}
                  />
                )}
                <Typography
                  color="textPrimary"
                  display="inline"
                  variant="body2"
                  noWrap
                  sx={{ lineHeight: "1em" }}
                >
                  {item.shop.name}
                </Typography>
              </Box>
            </MuiLink>
          </Link>
        )}
        <Box
          sx={{
            alignItems: "flex-end",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ flexDirection: "column", justifyContent: "center" }}>
            {originalPrice && (
              <Typography
                color="textSecondary"
                display="block"
                fontSize="0.7rem"
                underline="none"
                variant="caption"
                sx={{
                  lineHeight: "1em",
                  textDecoration: "line-through",
                }}
              >
                {originalPrice} 珍珠 / {toLocalCurrency(originalPrice)}{" "}
              </Typography>
            )}
            <Typography
              color="secondary"
              display="block"
              underline="none"
              variant="caption"
            >
              {item.price_text} 珍珠
            </Typography>
            <Typography
              color="grey.700"
              display="block"
              underline="none"
              variant="caption"
              fontSize="0.7rem"
              sx={{
                lineHeight: "1em",
              }}
            >
              {toLocalCurrency(item.price_text)}
            </Typography>
          </Box>
          <Box alignItems="center" justifyContent="center" display="flex">
            <IconButton
              size="small"
              href={
                item.type === "variable"
                  ? APP_ROUTES.PRODUCT(item.id)
                  : undefined
              }
              onClick={
                item.type === "variable"
                  ? undefined
                  : (data) => addToCart({ productId: item.id, ...data })
              }
              sx={(theme) => ({ color: theme.palette.grey["500"], p: 0.25 })}
            >
              {item.type === "variable" ? (
                <MoreHorizIcon fontSize="tiny" />
              ) : (
                <AddShoppingCartIcon fontSize="tiny" />
              )}
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductSummaryItem;

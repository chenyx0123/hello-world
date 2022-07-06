import React from "react";

import Link from "next/link";

import { Avatar, Box, Link as MuiLink, Typography } from "@mui/material";

import { APP_ROUTES, getImageUrl } from "market-webapp-commons";

import ContactButton from "../../../../components/ContactButton";

const Heading = ({ product, ...props }) => (
  <Box {...props}>
    <Typography variant="h5">{product.name}</Typography>
    <Box display="flex" alignItems="center" justifyContent="flex-start">
      <Link href={APP_ROUTES.SHOP(product.shop.id)} passHref>
        <MuiLink underline="none">
          <Box display="flex" alignItems="center" columnGap={1}>
            {product.shop.main_image && (
              <Avatar
                sx={(theme) => ({
                  display: "inline-block",
                  width: theme.spacing(3),
                  height: theme.spacing(3),
                })}
                src={getImageUrl(product.shop.main_image, {
                  w: 24,
                  h: 24,
                  t: "webp",
                  f: "cover",
                })}
              />
            )}
            <Typography color="textPrimary" display="inline" variant="body2">
              {product.shop.name}
            </Typography>
          </Box>
        </MuiLink>
      </Link>
      <ContactButton
        contact={product.distributor_service ? { id: 19 } : product.shop.owner}
      />
    </Box>
  </Box>
);

export default Heading;

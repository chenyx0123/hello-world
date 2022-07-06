import React from "react";

import Link from "next/link";

import { Box, Fab } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import { APP_ROUTES, withAuth } from "market-webapp-commons";

import DownloadImageFab from "./DownloadImageFab";

const EditFab = ({ product, ...props }) => (
  <Box {...props}>
    <Link href={APP_ROUTES.DASHBOARD_PRODUCT(product.id)} passHref>
      <Fab color="primary" size="small">
        <EditIcon />
      </Fab>
    </Link>
  </Box>
);

const DownloadShippingListFab = ({ product, ...props }) => (
  <Box {...props}>
    <Link href={APP_ROUTES.DASHBOARD_SHIPMENT_PRODUCT(product.id)} passHref>
      <Fab color="primary" size="small">
        <LocalShippingIcon />
      </Fab>
    </Link>
  </Box>
);

const ManagementFabs = ({ product, user }) => {
  const isAdmin = user?.roles?.includes("administrator");
  const isOwnerOrAdmin =
    isAdmin || (user?.id && user?.id === product?.owner?.id);
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        zIndex: 3,
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        rowGap: 2,
      })}
    >
      {isOwnerOrAdmin && <EditFab product={product} />}
      {isOwnerOrAdmin && <DownloadShippingListFab product={product} />}
      {isAdmin && <DownloadImageFab product={product} />}
    </Box>
  );
};

export default withAuth(ManagementFabs);

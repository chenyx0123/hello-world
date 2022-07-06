import React from "react";

import Link from "next/link";

import { Box, Fab } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import { APP_ROUTES, withAuth } from "market-webapp-commons";

import DownloadImageFab from "./DownloadImageFab";

const EditFab = ({ shop, ...props }) => (
  <Box {...props}>
    <Link href={APP_ROUTES.DASHBOARD_SHOP} passHref>
      <Fab color="primary" size="small">
        <EditIcon />
      </Fab>
    </Link>
  </Box>
);

const DownloadShippingListFab = ({ shop, ...props }) => (
  <Box {...props}>
    <Link href={APP_ROUTES.DASHBOARD_SHIPMENT_SHOP(shop.id)} passHref>
      <Fab color="primary" size="small">
        <LocalShippingIcon />
      </Fab>
    </Link>
  </Box>
);

const ManagementFabs = ({ shop, user }) => {
  const isAdmin = user?.roles?.includes("administrator");
  const isOwnerOrAdmin = isAdmin || (user?.id && user?.id === shop?.owner?.id);
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
      {isOwnerOrAdmin && <EditFab shop={shop} />}
      {isOwnerOrAdmin && <DownloadShippingListFab shop={shop} />}
      {isAdmin && <DownloadImageFab shop={shop} />}
    </Box>
  );
};

export default withAuth(ManagementFabs);

import React from "react";

import { Box, Fab } from "@mui/material";

import ArchiveIcon from "@mui/icons-material/Archive";

import { withDownloadImagesAsZipContext } from "../../../../contexts/DownloadImagesAsZipContext";

const DownloadImageFab = ({
  product,
  downloadProductImagesAsZip,
  ...props
}) => (
  <Box {...props}>
    <Fab
      onClick={() => downloadProductImagesAsZip(product?.id)}
      color="primary"
      size="small"
    >
      <ArchiveIcon />
    </Fab>
  </Box>
);

export default withDownloadImagesAsZipContext(DownloadImageFab);

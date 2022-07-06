import React from "react";

import { Box, Typography } from "@mui/material";

export default ({ label, required, error, ...props }) => (
  <Box {...props}>
    <Typography color="textPrimary" variant="subtitle2" display="inline">
      {label}
    </Typography>
    {required && (
      <Typography color="error" variant="subtitle2" display="inline">
        {" "}
        *
      </Typography>
    )}
    {error && (
      <Typography color="error" variant="subtitle2" display="inline">
        {" "}
        {error}
      </Typography>
    )}
  </Box>
);

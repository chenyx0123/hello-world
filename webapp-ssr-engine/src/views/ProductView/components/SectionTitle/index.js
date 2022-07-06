import React from "react";

import { Box, Typography, useTheme } from "@mui/material";

const SectionTitle = ({ title, color, sx, ...props }) => {
  const theme = useTheme();
  const colors = {
    textPrimary: {
      color: theme.palette.text.primary,
      bgcolor: theme.palette.grey[200],
    },
    textSecondary: {
      color: theme.palette.text.secondary,
      bgcolor: theme.palette.grey[300],
    },
    primary: {
      color: theme.palette.primary.contrastText,
      bgcolor: theme.palette.primary.main,
    },
    secondary: {
      color: theme.palette.secondary.contrastText,
      bgcolor: theme.palette.secondary.light,
    },
  };
  return (
    <Box
      sx={{ px: 1, py: 0.5, ...sx }}
      {...(colors[color] || colors.textPrimary)}
      {...props}
    >
      <Typography noWrap variant="subtitle1">
        {title}
      </Typography>
    </Box>
  );
};
export default SectionTitle;

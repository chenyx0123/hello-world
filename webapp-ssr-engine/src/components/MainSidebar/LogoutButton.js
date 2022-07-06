import React from "react";

import { Button, Typography } from "@mui/material";

import LogoutIcon from "@mui/icons-material/Logout";

import { APP_ROUTES, withAuth } from "market-webapp-commons";

const LogoutButton = ({ logout, onClose }) => (
  <Button
    size="large"
    onClick={() => {
      if (logout) logout({ redirect: APP_ROUTES.HOME });
      if (onClose) onClose();
    }}
    disableRipple
    startIcon={<LogoutIcon />}
    sx={(theme) => ({
      color: theme.palette.text.secondary,
      justifyContent: "flex-start",
      px: 2,
      py: 1.5,
      width: "100%",
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
    })}
  >
    <Typography color="textSecondary" variant="body1">
      登出
    </Typography>
  </Button>
);

export default withAuth(LogoutButton);

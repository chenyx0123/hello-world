import React from "react";

import Link from "next/link";

import { Box, Button, IconButton } from "@mui/material";

import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";

import { APP_ROUTES, withAuth } from "market-webapp-commons";

const ContactButton = ({
  contact,
  user,
  isAuthenticated,
  isInitialized,
  isButton,
  ...props
}) => {
  const href =
    isAuthenticated && isInitialized
      ? APP_ROUTES.CHAT(contact.id)
      : APP_ROUTES.LOGIN(APP_ROUTES.CHAT(contact.id));
  return (
    <Box {...props}>
      {!isButton && (
        <Link href={href} passHref>
          <IconButton
            variant="text"
            color="primary"
            disabled={contact.id === user.id}
          >
            <SmsOutlinedIcon />
          </IconButton>
        </Link>
      )}
      {isButton && (
        <Link href={href} passHref>
          <Button
            variant="outlined"
            size="large"
            endIcon={<SmsOutlinedIcon />}
            color="primary"
            disabled={contact.id === user.id}
          >
            聯絡攤主
          </Button>
        </Link>
      )}
    </Box>
  );
};

export default withAuth(ContactButton);

import React from "react";

import Link from "next/link";

import { IconButton } from "@mui/material";

import ChatIcon from "@mui/icons-material/Chat";

import { APP_ROUTES } from "market-webapp-commons";

const ChatButton = () => (
  <Link href={APP_ROUTES.CHATS} passHref>
    <IconButton color="inherit" size="small">
      <ChatIcon />
    </IconButton>
  </Link>
);

export default ChatButton;

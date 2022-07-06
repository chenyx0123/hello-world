import React from "react";

import Link from "next/link";
import { withRouter } from "next/router";

import { Button } from "@mui/material";

import LoginIcon from "@mui/icons-material/Login";

import { APP_ROUTES } from "market-webapp-commons";

const LoginButton = ({ router }) => (
  <Link href={APP_ROUTES.LOGIN(router.asPath)} passHref>
    <Button color="inherit" size="small" startIcon={<LoginIcon />}>
      登入
    </Button>
  </Link>
);

export default withRouter(LoginButton);

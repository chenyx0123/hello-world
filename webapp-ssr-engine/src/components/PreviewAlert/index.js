import React from "react";

import getConfig from "next/config";
import Link from "next/link";

import { Alert, Link as MuiLink } from "@mui/material";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig() ?? {};

const NEXT_PUBLIC_CANONICAL_DOMAIN_NAME =
  publicRuntimeConfig?.NEXT_PUBLIC_CANONICAL_DOMAIN_NAME ??
  serverRuntimeConfig?.NEXT_PUBLIC_CANONICAL_DOMAIN_NAME ??
  process.env.NEXT_PUBLIC_CANONICAL_DOMAIN_NAME;

const PreviewAlert = ({ path }) => (
  <Alert
    severity="warning"
    sx={{
      flexDirection: "row",
      justifyContent: "center",
      textAlign: "center",
    }}
  >
    此網頁為預覽頁，公開後網址為{" "}
    <Link href={path} passHref>
      <MuiLink>
        https://{NEXT_PUBLIC_CANONICAL_DOMAIN_NAME}
        {path}
      </MuiLink>
    </Link>
  </Alert>
);

export default PreviewAlert;

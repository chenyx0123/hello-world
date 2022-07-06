import React, { useEffect } from "react";

import getConfig from "next/config";
import { useRouter } from "next/router";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const RedirectToReact = () => {
  const router = useRouter();
  const canonicalDomainName =
    publicRuntimeConfig?.NEXT_PUBLIC_CANONICAL_DOMAIN_NAME ??
    serverRuntimeConfig?.NEXT_PUBLIC_CANONICAL_DOMAIN_NAME ??
    process.env.NEXT_PUBLIC_CANONICAL_DOMAIN_NAME;

  //! Sometimes there is a bug that back button doesn't work
  useEffect(() => {
    window.location.reload();
  });

  return <div key={`https://${canonicalDomainName}${router.asPath}`} />;
};

export default RedirectToReact;

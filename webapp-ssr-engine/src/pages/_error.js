import React from "react";

import getConfig from "next/config";
import NextErrorComponent from "next/error";
import { withRouter } from "next/router";

import { withAmplitude } from "../contexts/AmplitudeContext";
import ErrorServerMaintenanceView from "../views/ErrorServerMaintenanceView";

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();

const ErrorHandler = withAmplitude(
  withRouter(
    ({ err, hasGetInitialPropsRun, statusCode, amplitude, router }) => {
      if (!hasGetInitialPropsRun && err) {
        // getInitialProps is not called in case of
        // https://github.com/vercel/next.js/issues/8592. As a workaround, we pass
        // err via _app.js so it can be captured
        amplitude.logEvent("/500", {
          ...err,
          asPath: router.asPath,
          statusCode,
        });
      }

      return <ErrorServerMaintenanceView />;
    }
  )
);

ErrorHandler.getInitialProps = async ({ res, err, asPath }) => {
  const errorInitialProps = await NextErrorComponent.getInitialProps({
    res,
    err,
  });

  // Workaround for https://github.com/vercel/next.js/issues/8592, mark when
  // getInitialProps has run
  errorInitialProps.hasGetInitialPropsRun = true;

  const AmplitudeJS = await import("amplitude-js");
  const am = AmplitudeJS.default.getInstance();
  const amplitudeKey =
    publicRuntimeConfig?.NEXT_PUBLIC_AMPLITUDE_KEY ??
    serverRuntimeConfig?.NEXT_PUBLIC_AMPLITUDE_KEY ??
    process.env.NEXT_PUBLIC_AMPLITUDE_KEY;
  am.init(amplitudeKey, undefined, {
    batchEvents: false,
    forceHttps: process.env.NODE_ENV !== "development",
    includeGclid: true,
    includeReferrer: true,
    includeUtm: true,
    logLevel: process.env.NODE_ENV === "development" ? "INFO" : "DISABLE",
  });

  // Running on the server, the response object (`res`) is available.
  //
  // Next.js will pass an err on the server if a page's data fetching methods
  // threw or returned a Promise that rejected
  //
  // Running on the client (browser), Next.js will provide an err if:
  //
  //  - a page's `getInitialProps` threw or returned a Promise that rejected
  //  - an exception was thrown somewhere in the React lifecycle (render,
  //    componentDidMount, etc) that was caught by Next.js's React Error
  //    Boundary. Read more about what types of exceptions are caught by Error
  //    Boundaries: https://reactjs.org/docs/error-boundaries.html

  if (err) {
    am.logEvent("/500", { ...err, asPath });

    return errorInitialProps;
  }

  // If this point is reached, getInitialProps was called without any
  // information about what the error might be. This is unexpected and may
  // indicate a bug introduced in Next.js, so record it in Sentry

  am.logEvent("/500", { asPath });

  return errorInitialProps;
};

export default ErrorHandler;

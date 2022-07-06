import React from "react";

import RedirectToReact from "../../components/RedirectToReact";

export default function Page() {
  return <RedirectToReact key={Date.now()} />;
}

export const getStaticProps = async () => ({
  props: {},
});

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

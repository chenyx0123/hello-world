import React, { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    window.location = "https://market.flyingmilktea.com/product/128718";
  });

  return <div />;
}

export const getServerSideProps = async ({ res }) => {
  res.setHeader("cache-control", "public, max-age=86400");
  return {
    props: {},
  };
};

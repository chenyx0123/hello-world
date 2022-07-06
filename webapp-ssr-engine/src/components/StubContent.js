import React from "react";

import { useRouter } from "next/router";

const StubContent = () => {
  const router = useRouter();

  return <div>{router.asPath}</div>;
};

export default StubContent;

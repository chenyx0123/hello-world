import React, { memo } from "react";

import Image from "next/image";
import Link from "next/link";

import { Link as MuiLink } from "@mui/material";

import isEqual from "lodash/isEqual";

const MainCarouselItem = ({ original, href }) =>
  href ? (
    <Link href={href} passHref>
      <MuiLink>
        <Image src={original} layout="responsive" priority />
      </MuiLink>
    </Link>
  ) : (
    <Image src={original} layout="responsive" priority />
  );

export default memo(MainCarouselItem, isEqual);

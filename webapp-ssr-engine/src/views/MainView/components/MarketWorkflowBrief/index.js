import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Box, Grid, Link as MuiLink } from "@mui/material";

import { APP_ROUTES } from "market-webapp-commons";

import MarketWorkflowMain1Image from "../../../../../public/workflow/workflow-main1.png";
import MarketWorkflowMain2Image from "../../../../../public/workflow/workflow-main2.png";

const MarketWorkflowBrief = ({ items, carouselProps, ...props }) => (
  <Box {...props}>
    <Grid container rowGap={0.5}>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{ position: "relative" }}
        order={{ xs: 1, sm: 2 }}
      >
        <Link href={APP_ROUTES.STATIC_WORKFLOW} passHref>
          <MuiLink underline="none">
            <Image src={MarketWorkflowMain2Image} layout="responsive" />{" "}
          </MuiLink>
        </Link>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{ position: "relative" }}
        order={{ xs: 2, sm: 1 }}
      >
        <Link href={APP_ROUTES.DASHBOARD_INIT} passHref>
          <MuiLink underline="none">
            <Image src={MarketWorkflowMain1Image} layout="responsive" />
          </MuiLink>
        </Link>
      </Grid>
    </Grid>
  </Box>
);

export default MarketWorkflowBrief;

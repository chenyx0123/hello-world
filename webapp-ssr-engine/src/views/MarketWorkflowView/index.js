import React from "react";

import Image from "next/image";

import { Box, Container, Grid } from "@mui/material";

import MarketWorkflowBrief1Image from "../../../public/workflow/workflow-brief1.png";
import MarketWorkflowBrief2Image from "../../../public/workflow/workflow-brief2.png";
import MarketWorkflowP2Image from "../../../public/workflow/workflow-p2.png";
import MarketWorkflowP3Image from "../../../public/workflow/workflow-p3.png";
import MarketWorkflowP4Image from "../../../public/workflow/workflow-p4.png";
import MarketWorkflowP5Image from "../../../public/workflow/workflow-p5.png";
import MarketWorkflowP6Image from "../../../public/workflow/workflow-p6.png";
import MarketWorkflowP7Image from "../../../public/workflow/workflow-p7.png";

const MarketWorkflowView = () => (
  <Container maxWidth="md">
    <Box
      sx={{ display: "flex", flexDirection: "column", mx: { xs: -2, sm: -3 } }}
    >
      <Grid container>
        <Grid item xs={6}>
          <Image src={MarketWorkflowBrief1Image} layout="responsive" priority />
        </Grid>
        <Grid item xs={6}>
          <Image src={MarketWorkflowBrief2Image} layout="responsive" priority />
        </Grid>
      </Grid>
      <Image src={MarketWorkflowP2Image} layout="responsive" priority />
      <Image src={MarketWorkflowP3Image} layout="responsive" priority />
      <Image src={MarketWorkflowP4Image} layout="responsive" />
      <Image src={MarketWorkflowP5Image} layout="responsive" />
      <Image src={MarketWorkflowP6Image} layout="responsive" />
      <Image src={MarketWorkflowP7Image} layout="responsive" />
    </Box>
  </Container>
);

export default MarketWorkflowView;

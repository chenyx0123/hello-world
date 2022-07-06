import React, { useCallback, useEffect, useRef, useState } from "react";

import { Box, Container, Tab, Tabs, Typography } from "@mui/material";

import ItemGrid from "../../components/catalog/ItemGrid";
import ProductSummaryItem from "../../components/catalog/ProductSummaryItem";
import EventDetails from "./components/EventDetails";

const ANCHOR_OFFSET = -120;

const EventSpringfishView = ({ rescuteProducts, terminalGirlProducts }) => {
  const [tabValue, setTabValue] = useState("terminal-girl");
  const refRescute = useRef();
  const refTerminalGirl = useRef();
  const refs = {
    rescute: refRescute,
    "terminal-girl": refTerminalGirl,
  };

  const handleScroll = useCallback(() => {
    const refRescutePos = refRescute.current?.offsetTop ?? 100000;

    if (window.pageYOffset >= refRescutePos + ANCHOR_OFFSET) {
      setTabValue("rescute");
      return;
    }
    setTabValue("terminal-girl");
  }, [refRescute]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleChange = (e, v) => {
    setTabValue(v);
    window.scrollTo({
      top: (refs[v]?.current?.offsetTop ?? 0) + ANCHOR_OFFSET,
      behavior: "smooth",
    });
  };

  return (
    <Box>
      <EventDetails sx={{ bgcolor: "white" }} />
      <>
        <Box
          sx={{
            width: "100%",
            zIndex: 100,
            position: "sticky",
            top: 72,
            backgroundColor: "white",
          }}
        >
          <Container maxWidth="md">
            <Tabs
              value={tabValue}
              id="series_tab"
              onChange={handleChange}
              variant="fullWidth"
            >
              <Tab label="終端少女" value="terminal-girl" wrapped />
              <Tab label="瀕臨絕種團 Rescute" value="rescute" wrapped />
            </Tabs>
          </Container>
        </Box>
        <div ref={refTerminalGirl} />
        <Box width="100%">
          <Container maxWidth="lg">
            <Typography variant="h4" align="center" sx={{ py: 4 }}>
              終端少女
            </Typography>
            <ItemGrid
              items={terminalGirlProducts}
              component={ProductSummaryItem}
              size="large"
              columnSpacing={2}
            />
          </Container>
        </Box>
        <div ref={refRescute} />
        <Box width="100%" bgcolor="white" py={4}>
          <Container maxWidth="lg">
            <Typography variant="h4" align="center" sx={{ py: 4 }}>
              瀕臨絕種團 Rescute
            </Typography>
            <ItemGrid
              items={rescuteProducts}
              component={ProductSummaryItem}
              size="large"
              columnSpacing={2}
              rowSpacing={2}
            />
          </Container>
        </Box>
      </>
    </Box>
  );
};

export default EventSpringfishView;

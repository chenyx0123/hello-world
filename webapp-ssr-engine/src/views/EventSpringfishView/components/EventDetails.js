import React from "react";

import Image from "next/image";

import { Box, Container, Grid, Link, Typography } from "@mui/material";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import EventBanner from "../../../../public/banners/springfish_banner.jpg";

const EventDetails = ({ ...props }) => (
  <Box {...props}>
    <Container maxWidth="lg">
      <Box sx={{ lineHeight: 0, mx: { xs: -2, sm: -3 }, mb: 2 }}>
        <Image src={EventBanner} alt="" />
      </Box>
      <Grid container direction="row">
        <Grid item xs={12} sx={{ wordBreak: "break-word" }}>
          <Typography variant="body1" gutterBottom>
            《終端少女》+《瀕臨絕種團 Rescute》正式登陸飛天奶茶的未來墟！
            <br />
            想看各個繪師大佬們畫出的香香可愛少女，就一定要快點把它們帶回家！
          </Typography>

          <Typography variant="body1">《終端少女》的專頁：</Typography>
          <Typography variant="body1" gutterBottom>
            <Link
              href="https://www.facebook.com/ComputerTerminalGirls"
              target="_blank"
              rel="noopener noreferrer"
            >
              <OpenInNewIcon fontSize="tiny" />
              https://fb.com/ComputerTerminalGirls
            </Link>
          </Typography>
          <Typography variant="body1">
            《瀕臨絕種團 Rescute》的專頁：
          </Typography>
          <Typography variant="body1" gutterBottom>
            <Link
              href="https://www.facebook.com/RESCUTE119"
              target="_blank"
              rel="noopener noreferrer"
            >
              <OpenInNewIcon fontSize="tiny" />
              https://fb.com/RESCUTE119
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default EventDetails;

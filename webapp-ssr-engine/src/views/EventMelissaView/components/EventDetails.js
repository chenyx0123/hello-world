import React from "react";

import Image from "next/image";

import { Box, Container, Grid, Link, Typography } from "@mui/material";

import EventBanner from "../../../../public/banners/melissa_banner.jpg";

const EventDetails = ({ ...props }) => (
  <Box {...props}>
    <Container maxWidth="lg">
      <Box sx={{ lineHeight: 0, mx: { xs: -2, sm: -3 }, mb: 2 }}>
        <Image src={EventBanner} alt="" />
      </Box>
      <Grid container direction="row">
        <Grid item xs={12} sx={{ wordBreak: "break-word" }}>
          <Typography variant="body1" gutterBottom>
            Meniusa的商品特輯誕生！
            <br />
            喜歡Meniusa的商品嗎？現在立即把商品放入購物車吧！
            <br />
            現在購買，還會獲贈官方送出的未來墟特別版明信片兩張~ <br />
            另外，歡迎查看Meniusa的其他創作： <br />
            【Facebook】
            <Link
              href="https://www.facebook.com/meniusa.lau"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://fb.com/meniusa.lau
            </Link>
            <br />
            【Instagram】
            <Link
              href="https://www.instagram.com/neoncpd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.instagram.com/neoncpd/
            </Link>
            <br />
            【Pixiv】
            <Link
              href="https://www.pixiv.net/users/175557"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.pixiv.net/users/175557
            </Link>
            <br />
            【Plurk】
            <Link
              href="https://www.plurk.com/meniusa"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.plurk.com/meniusa
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default EventDetails;

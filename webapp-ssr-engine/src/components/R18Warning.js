import React from "react";

import { Box, Typography } from "@mui/material";

const R18Warning = (props) => (
  <Box {...props}>
    <Typography
      display="block"
      variant="caption"
      color="secondary"
      gutterBottom
    >
      WARNING : THIS ARTICLE CONTAINS MATERIAL WHICH MAY OFFEND AND MAY NOT BE
      DISTRIBUTED, CIRCULATED, SOLD, HIRED, GIVEN, LENT, SHOWN, PLAYED OR
      PROJECTED TO A PERSON UNDER THE AGE OF 18 YEARS.
    </Typography>

    <Typography display="block" variant="caption" color="secondary">
      警告：本物品內容可能令人反感，不可將本物品派發、傳閱、出售、出租、交給或出借予年齡未滿
      18 歲的人士或將本物品向該等人士出示、播放或放映。
    </Typography>
  </Box>
);

export default R18Warning;

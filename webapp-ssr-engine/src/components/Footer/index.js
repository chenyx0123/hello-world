import React from "react";

import {
  Box,
  Container,
  IconButton,
  Link as MuiLink,
  Typography,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const SectionStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  textAlign: "center",
};

const ExternalLink = ({ children, sx, ...props }) => (
  <MuiLink
    color="textSecondary"
    underline="hover"
    sx={{ textAlign: "center", p: 1, ...sx }}
    {...props}
  >
    {children}
  </MuiLink>
);

const VerticalDivider = () => (
  <Typography variant="body2" color="textSecondary" sx={{ py: 1 }}>
    &nbsp;｜&nbsp;
  </Typography>
);

const Footer = () => (
  <footer>
    <Container>
      <Box
        display="flex"
        alignItems="center"
        rowGap={2}
        flexDirection="column"
        flexWrap="nowrap"
        justifyContent="center"
        pb={4}
        pt={2}
      >
        <Box>
          <ExternalLink href="https://www.facebook.com/flyingmilktea/">
            <IconButton size="small">
              <FacebookIcon />
            </IconButton>
          </ExternalLink>

          <ExternalLink href="https://www.instagram.com/flyingmilktea_/">
            <IconButton size="small">
              <InstagramIcon />
            </IconButton>
          </ExternalLink>

          <ExternalLink href="https://twitter.com/flyingmilktea">
            <IconButton size="small">
              <TwitterIcon />
            </IconButton>
          </ExternalLink>
        </Box>

        <Box alignItems="center" flexDirection="column" justifyContent="center">
          <Box sx={SectionStyle}>
            <ExternalLink href="https://www.flyingmilktea.com/about/">
              關於我們
            </ExternalLink>
            <VerticalDivider />
            <ExternalLink href="https://www.flyingmilktea.com/qa/">
              常見問題
            </ExternalLink>
          </Box>

          <Box sx={SectionStyle}>
            <ExternalLink href="https://www.flyingmilktea.com/terms/">
              服務條款
            </ExternalLink>
            <VerticalDivider />
            <ExternalLink href="https://www.flyingmilktea.com/privacy/">
              隱私權聲明
            </ExternalLink>
            <Box sx={{ display: { xs: "none", sm: "inherit" } }}>
              <VerticalDivider />
              <ExternalLink href="https://www.flyingmilktea.com/terms-of-use-charged-service/">
                收費服務及虛擬貨幣（珍珠）使用條款
              </ExternalLink>
            </Box>
          </Box>

          <Box sx={{ ...SectionStyle, display: { xs: "block", sm: "none" } }}>
            <ExternalLink href="https://www.flyingmilktea.com/terms-of-use-charged-service/">
              收費服務及虛擬貨幣（珍珠）使用條款
            </ExternalLink>
          </Box>
        </Box>

        <ExternalLink variant="body2" href="https://www.flyingmilktea.com">
          Copyright © 2019-2021 Flying Milk Tea. All rights reserved.
        </ExternalLink>
      </Box>
    </Container>
  </footer>
);

export default Footer;

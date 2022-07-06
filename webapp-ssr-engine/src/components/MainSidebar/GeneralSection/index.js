/* eslint-disable jsx-a11y/anchor-is-valid */
//* anchors are valid in this file, in dev, replaced with # to prevent accidently linked to production
import React from "react";

import Link from "next/link";

import { Box, Divider, Link as MuiLink } from "@mui/material";

import { styled } from "@mui/material/styles";

import { APP_ROUTES } from "market-webapp-commons";

const MainSidebarLink = styled(MuiLink)(({ theme }) => ({
  display: "block",
  padding: theme.spacing(1.5),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const GeneralSection = () => (
  <Box
    sx={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Box px={1}>
      <Link href={APP_ROUTES.HOME} passHref>
        <MainSidebarLink color="textSecondary" underline="none">
          回到未來墟主頁
        </MainSidebarLink>
      </Link>
      <Link
        href={
          process.env.NODE_ENV === "production"
            ? "https://docs.google.com/forms/d/e/1FAIpQLSfrFVDlty-tEl1auWvh-o8U7_35gmjwHrozlCiPw_qnUp8UBw/viewform"
            : "#"
        }
        passHref
      >
        <MainSidebarLink color="textSecondary" underline="none">
          聯絡我們
        </MainSidebarLink>
      </Link>
      <Link
        href={
          process.env.NODE_ENV === "production"
            ? "https://www.flyingmilktea.com"
            : "#"
        }
        passHref
      >
        <MainSidebarLink color="textSecondary" underline="none">
          飛天奶茶主頁
        </MainSidebarLink>
      </Link>
      <Link
        href={
          process.env.NODE_ENV === "production"
            ? "https://creators.flyingmilktea.com"
            : "#"
        }
        passHref
      >
        <MainSidebarLink color="textSecondary" underline="none">
          創作者事務所
        </MainSidebarLink>
      </Link>
    </Box>
    <Divider sx={{ my: 2 }} />
  </Box>
);

export default GeneralSection;

import React from "react";

import Link from "next/link";

import { Box, Link as MuiLink } from "@mui/material";

const BugReport = () => (
  <Box
    sx={(theme) => ({
      alignItems: "center",
      bgcolor: theme.palette.primary.main,
      display: "flex",
      height: 24,
      justifyContent: "center",
    })}
  >
    <Link href="https://forms.gle/4vWFhNEjWrVraEQy5" passHref>
      <MuiLink
        display="block"
        color="primary.contrastText"
        noWrap
        underline="none"
        variant="caption"
      >
        歡迎使用封測版飛天奶茶，請按此回報問題或提供建議。
      </MuiLink>
    </Link>
  </Box>
);

export default BugReport;

import React from "react";

import { Avatar, Box, ButtonBase, Card, CardHeader } from "@mui/material";

const ArtistCredit = (props) => (
  <Box {...props}>
    <Card
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <ButtonBase>
        <a
          href="https://www.pixiv.net/users/175557"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardHeader
            avatar={<Avatar src="/melissa.gif" alt="" />}
            title="MENIUSA 的作品"
            subheader="前往畫師 pixiv"
            sx={{
              "& span.MuiCardHeader-title": {
                color: "white",
              },
              "& span.MuiCardHeader-subheader": {
                color: "white",
              },
            }}
          />
        </a>
      </ButtonBase>
    </Card>
  </Box>
);

export default ArtistCredit;

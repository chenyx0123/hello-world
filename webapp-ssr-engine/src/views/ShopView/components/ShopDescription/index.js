import React from "react";

import ExpandableTextContainer from "../../../../components/ExpandableTextContainer";

const ShopDescription = ({ shop, expanded, sx, ...props }) => {
  let desc;
  if (
    shop.description &&
    shop.description.trim().length > 0 &&
    shop.description.trim() !== "</p>"
  ) {
    desc = shop.description.trim();
  }
  return desc ? (
    <ExpandableTextContainer
      {...props}
      htmlText={desc
        .replace(/width: ([0-9.]+(px|%)|auto)/g, "max-width: 100%")
        .replace(/height: ([0-9.]+(px|%)|auto)/g)}
      expanded={expanded}
      sx={{
        px: { xs: 1, sm: 2, md: 3 },
        ...sx,
      }}
      TextContainerProps={{
        sx: {
          "& p": {
            margin: 0,
            fontFamily:
              '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 1.5,
          },
        },
      }}
    />
  ) : null;
};

export default ShopDescription;

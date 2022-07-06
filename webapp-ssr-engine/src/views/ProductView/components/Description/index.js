import React from "react";

import { Box, Typography } from "@mui/material";

import ExpandableTextContainer from "../../../../components/ExpandableTextContainer";
import SectionTitle from "../SectionTitle";

const Description = ({ product, expanded, short = false, ...props }) => {
  let desc;
  let shortDesc;

  if (
    product.description &&
    product.description.trim().length > 0 &&
    product.description.trim() !== "</p>"
  ) {
    desc = product.description.trim();
  }
  if (
    product.short_description &&
    product.short_description.trim().length > 0 &&
    product.short_description.trim() !== "</p>"
  ) {
    shortDesc = product.short_description.trim();
  }

  if (short) {
    return (
      <Box {...props}>
        <Typography variant="body2">{shortDesc}</Typography>
      </Box>
    );
  }

  const computedDesc = desc || shortDesc;
  return computedDesc ? (
    <Box {...props}>
      <SectionTitle title="商品介紹" color="textSecondary" mb={1} />
      <ExpandableTextContainer
        expanded={expanded}
        htmlText={(desc || shortDesc)
          .replace(/width: ([0-9.]+(px|%)|auto)/g, "max-width: 100%")
          .replace(/height: ([0-9.]+(px|%)|auto)/g)}
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
    </Box>
  ) : null;
};

export default Description;

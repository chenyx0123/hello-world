import React, { useState } from "react";

import { Box, styled } from "@mui/material";

import useDimensions from "react-cool-dimensions";

const Checkbox = styled("input")(({ theme }) => ({
  appearance: "none",
  padding: theme.spacing(1),
  margin: 0,
  cursor: "pointer  ",
  width: "100%",
  "&::after": {
    content: '"閱讀更多 ..."',
    fontWeight: "700",
    fontSize: "0.8rem",
    color: theme.palette.grey["400"],
  },
  "&:checked": {
    display: "none",
  },
  "&:checked~div": {
    maxHeight: "100%",
    "&::before": { display: "none" },
    "&::after": { display: "none" },
  },
}));

const TextContainer = styled("div")(({ theme }) => ({
  overflowY: "hidden",
  overflowWrap: "anywhere",
  position: "relative",
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
}));

const ExpandableTextContainer = ({
  expanded = false,
  htmlText,
  maxCollapsedHeight = 300,
  CheckboxProps = {},
  TextContainerProps = {},
  ...props
}) => {
  const { sx: checkboxSx, ...otherCheckboxProps } = CheckboxProps;
  const { sx: textContainerSx, ...otherTextContainerProps } =
    TextContainerProps;
  const [maxHeight, setMaxHeight] = useState(0);

  const { observe } = useDimensions({
    onResize: ({ unobserve, height }) => {
      setMaxHeight((h) => Math.max(height, h));
      unobserve();
    },
  });

  const expandable = maxHeight === 0 ? true : maxHeight > maxCollapsedHeight;

  return (
    <Box display="flex" flexDirection="column" {...props}>
      <Checkbox
        key={expanded || !expandable}
        type="checkbox"
        defaultChecked={expanded || !expandable}
        readOnly={expanded || !expandable}
        sx={{ order: 2, ...checkboxSx }}
        {...otherCheckboxProps}
      />
      <TextContainer
        ref={observe}
        dangerouslySetInnerHTML={{
          __html: htmlText,
        }}
        sx={{
          order: 1,
          ...textContainerSx,
          maxHeight: maxHeight === 0 ? "100%" : `${maxCollapsedHeight}px`,
        }}
        {...otherTextContainerProps}
      />
    </Box>
  );
};

export default ExpandableTextContainer;

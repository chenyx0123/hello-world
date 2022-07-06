import { useMediaQuery } from "@mui/material";

import last from "lodash/last";
import toArray from "lodash/toArray";

const useBreakpointValue = (values) => {
  const matches = {
    xs: useMediaQuery((theme) => theme.breakpoints.up(`xs`)),
    sm: useMediaQuery((theme) => theme.breakpoints.up(`sm`)),
    md: useMediaQuery((theme) => theme.breakpoints.up(`md`)),
    lg: useMediaQuery((theme) => theme.breakpoints.up(`lg`)),
    xl: useMediaQuery((theme) => theme.breakpoints.up(`xl`)),
  };

  const validBreakpoints = Object.entries(matches)
    .filter(
      ([breakpoint, isMatch]) =>
        Object.keys(values).includes(breakpoint) && isMatch
    )
    .map(([key]) => key);

  const largestBreakpoint = validBreakpoints.pop();

  if (!largestBreakpoint) {
    return last(toArray(values));
  }

  return values[largestBreakpoint];
};

export default useBreakpointValue;

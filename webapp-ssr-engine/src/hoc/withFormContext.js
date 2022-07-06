import React from "react";

import { useFormContext } from "react-hook-form";

const withFormContext = (Component) => (props) => {
  const formContext = useFormContext();

  return <Component formContext={formContext} {...props} />;
};

export default withFormContext;

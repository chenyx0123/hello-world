import React from "react";

import R18WarningComponent from "../../../../components/R18Warning";

const R18Warning = ({ product, ...props }) =>
  product.is_r18 ? <R18WarningComponent {...props} /> : null;

export default R18Warning;

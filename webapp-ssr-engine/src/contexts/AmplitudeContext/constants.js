export const EVENT_TYPES = Object.freeze({
  SESSION_START: "SESSION_START",
  ACTION: "ACTION",
  BUG_REPORT: "BUG_REPORT",
});

export const INTENTS = Object.freeze({});

export const ACTIONS_NAME = Object.freeze({
  CLICK_HEADER_LOGO: "Click header logo",
  SEARCH: "Searched in search bar",
  LOGIN: "Login",
  LOGIN_FORGET_PASSWORD: "Login forget password",
  LOGIN_REGISTER: "Login register",
  LOGIN_SUCCESSFUL: "Login successful",
  LOGIN_FAILURE: "Login failure",
  ADD_PRODUCT: "Add product to cart",
  CREATE_ORDER_CONFIRMATION: "Create order and redirect to cart confirmation",
  CREATE_ORDER_TOPUP: "Create order and redirect to topup page",
  CREATE_ORDER_COMPLETED: "Create order completed",
  TOPUP_COMPLETED: "Topup completed",
  EXIT_TO_FMT: "Exit to FMT Main",
  TOPUP_ERROR: "Topup error",
});

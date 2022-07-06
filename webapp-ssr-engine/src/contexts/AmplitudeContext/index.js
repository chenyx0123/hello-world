import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

import getConfig from "next/config";

import { EVENT_TYPES } from "./constants";

export * from "./constants";
export * from "./dashboardConstants";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const initialState = {
  amplitude: undefined,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "AMPLITUDE_INIT_COMPLETED": {
      return { amplitude: action.amplitude };
    }
    default: {
      return state;
    }
  }
};

const AmplitudeContext = createContext({
  ...initialState,
});

export default AmplitudeContext;

export const AmplitudeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fn = async () => {
      const AmplitudeJS = await import("amplitude-js");
      const am = AmplitudeJS.default.getInstance();
      const amplitudeKey =
        publicRuntimeConfig?.NEXT_PUBLIC_AMPLITUDE_KEY ??
        serverRuntimeConfig?.NEXT_PUBLIC_AMPLITUDE_KEY ??
        process.env.NEXT_PUBLIC_AMPLITUDE_KEY;
      am.init(amplitudeKey, undefined, {
        batchEvents: false,
        forceHttps: process.env.NODE_ENV === "development",
        includeGclid: true,
        includeReferrer: true,
        includeUtm: true,
        logLevel: process.env.NODE_ENV === "development" ? "INFO" : "DISABLE",
      });
      dispatch({ type: "AMPLITUDE_INIT_COMPLETED", amplitude: am });
    };
    fn();
  }, []);

  const identify = useCallback(
    (props) => {
      const fn = async ({ username }) => {
        state.amplitude?.setUserId(username);
      };
      fn(props);
    },
    [state.amplitude]
  );

  const trackAction = useCallback(
    (props) => {
      const fn = async ({ actionName, ...others }) => {
        if (actionName)
          state.amplitude?.logEvent(EVENT_TYPES.ACTION, {
            actionName,
            ...others,
          });
      };
      fn(props);
    },
    [state.amplitude]
  );

  const trackPage = useCallback(
    (props) => {
      const fn = async ({ intent, data }) => {
        if (intent) state.amplitude?.logEvent(intent, data);
      };
      fn(props);
    },
    [state.amplitude]
  );

  const trackReportClick = useCallback(
    (props) => {
      const fn = async ({ location }) => {
        state.amplitude?.logEvent(EVENT_TYPES.BUG_REPORT, location);
      };
      fn(props);
    },
    [state.amplitude]
  );

  const contextValue = useMemo(
    () => ({
      ...state,
      identify,
      trackAction,
      trackPage,
      trackReportClick,
    }),
    [state, identify, trackAction, trackPage, trackReportClick]
  );

  return (
    <AmplitudeContext.Provider value={contextValue}>
      {children}
    </AmplitudeContext.Provider>
  );
};

export const withAmplitude = (Component) => (props) =>
  (
    <AmplitudeContext.Consumer>
      {(ctx) => <Component {...props} {...ctx} />}
    </AmplitudeContext.Consumer>
  );

export const useAmplitude = () => useContext(AmplitudeContext);

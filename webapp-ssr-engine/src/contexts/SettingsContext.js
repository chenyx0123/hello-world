import React, { createContext, useEffect, useMemo, useState } from "react";

import { THEMES } from "../constants";

export const initialSettings = {
  compact: true,
  direction: "ltr",
  responsiveFontSizes: true,
  roundedCorners: false,
  theme: THEMES.LIGHT,
};

export const restoreSettings = () => {
  let settings = null;

  try {
    const storedData = window.localStorage.getItem("settings");

    if (storedData) {
      settings = JSON.parse(storedData);
    } else {
      settings = {
        ...initialSettings,
        // Not supporting dark theme now
        theme: window.matchMedia("(prefers-color-scheme: dark)").matches
          ? THEMES.LIGHT
          : THEMES.LIGHT,
      };
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    // If stored data is not a strigified JSON this will fail,
    // that's why we catch the error
  }

  return settings;
};

export const storeSettings = (settings) => {
  window.localStorage.setItem("settings", JSON.stringify(settings));
};

const SettingsContext = createContext({
  settings: initialSettings,
  saveSettings: () => {},
});

export const SettingsProvider = (props) => {
  const { children } = props;
  const [settings, setSettings] = useState(initialSettings);

  useEffect(() => {
    const restoredSettings = restoreSettings();

    if (restoredSettings) {
      setSettings(restoredSettings);
    }
  }, []);

  const saveSettings = (updatedSettings) => {
    setSettings(updatedSettings);
    storeSettings(updatedSettings);
  };

  const settingValue = useMemo(
    () => ({
      settings,
      saveSettings,
    }),
    [settings]
  );

  return (
    <SettingsContext.Provider value={settingValue}>
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;

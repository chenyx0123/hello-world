import React, { useMemo } from "react";

import mapValues from "lodash/mapValues";
import { AuthContext, CartContext, WalletContext } from "market-webapp-commons";

import MainNavbar from ".";
import { TEST_VIEWPORT_SET } from "../../../.storybook/viewports";

export default {
  title: "📷/components/MainNavbar/index.login",
  component: MainNavbar,
};

const Template = () => {
  const cartItemsCount = useMemo(() => ({ cartItemsCount: 99 }), []);
  const walletBalance = useMemo(() => ({ balance: 10, initialized: true }), []);
  const authValue = useMemo(
    () => ({
      isAuthenticated: true,
      isInitialized: true,
      user: { name: "test", displayName: "test" },
    }),
    []
  );

  return (
    <CartContext.Provider value={cartItemsCount}>
      <WalletContext.Provider value={walletBalance}>
        <AuthContext.Provider value={authValue}>
          <MainNavbar />
        </AuthContext.Provider>
      </WalletContext.Provider>
    </CartContext.Provider>
  );
};

const {
  fullscreen1080p,
  fullscreen1080px150,
  fullscreen720p,
  galaxys9,
  halfscreen1080p,
  halfscreen1080px150,
  halfscreen720p,
  ipad,
  ipad10p,
  ipad12p,
  iphone12,
  iphone12promax,
  iphone5,
  iphonese2,
  pixel,
  pixelxl,
} = mapValues(TEST_VIEWPORT_SET, (v, k) => {
  const BoundComponent = Template.bind({});
  BoundComponent.storyName = v.name;
  BoundComponent.args = {
    viewportName: k,
  };
  BoundComponent.parameters = {
    viewport: {
      defaultViewport: k,
    },
  };
  return BoundComponent;
});

export {
  fullscreen1080p,
  fullscreen1080px150,
  fullscreen720p,
  galaxys9,
  halfscreen1080p,
  halfscreen1080px150,
  halfscreen720p,
  ipad,
  ipad10p,
  ipad12p,
  iphone12,
  iphone12promax,
  iphone5,
  iphonese2,
  pixel,
  pixelxl,
};

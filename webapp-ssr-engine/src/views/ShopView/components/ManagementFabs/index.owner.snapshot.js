import React, { useMemo } from "react";

import mapValues from "lodash/mapValues";
import { AuthContext } from "market-webapp-commons";

import ManagementFabs from ".";
import { TEST_VIEWPORT_SET } from "../../../../../.storybook/viewports";

export default {
  title: "📷/views/ShopView/components/ManagementFabs/index.owner",
  component: ManagementFabs,
};

const shop = {
  id: "109940",
  owner: {
    id: "1234",
  },
};

const Template = () => {
  const authValue = useMemo(
    () => ({
      isAuthenticated: true,
      isInitialized: true,
      user: {
        id: "1234",
      },
    }),
    []
  );
  return (
    <AuthContext.Provider value={authValue}>
      <ManagementFabs shop={shop} />
    </AuthContext.Provider>
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

import React, { createContext, useCallback, useMemo } from "react";

import { withRouter } from "next/router";

import { gql } from "graphql-request";

import { withAuth, withGraphQLClient } from "market-webapp-commons";

const DownloadImagesAsZipContext = createContext({
  //* interface definition
  // eslint-disable-next-line no-unused-vars
  downloadShopImagesAsZip: (id) => Promise.resolve(),
  //* interface definition
  // eslint-disable-next-line no-unused-vars
  downloadProductImagesAsZip: (id) => Promise.resolve(),
});

export default DownloadImagesAsZipContext;

const DOWNLOAD_IMAGES_AS_ZIP_CONTEXT_DOWNLOAD_FROM_PRODUCT_GQL = gql`
  mutation DownloadContextDownloadFromProduct($id: ID!) {
    woocommerce {
      product(id: $id) {
        downloadImagesAsZip
      }
    }
  }
`;
const DOWNLOAD_IMAGES_AS_ZIP_CONTEXT_DOWNLOAD_FROM_SHOP_GQL = gql`
  mutation DownloadContextDownloadFromShop($id: ID!) {
    woocommerce {
      shop(id: $id) {
        ... on WShop {
          downloadImagesAsZip
        }
      }
    }
  }
`;

const DownloadImagesAsZipContextProviderImpl = ({
  children,
  user,
  client,
  router,
}) => {
  const downloadShopImagesAsZip = useCallback(
    async (id) => {
      if (user?.roles?.includes("administrator")) {
        const downloadUrl = (
          await client.request(
            DOWNLOAD_IMAGES_AS_ZIP_CONTEXT_DOWNLOAD_FROM_SHOP_GQL,
            { id }
          )
        ).woocommerce?.shop?.downloadImagesAsZip;
        router.push(downloadUrl);
      }
    },
    [user, client, router]
  );

  const downloadProductImagesAsZip = useCallback(
    async (id) => {
      if (user?.roles?.includes("administrator")) {
        const downloadUrl = (
          await client.request(
            DOWNLOAD_IMAGES_AS_ZIP_CONTEXT_DOWNLOAD_FROM_PRODUCT_GQL,
            { id }
          )
        ).woocommerce?.product?.downloadImagesAsZip;
        router.push(downloadUrl);
      }
    },
    [user, client, router]
  );

  const imageZipValue = useMemo(
    () => ({
      downloadShopImagesAsZip,
      downloadProductImagesAsZip,
    }),
    [downloadShopImagesAsZip, downloadProductImagesAsZip]
  );

  return (
    <DownloadImagesAsZipContext.Provider value={imageZipValue}>
      {children}
    </DownloadImagesAsZipContext.Provider>
  );
};

export const DownloadImagesAsZipContextProvider = withGraphQLClient(
  withAuth(withRouter(DownloadImagesAsZipContextProviderImpl))
);

export const withDownloadImagesAsZipContext = (Component) => (props) =>
  (
    <DownloadImagesAsZipContext.Consumer>
      {(ctx) => <Component {...props} {...ctx} />}
    </DownloadImagesAsZipContext.Consumer>
  );

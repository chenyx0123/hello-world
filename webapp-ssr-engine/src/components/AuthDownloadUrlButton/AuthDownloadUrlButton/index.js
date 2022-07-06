import React, { useCallback, useState } from "react";

import { gql } from "graphql-request";

import { Box, IconButton } from "@mui/material";

import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import GetAppIcon from "@mui/icons-material/GetApp";

import { useGraphQLClient } from "market-webapp-commons";

import R18WarningConfirmation from "./r18-warning-confirmation";

const DirectDownloadButton = ({ url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <GetAppIcon color="primary" style={{ verticalAlign: "middle" }} />
  </a>
);

const PRESIGN_GET_ASSET_URL = gql`
  query AuthDownloadUrlButtonPresignGetAssetUrl(
    $productId: ID!
    $fileName: String!
  ) {
    woocommerce {
      product(id: $productId) {
        presignGetAssetUrl(key: $fileName)
      }
    }
  }
`;

const AuthDownloadUrlButton = ({
  productId,
  asset,
  showR18Warning,
  ...props
}) => {
  const { client } = useGraphQLClient();
  // For opening new tab in Safari
  const [url, setUrl] = useState(null);

  const getDownloadUrl = useCallback(
    async (variables) => {
      const newUrl = (await client.request(PRESIGN_GET_ASSET_URL, variables))
        .woocommerce.product.presignGetAssetUrl;
      if (newUrl) {
        setUrl(newUrl);
        window.open(newUrl);
      } else {
        // TODO: should throw from server
        const error = new Error(
          "您尚沒有下載權限，如果情況持續，請與我們聯繫以獲取支援"
        );
        (await import("react-hot-toast")).default.error(error.message);
      }
    },
    [client]
  );

  // r18 warning dialog
  const [open, setOpen] = useState(false);
  const handleR18Close = () => {
    setOpen(false);
  };

  return (
    <Box {...props}>
      {url ? (
        <DirectDownloadButton url={url} />
      ) : (
        <IconButton
          size="small"
          onClick={() => {
            if (showR18Warning) {
              setOpen(true);
            } else {
              getDownloadUrl({
                variables: {
                  productId,
                  fileName: asset.key,
                },
              });
            }
          }}
        >
          <CloudDownloadIcon />
        </IconButton>
      )}

      {showR18Warning && (
        <R18WarningConfirmation
          open={open}
          handleClose={() => {
            handleR18Close();
          }}
          handleContinue={() => {
            handleR18Close();
            getDownloadUrl({
              variables: {
                productId,
                fileName: asset.key,
              },
            });
          }}
          asset={asset}
          productId={productId}
        />
      )}
    </Box>
  );
};

export default AuthDownloadUrlButton;

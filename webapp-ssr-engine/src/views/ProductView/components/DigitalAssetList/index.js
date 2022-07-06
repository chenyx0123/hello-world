import React from "react";

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import GetAppIcon from "@mui/icons-material/GetApp";

import filesize from "filesize";

import AuthDownloadUrlButton from "../../../../components/AuthDownloadUrlButton/AuthDownloadUrlButton";
import SectionTitle from "../SectionTitle";

const heading = () => ({
  paddingLeft: 0,
  textAlign: "left",
});

const cell = () => ({
  paddingLeft: 0,
  textAlign: "left",
  borderBottom: "none",
});

const DigitalAssetList = ({ product, ...props }) => {
  const { id, virtual, digitalAssets, digitalAssetAuthorized } = product;
  return virtual ? (
    <Box {...props}>
      <SectionTitle
        title={digitalAssetAuthorized ? "下載虛擬商品" : "虛擬商品列表"}
        color={digitalAssetAuthorized ? "secondary" : "textSecondary"}
        mb={1}
      />
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={heading}>文件名稱</TableCell>
              <TableCell sx={heading}>文件大小</TableCell>
              <TableCell sx={heading}>下載</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {digitalAssets.map((asset) => (
              <TableRow key={asset.key}>
                <TableCell sx={cell}>{asset.key}</TableCell>
                <TableCell sx={cell}>
                  {filesize(asset.size, { round: 0 })}
                </TableCell>
                {digitalAssetAuthorized && (
                  <TableCell sx={cell}>
                    <AuthDownloadUrlButton
                      productId={id}
                      asset={asset}
                      showR18Warning={false}
                    />
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {digitalAssetAuthorized ? (
        <Typography variant="caption" gutterBottom>
          如按下{" "}
          <CloudDownloadIcon
            style={{ verticalAlign: "middle" }}
            fontSize="small"
          />{" "}
          後下載沒有自動開始，請按{" "}
          <GetAppIcon
            color="primary"
            style={{ verticalAlign: "middle" }}
            fontSize="small"
          />{" "}
          手動開始下載
        </Typography>
      ) : (
        <Typography variant="caption" gutterBottom>
          虛擬商品可於購買後在此頁或購買記錄下載
        </Typography>
      )}
    </Box>
  ) : null;
};

export default DigitalAssetList;

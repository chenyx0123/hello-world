import React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function R18WarningConfimation({ open, handleClose, handleContinue }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      disableBackdropClick
      disableEscapeKeyDown
      fullWidth
    >
      <DialogTitle id="alert-dialog-title">
        警 告：此 商 品 為 R18 類 別
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          WARNING : THIS ARTICLE CONTAINS MATERIAL WHICH MAY OFFEND AND MAY NOT
          BE DISTRIBUTED, CIRCULATED, SOLD, HIRED, GIVEN, LENT, SHOWN, PLAYED OR
          PROJECTED TO A PERSON UNDER THE AGE OF 18 YEARS.
        </DialogContentText>
        <DialogContentText>
          警 告 ： 本 物 品 內 容 可 能 令 人 反 感，不 可 將 本 物 品 派 發、傳
          閱、出 售、出 租、交給或出借予年齡未滿 1 8
          歲的人士或將本物品向該等人士出示、播放或放映。
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          離開
        </Button>
        <Button onClick={handleContinue} color="primary">
          確認
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default R18WarningConfimation;

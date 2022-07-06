import React, { useState } from "react";

import { Box, Chip, ClickAwayListener, Typography } from "@mui/material";

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const DistributorServiceDescription = ({ sx, ...props }) => (
  <Box sx={{ lineHeight: 1.4, ...sx }} {...props}>
    凡是購買
    <a
      href="https://market.flyingmilktea.com/tag/1141"
      style={{ textDecorationLine: "underline" }}
    >
      飛天奶茶代理商品
    </a>
    滿四件或以上、或希望郵寄到其他不在選項內的國家、或希望使用其他不在選項內的郵遞方式（例如掛號、速遞、到付等）
    <br />
    <br />
    1. 在郵寄選項中請選擇「與官方聯絡」
    <br />
    2️.{" "}
    <a
      href="https://market.flyingmilktea.com/chat?targetID=19"
      style={{ textDecorationLine: "underline" }}
    >
      聯絡官方攤位
    </a>
    <br />
    3️. 等待飛天奶茶的工作人員聯絡您，為您計算運費
    <br />
    4️. 按工作人員指示，到
    <a
      href="https://market.flyingmilktea.com/product/83701"
      style={{ textDecorationLine: "underline" }}
    >
      官方運費
    </a>
    購買相應件數
  </Box>
);

const DistributorServiceTag = ({
  product,
  defaultState = { open: false },
  ...props
}) => {
  const [open, setOpen] = useState(defaultState.open);
  const handleTooltipClose = () => {
    setOpen(false);
  };
  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return product.distributor_service ? (
    <Box {...props}>
      {open && (
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <Box
            sx={{
              height: 0,
              position: "relative",
              width: "100%",
              zIndex: 100,
            }}
            onClick={handleTooltipClose}
          >
            <Box
              sx={(theme) => ({
                boxShadow: 3,
                position: "absolute",
                borderRadius: theme.spacing(0.5),
                borderTopLeftRadius: theme.spacing(1.5),
                borderTopRightRadius: theme.spacing(1.5),
              })}
            >
              <Box
                sx={(theme) => ({
                  p: 1.2,
                  borderTopLeftRadius: theme.spacing(1.5),
                  borderTopRightRadius: theme.spacing(1.5),
                  backgroundColor: theme.palette.primary.main,
                })}
              >
                <Typography variant="body2" color="primary.contrastText">
                  什麼是飛天奶茶官方代理販售商品?
                </Typography>
              </Box>
              <Box
                sx={(theme) => ({
                  p: 1.2,
                  borderRadius: theme.spacing(0.5),
                  backgroundColor: theme.palette.background.default,
                })}
              >
                <DistributorServiceDescription />
              </Box>
            </Box>
          </Box>
        </ClickAwayListener>
      )}
      <Chip
        label="FMT 代理販售商品"
        size="small"
        color="primary"
        onClick={open ? handleTooltipClose : handleTooltipOpen}
        onDelete={open ? handleTooltipClose : handleTooltipOpen}
        deleteIcon={<HelpOutlineIcon />}
      />
    </Box>
  ) : null;
};

export default DistributorServiceTag;

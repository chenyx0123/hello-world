import React, { useEffect, useState } from "react";

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

import { useRegion } from "market-webapp-commons";

import SectionTitle from "../SectionTitle";

const countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/zh-tw.json"));

const ShippingList = ({ product, ...props }) => {
  const { toLocalCurrency } = useRegion();
  const { virtual, shipping } = product;
  const [defaultShipping, setDefaultShipping] = useState([]);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    if (!virtual && shipping) {
      const s = shipping.filter(
        (info) =>
          info.region === "HK" || info.region === "TW" || info.region === "ALL"
      );
      setDefaultShipping(s);
      if (s.length === 0) setExpand(true);
    }
  }, [virtual, shipping]);

  return virtual ? null : (
    <Box {...props}>
      <Box position="relative">
        <SectionTitle title="運費列表" color="textSecondary" mb={1} />
        {shipping && shipping.length - defaultShipping.length > 0 && !expand && (
          <Typography
            color="primary"
            variant="caption"
            onClick={() => setExpand(true)}
          >
            顯示其他地區運費▾
          </Typography>
        )}
      </Box>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>運送方式</TableCell>
              <TableCell align="right">首件運費</TableCell>
              <TableCell align="right">續件加收</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shipping &&
              (expand ? shipping : defaultShipping).map((info) => (
                <TableRow key={`${info.region}/${info.method}`}>
                  <TableCell align="left">
                    {info.region === "ALL"
                      ? "所有地區"
                      : countries.getName(info.region, "zh-tw")}
                    /{info.method}
                  </TableCell>
                  <TableCell align="right">
                    {info.shippingFeeFirst} 珍珠
                    <br />
                    <Typography
                      color="grey.500"
                      underline="none"
                      variant="caption"
                    >
                      {toLocalCurrency(info.shippingFeeFirst)}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    {info.shippingFeeAdditional ?? 0} 珍珠
                    <br />
                    <Typography
                      color="grey.500"
                      underline="none"
                      variant="caption"
                    >
                      {toLocalCurrency(info.shippingFeeAdditional ?? 0)}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell colSpan={3}>
                <Typography variant="caption">
                  實際運費金額以購物車結算或是到貨時收取的金額為準。
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ShippingList;

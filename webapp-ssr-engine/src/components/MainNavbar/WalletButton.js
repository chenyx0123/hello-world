import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Button, Skeleton } from "@mui/material";

import { APP_ROUTES, withWallet } from "market-webapp-commons";

import CoinIcon from "../../../public/coin.png";

const WalletButton = ({ balance, initialized }) => (
  <Link href={APP_ROUTES.ACCOUNT_WALLET} passHref>
    <Button
      color="inherit"
      size="small"
      startIcon={<Image src={CoinIcon} width={24} height={24} />}
    >
      {initialized ? balance : <Skeleton width={18} />}
    </Button>
  </Link>
);

export default withWallet(WalletButton);

import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import {
  Avatar,
  Box,
  Button,
  Link as MuiLink,
  Typography,
} from "@mui/material";

import { APP_ROUTES, useAuth } from "market-webapp-commons";
import { FormProvider, useForm } from "react-hook-form";

import LogoIcon from "../../../../../public/logo.png";
import StandardTextField from "../../../../components/standard-form-fields/StandardTextField";

const StandardTextFieldSx = (theme) => ({
  ".MuiInputBase-root": {
    color: theme.palette.primary.contrastText,
  },
  ".MuiInputLabel-root": {
    color: theme.palette.primary.contrastText,
    "&.Mui-focused": {
      color: theme.palette.primary.contrastText,
    },
    "&.Mui-error": {
      color: theme.palette.warning.main,
      "&.Mui-focused": {
        color: theme.palette.warning.main,
      },
    },
  },
  ".MuiOutlinedInput-root": {
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.contrastText,
    },
    "&:hover": {
      ".MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.primary.contrastText,
      },
    },
    "&.Mui-focused": {
      ".MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.primary.contrastText,
      },
    },
    "&.Mui-error": {
      ".MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.warning.main,
      },
      "&:hover": {
        ".MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.warning.main,
        },
      },
      "&.Mui-focused": {
        ".MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.warning.main,
        },
      },
    },
  },
});

const LoginForm = (props) => {
  const router = useRouter();
  const formMethods = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const { handleSubmit, setError } = formMethods;

  const { login } = useAuth();

  const submitLoginForm = async (data) => {
    try {
      await login({
        ...data,
        redirect: router.query.redirect ?? APP_ROUTES.HOME,
      });
    } catch (err) {
      if (err.message?.includes("您輸入的用戶名和密碼可能錯誤")) {
        setError("password", {
          message:
            "您輸入的用戶名和密碼可能錯誤，請重試。如果您尚未註冊飛天奶茶，請在飛天奶茶主頁註冊",
        });
      } else {
        setError("password", {
          message: "伺服器可能發生問題，請稍後再試。",
        });
      }
    }
  };

  return (
    <Box {...props}>
      <form onSubmit={handleSubmit(submitLoginForm)}>
        <Box
          sx={(theme) => ({
            width: "300px",
            p: 2.5,
            position: "relative",
            overflow: "hidden",
            borderRadius: theme.spacing(1),
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            transform: "translateX(-50%) translateY(-50%)",
          })}
          elevation="3"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box display="flex" alignItems="center" pb={2}>
            <Avatar
              sx={{ display: "inline-block", width: 60, height: 60 }}
              src={LogoIcon.src}
              alt=""
            />
            <Box
              sx={{
                display: "inline-block",
                ml: 2,
              }}
            >
              <Typography variant="subtitle1">
                飛天奶茶 Flying Milk Tea
              </Typography>
              <Typography variant="body2">
                一個始於香港的華文創作平台
              </Typography>
            </Box>
          </Box>
          <FormProvider {...formMethods}>
            <StandardTextField
              name="username"
              registerProps={{
                required: "請輸入用戶名稱",
              }}
              textFieldProps={{
                label: "用戶名稱",
                InputLabelProps: {
                  shrink: true,
                },
                margin: "normal",
                size: "small",
                sx: StandardTextFieldSx,
                variant: "outlined",
              }}
              errorMessageProps={{
                color: "warning.main",
              }}
            />
            <StandardTextField
              name="password"
              type="password"
              registerProps={{
                required: "請輸入密碼",
              }}
              textFieldProps={{
                label: "密碼",
                InputLabelProps: {
                  shrink: true,
                },
                margin: "normal",
                size: "small",
                sx: StandardTextFieldSx,
                variant: "outlined",
              }}
              errorMessageProps={{
                color: "warning.main",
              }}
            />
          </FormProvider>
          <Button
            sx={{
              width: "100px",
              mt: 2,
              "&:before": {
                opacity: 0.1,
              },
            }}
            variant="contained"
            color="primary"
            size="small"
            type="submit"
          >
            登入
          </Button>

          <Box mt={2} mb={3}>
            <Link
              href="https://www.flyingmilktea.com/login/?rcp_action=lostpassword"
              passHref
            >
              <MuiLink style={{ color: "white" }}>忘記密碼？</MuiLink>
            </Link>
            <Typography style={{ color: "white" }} display="inline">
              {" | "}
            </Typography>
            <Link href="https://www.flyingmilktea.com/registration/" passHref>
              <MuiLink style={{ color: "white" }}>免費註冊</MuiLink>
            </Link>
          </Box>
          <Typography variant="caption" align="center">
            飛天奶茶網站封測現正進行中！
          </Typography>
          <Typography variant="caption" align="center">
            如發現任何問題，還請立即告知我們的客服人員。謝謝！
          </Typography>
        </Box>
      </form>
    </Box>
  );
};

export default LoginForm;

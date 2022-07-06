import React from "react";

import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  useMediaQuery,
} from "@mui/material";

import { useCart, useRegion } from "market-webapp-commons";
import { FormProvider, useForm } from "react-hook-form";

import useFormPersist from "../../hooks/useFormPersist";
import ShopHeading from "../ShopView/components/ShopHeading";

const DEFAULT_FORM_VALUES = {
  amount: "",
  message: "",
};

const DonationView = ({ shop, defaultValues = DEFAULT_FORM_VALUES }) => {
  const { donate, loading } = useCart();
  const { toLocalCurrency } = useRegion();
  const xsOnly = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  const formMethods = useForm({ defaultValues });
  const { handleSubmit, register, reset, setValue, watch } = formMethods;
  useFormPersist(`donate-${shop.id}`, { watch, setValue });

  return (
    <>
      <Box sx={{ bgcolor: "white" }}>
        <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2, md: 3 } }}>
          <ShopHeading shop={shop} hideActions />
        </Container>
      </Box>
      <Box sx={{ bgcolor: "white", px: 1, pb: 4 }}>
        <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2, md: 3 } }}>
          <FormProvider>
            <form
              onSubmit={handleSubmit(async (data) => {
                try {
                  await donate({ ...data, shopId: shop.id });
                  reset();
                  (await import("react-hot-toast")).default.success(
                    `已打賞 ${data.amount} 珍珠 / ${toLocalCurrency(
                      data.amount
                    )}給 ${shop.name}`
                  );
                } catch (e) {
                  (await import("react-hot-toast")).default.error(e);
                }
              })}
            >
              <TextField
                {...register("amount")}
                label="打賞金額"
                helperText="最低打賞金額為1珍珠，惟增值最低金額為10珍珠，如需增值，剩餘的珍珠可用作再次打賞或購買其他商品。"
                required
                inputProps={{
                  min: 1,
                  max: 1000,
                  type: "number",
                  step: 1,
                }}
                margin="normal"
                fullWidth
              />
              <TextField
                {...register("message")}
                label="留言"
                placeholder={`想寫點什麼給 ${shop.name} 嗎？`}
                multiline
                rows={4}
                margin="normal"
                fullWidth
              />
              <Button
                disabled={loading}
                type="submit"
                color="secondary"
                variant="contained"
                fullWidth={xsOnly}
              >
                {loading ? (
                  <CircularProgress size={24} />
                ) : (
                  `打賞給${shop.name}`
                )}
              </Button>
            </form>
          </FormProvider>
        </Container>
      </Box>
    </>
  );
};
export default DonationView;

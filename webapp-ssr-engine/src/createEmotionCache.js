// https://github.com/mui-org/material-ui/tree/285e72875b9e7c9d6fc7303ccd54f0db16a4160d/examples/nextjs/
import createCache from "@emotion/cache";

export default function createEmotionCache() {
  return createCache({ key: "css" });
}

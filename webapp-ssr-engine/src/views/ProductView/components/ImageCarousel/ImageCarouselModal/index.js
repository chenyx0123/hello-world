import React from "react";

import { Modal } from "@mui/material";

const ImageCarouselModal = ({ open, onClick, src, ...props }) => (
  <Modal open={open} onClick={onClick} sx={{ cursor: "zoom-out" }} {...props}>
    <img
      src={src}
      style={{
        objectFit: "contain",
        width: "100%",
        height: "100%",
      }}
      alt=""
    />
  </Modal>
);

export default ImageCarouselModal;

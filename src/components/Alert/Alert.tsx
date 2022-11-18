import MuiAlert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import React from "react";
import { AlertProps } from "./Alert-types";

const Alert = ({ alertMSG, isOpen, handleAlert }: AlertProps) => {
  return (
    <Collapse
      in={isOpen}
      sx={{ position: "absolute", zIndex: 6, width: "100%" }}
    >
      <MuiAlert
        sx={{}}
        elevation={6}
        severity="error"
        onClose={() => {
          handleAlert(false);
        }}
      >
        {alertMSG}
      </MuiAlert>
    </Collapse>
  );
};

export default Alert;

import Collapse from "@mui/material/Collapse";
import React from "react";
import { AlertStyled } from "./Alert.styles";
import { AlertProps } from "./Alert-types";

const Alert = ({ alertMSG, isOpen, handleAlert }: AlertProps) => {
  return (
    <Collapse
      in={isOpen}
      sx={{ position: "absolute", zIndex: 6, width: "100%" }}
    >
      <AlertStyled
        elevation={6}
        severity="error"
        onClose={() => {
          handleAlert && handleAlert(false);
        }}
      >
        {alertMSG}
      </AlertStyled>
    </Collapse>
  );
};

export default Alert;

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import React from "react";

const handleGoBack = () => {
  history.back();
};

const NavigationButton = () => {
  return (
    <>
      <Button onClick={handleGoBack}>
        <ArrowBackIcon />
      </Button>
    </>
  );
};

export default NavigationButton;

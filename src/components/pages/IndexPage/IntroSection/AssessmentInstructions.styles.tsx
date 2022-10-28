import styled from "@emotion/styled";
import { StepLabel, Stepper } from "@mui/material";

export const StepperStyled = styled(Stepper)({
  marginTop: "36px",
  marginBottom: "66px",
  ".MuiStepLabel-iconContainer": {
    svg: {
      fill: "#000",
    },
  },
});

export const StepLabelStyled = styled(StepLabel)({
  ".MuiStepLabel-label": {
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "24px",
    color: "rgba(0, 0, 0, 0.87);",
  },
});

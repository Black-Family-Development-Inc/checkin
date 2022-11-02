import styled from "@emotion/styled";
import { StepLabel, Stepper } from "@mui/material";

export const StepperStyled = styled(Stepper)({
  marginTop: "40px",
  marginBottom: "0px",
  ".MuiStepLabel-iconContainer": {
    svg: {
      fill: "#633378",
      width: "28px",
      height: "28px",
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

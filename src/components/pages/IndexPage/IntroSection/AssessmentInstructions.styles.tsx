import styled from "@emotion/styled";
import { Button, Step, StepContent, StepLabel, Stepper } from "@mui/material";
import { Link } from "gatsby";

export const AssessmentInstructionsTitleStyled = styled("h2")({
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "28px",
  color: "#000",
  marginBottom: "8px",
  marginTop: "66px",
});

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
    fontWeight: "500",
    lineHeight: "24px",
    color: "rgba(0, 0, 0, 0.87);",
  },
});

export const StepContentStyled = styled("p")({
  margin: "0px",
  fontSize: "16px",
  letterSpacing: "0.5px",
  color: "rgba(0, 0, 0, 0.87);",
  fontWeight: "500",
});

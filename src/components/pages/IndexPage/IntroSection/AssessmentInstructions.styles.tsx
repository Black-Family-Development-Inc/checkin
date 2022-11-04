import styled from "@emotion/styled";
import { StepContent, StepLabel, Stepper } from "@mui/material";
import { breakpoints, color } from "../../../../styles/theme";

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
  ".MuiStepIcon-text": {
    fontSize: "14px",
    lineHeight: "16.41px",
    fontWeight: "400",
  },
  ".MuiStepConnector-line": {
    borderLeft: [`1px solid ${color.gray.two}`],
    minHeight: "40px",
  },
  ".MuiStep-root": {
    ":last-child": {
      ".MuiStepContent-root": {
        ":last-child": {
          borderLeft: [`0px solid ${color.gray.two}`],
        },
      },
    },
  },
});

export const StepLabelStyled = styled(StepLabel)({
  ".MuiStepLabel-label": {
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "23.44px",
    color: color.gray.one,
    [`@media(min-width: ${breakpoints.tablet}px)`]: {
      fontSize: "24px",
      lineHeight: "28.44px",
      fontWeight: "700",
    },
    [`@media(min-width: ${breakpoints.desktop}px)`]: {
      fontWeight: "600",
    },
  },
});

export const StepContentStyled = styled(StepContent)({
  borderLeft: [`1px solid ${color.gray.two}`],
});

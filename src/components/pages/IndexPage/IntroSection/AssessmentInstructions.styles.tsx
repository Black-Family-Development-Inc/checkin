import styled from "@emotion/styled";
import { Box, StepLabel, Stepper } from "@mui/material";
import { breakpoints } from "../../../../styles/theme";

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

export const ImageContainerStyled = styled(Box)({
  ".assessmentSectionImage": {
    marginTop: "56px",
    marginBottom: "56px",
    [`@media(min-width: ${breakpoints.tablet}px)`]: {
      marginTop: "80px",
      marginBottom: "80px",
    },
    [`@media(min-width: ${breakpoints.desktop}px)`]: {
      marginTop: "104px",
      marginBottom: "104px",
    },
  },
});

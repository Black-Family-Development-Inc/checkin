import styled from "@emotion/styled";
import { Box, StepLabel, Stepper } from "@mui/material";
import { boxStyles } from "../IntroSection/IntroSection.styles";

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
    ...boxStyles,
  },
});

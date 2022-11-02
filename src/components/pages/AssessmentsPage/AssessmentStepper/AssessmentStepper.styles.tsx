import styled from "@emotion/styled";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { breakpoints, color, maxWidths } from "../../../../styles/theme";

export const NavStepperStyled = styled(Stepper)({
  ".MuiStepConnector-line": {
    borderColor: color.gray.two,
  },
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    maxWidth: maxWidths.tablet.content,
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    maxWidth: maxWidths.desktop.content,
  },
  marginLeft: "auto",
  marginRight: "auto",
});

export const NavStepStyled = styled(Step)({
  // paddingLeft: 0,
  // paddingRight: 0,
  // marginLeft: 0,
  // marginRight: 0,
  // width: "fit-content",
});

export const NavStepLabelStyled = styled(StepLabel)({
  ".MuiStepLabel-labelContainer": {
    width: "fit-content",
  },
  ".MuiStepLabel-label": {
    fontWeight: 400,
    fontSize: 14,
    letterSpacing: 0.1,
    marginTop: 8,
    color: color.gray.two,
    width: 80,
    textAlign: "center",
  },
  ".MuiSvgIcon-root": {
    circle: {
      stroke: color.purple.two,
      color: color.white,
    },
    text: {
      fontSize: 12,
      fontWeight: 400,
      fill: color.purple.two,
    },
  },
  ".Mui-active": {
    svg: {
      fill: color.purple.two,
      text: {
        fill: color.white,
      },
    },
    color: color.gray.one,
    fontWeight: 500,
  },
  ".Mui-completed": {
    svg: {
      color: color.purple.two,
    },
    color: color.gray.two,
  },
});

import styled from "@emotion/styled";
import { Box, FormControl } from "@mui/material";
import { breakpoints, color, maxWidths } from "../../styles/theme";

export const AssessmentLayoutContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100vh",
  background: color.teal.five,
});

export const NavButtonContainerStyled = styled(Box)({
  width: "100%",
});

export const StyledFormControl = styled(FormControl)({
  width: "100%",
});

export const LayoutContainerWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0 16px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {},
  [`@media(min-width: ${breakpoints.desktop}px)`]: {},
});

export const LayoutContainerStyled = styled(Box)({
  width: "100%",
  maxWidth: maxWidths.mobile.content,
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    maxWidth: maxWidths.desktop.content,
  },
});

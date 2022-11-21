import styled from "@emotion/styled";
import { breakpoints, color, maxWidths } from "../../styles/theme";

export const LayoutContainerWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "80px 16px 0px",
  background: color.teal.five,
  "&.assessment": {
    padding: "0 16px 80px",
  },
  ".button-container": {
    width: maxWidths.mobile.buttons,
    margin: "0 auto",
  },
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    padding: "88px 112px 0px",
    ".button-container": {
      width: maxWidths.tablet.buttons,
    },
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    padding: "104px 162px 0px",
    ".button-container": {
      width: maxWidths.desktop.buttons,
    },
  },
});

export const LayoutContainerStyled = styled("div")({
  background: color.teal.five,
  width: "100%",
  maxWidth: maxWidths.mobile.content,
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    maxWidth: maxWidths.desktop.content,
  },
});

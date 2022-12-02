import styled from "@emotion/styled";
import { breakpoints, color, maxWidths } from "../../styles/theme";

export const LayoutContainerWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "80px 16px 0",
  background: color.teal.five,
  ".button-container": {
    maxWidth: maxWidths.mobile.buttons,
    margin: "0 auto",
    paddingBottom: "80px",
    a: {
      marginBottom: "16px",
    },
  },
  "&.nav-button": {
    paddingTop: "40px",
  },
  "&.error": {
    paddingTop: "56px",
  },
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    padding: "88px 112px 0",
    ".button-container": {
      maxWidth: maxWidths.tablet.buttons,
      paddingBottom: "88px",
    },
    "&.nav-button": {
      paddingTop: "46px",
    },
    "&.error": {
      paddingTop: "80px",
    },
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    padding: "104px 162px 0",
    ".button-container": {
      maxWidth: maxWidths.desktop.buttons,
      paddingBottom: "104px",
    },
    "&.nav-button": {
      paddingTop: "62px",
    },
    "&.error": {
      paddingTop: "104px",
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

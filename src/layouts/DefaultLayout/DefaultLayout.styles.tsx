import styled from "@emotion/styled";
import { breakpoints, color, maxWidths } from "../../styles/theme";

export const LayoutContainerWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const LayoutContainerStyled = styled("div")({
  margin: "0px 16px",
  background: color.teal.five,
  width: "100%",
  maxWidth: maxWidths.mobile.content,
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    maxWidth: maxWidths.desktop.content,
  },
});

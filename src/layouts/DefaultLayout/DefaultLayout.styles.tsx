import styled from "@emotion/styled";
import background from "../../images/background.png";
import { breakpoints, maxWidths } from "../../styles/theme";

export const LayoutContainerWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "80px 16px 0px",
  backgroundImage: `url(${background})`,
  backgroundRepeat: "repeat-y",
  backgroundSize: "100%",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    padding: "88px 112px 0px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    padding: "104px 162px 0px",
  },
});

export const LayoutContainerStyled = styled("div")({
  width: "100%",
  maxWidth: maxWidths.mobile.content,
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    maxWidth: maxWidths.desktop.content,
  },
});

import styled from "@emotion/styled";
import { breakpoints, color } from "../../styles/theme";

export const LayoutContainerStyled = styled("div")({
  margin: "0px 16px",
  background: color.teal.five,

  [`@media(min-width: ${breakpoints.mobile}px)`]: {
    margin: "0px 16px",
  },
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    margin: "0px 112px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    margin: "0px 162px",
  },
});

import styled from "@emotion/styled";
import { breakpoints, color, maxWidths } from "../../styles/theme";
import { LayoutContainerWrapperTypes } from "./DefaultLayout-types.d";

export const LayoutContainerWrapper = styled.div(
  (props: LayoutContainerWrapperTypes) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${props.isAssessmentLayout ? "40px" : "88px"} 16px 0px`,
    background: color.teal.five,

    [`@media(min-width: ${breakpoints.tablet}px)`]: {
      padding: `${props.isAssessmentLayout ? "46px" : "88px"} 112px 0px`,
    },
    [`@media(min-width: ${breakpoints.desktop}px)`]: {
      padding: `${props.isAssessmentLayout ? "62px" : "104px"} 162px 0px`,
    },
  }),
);

export const LayoutContainerStyled = styled("div")({
  background: color.teal.five,
  width: "100%",
  maxWidth: maxWidths.mobile.content,
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    maxWidth: maxWidths.desktop.content,
  },
});

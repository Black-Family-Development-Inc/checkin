import styled from "@emotion/styled";
import { breakpoints, color, maxWidths } from "../../styles/theme";
import { LayoutContainerWrapperTypes } from "./DefaultLayout-types.d";

export const LayoutContainerWrapper = styled.div(
  (props: LayoutContainerWrapperTypes) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${
      props.isAssessmentLayout ? "40px" : props.error ? "56px" : "88px"
    } 6px 0px`,
    background: color.teal.five,

    [`@media(min-width: ${breakpoints.tablet}px)`]: {
      padding: `${
        props.isAssessmentLayout ? "46px" : props.error ? "80px" : "88px"
      } 102px 0px`,
    },
    [`@media(min-width: ${breakpoints.desktop}px)`]: {
      padding: `${props.isAssessmentLayout ? "62px" : "104px"} 152px 0px`,
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

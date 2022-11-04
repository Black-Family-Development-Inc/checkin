import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { breakpoints } from "../../../../styles/theme";
import { Paragraph } from "../../../Paragraph";

export const AssessmentQuestionWrapperStyled = styled("div")({
  marginTop: "40px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    marginTop: "56px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    marginTop: "56px",
  },
  ".assessment-desc": {
    fontWeight: "500 !important",
    fontSize: "16px",
    [`@media(min-width: ${breakpoints.tablet}px)`]: {
      fontWeight: "700 !important",
      fontSize: "18px",
    },
    [`@media(min-width: ${breakpoints.desktop}px)`]: {
      fontWeight: "500 !important",
    },
  },
});

export const AssessmentQuestionBoxStyled = styled(Box)({
  marginTop: "24px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    marginTop: "32px",
  },
});

export const AssessmentQuestionStyled = styled(Box)({
  marginBottom: "56px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    marginBottom: "80px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    marginBottom: "104px",
  },
});

export const AssessmentQuestionParaStyled = styled(Paragraph)({
  fontSize: "18px",
});

import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { breakpoints } from "../../../../styles/theme";

export const AssessmentPageStyled = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "10px",
});

export const QuestionStyled = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "21px",
  marginTop: "36px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    marginTop: 48,
    marginBottom: 28,
  },
});

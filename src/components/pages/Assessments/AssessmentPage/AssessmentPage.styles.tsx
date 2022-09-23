import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const AssessmentPageStyled = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "10px",
});

export const AssessmentTitleStyled = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  fontSize: "24px",
  fontWeight: "600",
  width: "100%",
  // fontWeight: 600
});

export const AssessmentHeaderContainer = styled(Box)({
  width: "350px",
});

export const QuestionStyled = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "10px",
  marginTop: "30px",
});

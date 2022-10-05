import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

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
  fontFamily: "Inter",
  marginBottom: "8px",
});

export const AssessmentHeaderStyled = styled(Typography)({
  fontSize: "16px",
  fontWeight: "500",
  width: "100%",
  fontFamily: "Roboto",
  marginTop: "36px",
  marginBottom: "36px",
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

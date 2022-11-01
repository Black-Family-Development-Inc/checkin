import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const AssessmentPageStyled = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "10px",
});

export const AssessmentHeaderStyled = styled(Typography)({
  fontSize: "16px",
  fontWeight: "500",
  width: "100%",
  fontFamily: "Roboto",
  marginTop: "36px",
  marginBottom: "36px",
});

export const DirectionsStyled = styled(Box)({
  fontFamily: "inter",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "20px",
});

export const QuestionStyled = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "10px",
  marginTop: "30px",
});

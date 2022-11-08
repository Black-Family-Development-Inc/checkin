import styled from "@emotion/styled";
import { Box, Card, Typography } from "@mui/material";

export const CardStyled = styled(Card)({
  boxShadow:
    "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
  marginBottom: 13,
});

export const AccordionHeaderContainerStyled = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const SummaryContainer = styled(Box)({
  display: "flex",
  width: "118px",
  opacity: "0.6",
});

export const ScoreStyled = styled(Typography)({
  margin: "8px 0 24px 0",
  fontFamily: "Roboto",
  fontWeight: 500,
  fontSize: "18px",
  lineHeight: "21.09px",
  letterSpacing: "0.15px",
});

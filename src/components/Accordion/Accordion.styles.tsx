import styled from "@emotion/styled";
import { Box, Card, Typography } from "@mui/material";

export const CardStyled = styled(Card)({
  boxShadow:
    "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
  marginBottom: 13,
});

export const AccordionHeaderContainerStyled = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

export const CardHeaderStyled = styled(Typography)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Roboto",
  fontWeight: 700,
  fontSize: "16px",
  color: "#3D348B",
  margin: "31px 0 31px 16px",
});

export const SummaryContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "118px",
  opacity: "0.6",
});

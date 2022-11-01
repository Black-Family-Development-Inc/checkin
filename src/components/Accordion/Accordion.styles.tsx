import styled from "@emotion/styled";
import { Box, Card } from "@mui/material";

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

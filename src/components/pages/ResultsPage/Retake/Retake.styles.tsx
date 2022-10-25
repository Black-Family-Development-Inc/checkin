import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const TextStyled = styled(Typography)({
  fontFamily: "Inter",
  fontSize: "16px",
  maxWidth: "349px",
  fontWeight: 400,
  lineHeight: "20px",
});

export const RetakeAndStartOverStyled = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  border: "2px, solid, black",
  maxWidth: "343px",
  marginTop: "24px",
  marginBottom: "36px",
});

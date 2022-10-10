import { Box, Link } from "@mui/material";
import { styled } from "@mui/system";

export const UpperParagraphContainer = styled(Box)({
  marginTop: "12px",
  marginBottom: "16px",
});

export const BottomParagraphContainer = styled(Box)({
  display: "flex",
  marginTop: "18.5px",
});

export const IconContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "15px",
  marginLeft: "8px",
  opacity: "0.52",
});

export const TextContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "black",
});

export const ExternalLinkStyled = styled(Link)({
  color: "black",
  textDecorationColor: "black",
});

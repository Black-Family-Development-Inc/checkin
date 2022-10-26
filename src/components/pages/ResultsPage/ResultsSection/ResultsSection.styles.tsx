import { Box, Link } from "@mui/material";
import { styled } from "@mui/system";

export const UpperParagraphContainer = styled(Box)({
  marginTop: "12px",
  marginBottom: "16px",
});

export const BottomParagraphContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: "18.5px",
  width: "100%",
});

export const IconContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "15px",
  opacity: "0.52",
});

export const TextContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "black",
});

export const EmailExternalLinkStyled = styled(Link)({
  color: "black",
  textDecorationColor: "black",
});

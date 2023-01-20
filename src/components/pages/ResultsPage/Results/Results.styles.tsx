import { Box, Link } from "@mui/material";
import { styled } from "@mui/system";
import { breakpoints } from "../../../../styles/theme";
import { Paragraph } from "../../../Paragraph";

export const UpperParagraphSpacing = styled(Box)({
  margin: "16px 0 40px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    margin: "24px 0 56px",
  },
});

export const ScreenShotOrEmailContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  margin: "0 0 42px",
  width: "100%",
});

export const DisclaimerContainer = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
  margin: "0 0 58.5px",
  width: "100%",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    margin: "0 0 81.5px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    margin: "0 0 105.5px",
  },
});

export const IconContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "15px",
  opacity: "0.52",
});

export const EmailExternalLinkStyled = styled(Link)({
  color: "black",
  textDecorationColor: "black",
});

export const ResultScoreParagraphStyled = styled(Paragraph)({
  fontWeight: "500 !important",
});

import { Box, Link } from "@mui/material";
import { styled } from "@mui/system";
import { breakpoints } from "../../../../styles/theme";
import { Paragraph } from "../../../Paragraph";

export const UpperParagraphSpacing = styled(Box)({
  margin: "12px 0 40px 0",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    margin: "24px 0 56px 0",
  },
});

export const ScreenShotOrEmailContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  margin: "42.5px 0 48.5px 0",
  width: "100%",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    margin: "57.5px 0 81.5px 0",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    margin: "57.5px 0 105.5px 0",
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

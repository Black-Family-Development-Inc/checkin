import { Box, Divider } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "gatsby";
import { breakpoints } from "../../../styles/theme";

export const LinkStyled = styled(Link)({
  textDecorationLine: "none",
});

export const DividerStyled = styled(Divider)({
  width: "100%",
  margin: "48px 0",
  height: "1px",
});

export const TopParagraphSpacing = styled(Box)({
  marginBottom: "40px",
});

export const MiddleParagraphSpacing = styled(Box)({
  marginBottom: "24px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    marginBottom: "32px",
  },
});

export const BottomParagraphSpacing = styled(Box)({
  margin: "40px 0 24px 0",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    margin: "40px 0 32px 0",
  },
});

export const CallBFDIContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginBottom: "56px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    marginBottom: "88px",
  },
});

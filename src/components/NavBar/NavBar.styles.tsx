import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Link } from "gatsby";
import { breakpoints, color, maxWidths } from "../../styles/theme";

export const NavBarContainerStyled = styled(Box)({
  display: "flex",
  justifyContent: "center",
  padding: "0 16px",
  background: color.purple.two,
  height: "64px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    height: "86px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    height: "108px",
  },
});

export const NavBarContentStyled = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  maxWidth: maxWidths.mobile.content,
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    maxWidth: maxWidths.tablet.content,
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    maxWidth: maxWidths.desktop.content,
  },
});

export const NavBarLogoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const NavBarSVG = styled(Box)({
  width: "36px",
  height: "31px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    width: "45px",
    height: "39px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    width: "65px",
    height: "56px",
  },
});

const textStyles = {
  color: color.white,
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "16.41px",
  letterSpacing: "0.1px",
};

export const NavBarText = styled(Typography)({
  ...textStyles,
  marginLeft: "8px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    marginLeft: "16px",
    fontSize: "18px",
    lineHeight: "21.09px",
    letterSpacing: "0.15px",
  },
});

export const NavBarLink = styled(Link)({
  ...textStyles,
  display: "flex",
  height: "48px",
  alignItems: "center",
  textDecoration: "none",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    fontSize: "18px",
    lineHeight: "21.09px",
    letterSpacing: "0.15px",
  },
});

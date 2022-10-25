import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Link } from "gatsby";
import { breakpoints, color, maxWidths } from "../../styles/theme";

export const NavBarContainerStyled = styled(Box)({
  display: "flex",
  justifyContent: "center",
  padding: "10px 16px",
  background: color.purple.two,
});

export const NavBarContentStyled = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    maxWidth: maxWidths.desktop.content,
  },
});

export const NavBarLogoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const textStyles = {
  color: color.white,
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "19px",
  letterSpacing: "0.15px",
  [`@media(max-width: ${breakpoints.tablet}px)`]: {
    fontSize: "14px",
  },
};

export const NavBarText = styled(Typography)({
  ...textStyles,
  marginLeft: "8px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    marginLeft: "16px",
  },
});

export const NavBarLink = styled(Link)({
  ...textStyles,
  textDecoration: "none",
});

import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Link } from "gatsby";

export const NavBarContainerStyled = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 16px",
  background: "#633378",
});

export const NavBarLogoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const textStyles = {
  color: "white",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "19px",
  letterSpacing: "0.15px",
};

export const NavBarText = styled(Typography)({
  ...textStyles,
  marginLeft: "8px",
});

export const NavBarLink = styled(Link)({
  ...textStyles,
  textDecoration: "none",
});

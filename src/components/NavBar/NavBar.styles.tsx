import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Link } from "gatsby";

export const NavBarContainerStyled = styled(Box)({
  display: "flex",
  justifyContent: "center",
  padding: "10px 16px",
  background: "#633378",
});

export const NavBarContentStyled = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  "@media(min-width: 700px)": {
    width: "700px",
  },
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
  "@media(max-width: 370px)": {
    fontSize: "14px",
  },
};

export const NavBarText = styled(Typography)({
  ...textStyles,
  marginLeft: "8px",
  "@media(min-width: 370px)": {
    marginLeft: "16px",
  },
});

export const NavBarLink = styled(Link)({
  ...textStyles,
  textDecoration: "none",
});

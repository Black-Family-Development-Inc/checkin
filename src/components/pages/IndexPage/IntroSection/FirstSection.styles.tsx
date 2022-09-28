import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Link } from "gatsby";

export const FirstSectionLinkStyled = styled(Link)({
  textDecoration: "none",
});

export const FirstSectionButtonStyled = styled(Button)({
  padding: "10px 24px",
  background: "#000",
  borderRadius: "8px",
  width: "343px",
  height: "44px",
  color: "#fff",
  textDecoration: "none",
  marginTop: "20px",
  marginBottom: "66px",
});

export const FirstSectionTitleStyled = styled("h2")({
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "28px",
  color: "#000",
  marginBottom: "8px",
  marginTop: "36px",
});

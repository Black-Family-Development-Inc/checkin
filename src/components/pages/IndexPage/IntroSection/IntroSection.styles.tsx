import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "gatsby";

export const IntroSectionLinkStyled = styled(Link)({
  textDecoration: "none",

  "@media(max-width: 375px)": {
    width: "100%",
  },
});

export const ImageStyled = styled("img")({
  width: "100%",
});

export const IntroContent = styled("p")({
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "0.5px",
  color: "rgba(0, 0, 0, 0.87);",
  fontWeight: "400",
});

export const ButtonContainerStyled = styled(Box)({
  marginTop: "36px",
  marginBottom: "66px",
});

import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "gatsby";
import { breakpoints } from "../../../../styles/theme";

export const boxStyles = {
  marginTop: "56px",
  marginBottom: "56px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    marginTop: "80px",
    marginBottom: "80px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    marginTop: "104px",
    marginBottom: "104px",
  },
};

export const IntroSectionLinkStyled = styled(Link)({
  textDecoration: "none",

  "@media(max-width: 375px)": {
    width: "100%",
  },
});

export const ImageStyled = styled("img")({
  width: "100%",
});

export const ButtonContainerStyled = styled(Box)({
  marginTop: "36px",
  marginBottom: "66px",
});

export const ImageContainerStyled = styled(Box)({
  ".introSectionImage": {
    ...boxStyles,
  },
});

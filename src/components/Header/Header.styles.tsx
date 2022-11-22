import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { breakpoints } from "../../styles/theme";
import { HeaderStyledProps } from "./Header-types";

export const HeaderStyled = styled(Typography)((props: HeaderStyledProps) => ({
  fontFamily: "Rubik",
  fontSize: `${props.error ? 34 : 24}px`,
  fontWeight: 600,
  lineHeight: "28.44px",
  marginBottom: `${props.error ? 40 : 8}px`,
  width: "100%",

  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    fontSize: `${props.error ? 48 : 34}px`,
    lineHeight: "40.29px",
    letterSpacing: "0.25px",
    marginBottom: `${props.error ? 48 : 16}px`,
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    fontSize: "48px",
    lineHeight: "56.88px",
    letterSpacing: 0,
    marginBottom: `${props.error ? 56 : 16}px`,
  },
}));

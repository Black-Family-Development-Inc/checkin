import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { breakpoints } from "../../styles/theme";

export const HeaderStyled = styled(Typography)({
  fontFamily: "Rubik",
  fontSize: "24px",
  fontWeight: 600,
  letterSpacing: "0px",
  textAlign: "left",
  marginTop: "104px",
  "@media (max-width: 544px)": {
    marginTop: "56px",
  },
  "@media (min-width: 545px) and (max-width: 991.98px)": {
    marginTop: "80px",
  },
  lineHeight: "28.44px",
  marginBottom: "8px",
  width: "100%",

  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    fontSize: "34px",
    lineHeight: "40.29px",
    letterSpacing: "0.25px",
    marginBottom: "16px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    fontSize: "48px",
    lineHeight: "56.88px",
    letterSpacing: 0,
  },
});

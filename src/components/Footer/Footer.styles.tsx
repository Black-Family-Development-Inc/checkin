import { styled } from "@mui/system";
import { breakpoints, color } from "../../styles/theme";

export const FooterStyled = styled("footer")({
  padding: "32px 16px",
  background: color.purple.two,
  color: color.white,
  ".footer-link": {
    marginBottom: "17px",
    display: "inline-block",
  },

  p: {
    fontSize: "12px",
    fontWeight: "500",
    lineHeight: "14.06px",
    letterSpacing: "0.1px",
    marginBottom: "17px",
  },
  a: {
    color: color.white,
    fontSize: "12px",
    fontWeight: "500",
    textDecorationColor: color.white,
  },
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    padding: "32px 112px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    padding: "32px 162px",
  },
});

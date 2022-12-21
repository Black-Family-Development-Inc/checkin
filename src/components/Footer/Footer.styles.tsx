import { styled } from "@mui/system";
import { breakpoints, color, maxWidths } from "../../styles/theme";

export const FooterStyled = styled("footer")({
  display: "flex",
  justifyContent: "center",
  height: "188px",
  padding: "0 16px",
  flexShrink: 0,
  background: color.purple.two,
  color: color.white,
});

export const FooterContentStyled = styled("div")({
  paddingTop: "32px",
  width: "100%",
  maxWidth: maxWidths.mobile.content,
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
    padding: "17px",
    margin: "0 -17px",
  },
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    maxWidth: maxWidths.tablet.content,
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    maxWidth: maxWidths.desktop.content,
  },
});

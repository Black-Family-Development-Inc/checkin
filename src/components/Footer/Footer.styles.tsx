import { styled } from "@mui/system";
import { breakpoints, color } from "../../styles/theme";

export const FooterStyled = styled("footer")({
  height: 100,
  padding: "32px 16px",
  background: color.purple.two,
  color: color.white,
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    padding: "32px 112px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    padding: "32px 162px",
  },
});

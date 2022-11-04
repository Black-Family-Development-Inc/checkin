import { styled } from "@mui/system";
import { breakpoints, color } from "../../styles/theme";

export const HRStyled = styled("hr")({
  margin: 0,
  width: 80,
  height: 4,
  background: color.teal.two,
  borderRadius: 1,
  borderStyle: "none",
  borderWidth: 0,
  marginBottom: "16px",

  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    width: 120,
    height: 6,
    marginBottom: "24px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    width: 140,
  },
});

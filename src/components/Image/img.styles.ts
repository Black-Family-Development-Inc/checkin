import { styled } from "@mui/system";
import { breakpoints } from "../../styles/theme";

export const ImageStyled = styled("img")({
  width: "100%",
  [`@media(min-width: ${breakpoints.mobile}px)`]: {
    marginTop: "56px",
    marginBottom: "56px",
  },
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    marginTop: "80px",
    marginBottom: "80px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    marginTop: "104px",
    marginBottom: "104px",
  },
});

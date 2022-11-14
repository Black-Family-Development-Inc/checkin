import styled from "@emotion/styled";
import { breakpoints } from "../../../styles/theme";

export const CardBox = styled("div")({
  marginTop: "40px",
  marginBottom: "80px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    marginBottom: "88px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    marginBottom: "104px",
  },
});

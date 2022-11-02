import { breakpoints } from "./theme";

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

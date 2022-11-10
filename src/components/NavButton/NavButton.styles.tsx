import { styled } from "@mui/system";
import { Link } from "gatsby";
import { breakpoints } from "../../styles/theme";

export const LinkStyled = styled(Link)({
  textDecorationLine: "none",
  display: "inline-block",
  height: "48px",
  marginTop: "24px",
  marginBottom: "8px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    marginTop: "32px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    marginTop: "48px",
  },

  ".nav-icon": {
    width: "16px",
    height: "16px",
    marginRight: "8px",
    [`@media(min-width: ${breakpoints.tablet}px)`]: {
      width: "24px",
      height: "24px",
    },
  },
});

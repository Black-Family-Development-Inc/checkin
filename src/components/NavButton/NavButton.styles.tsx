import { styled } from "@mui/system";
import { Link } from "gatsby";
import { breakpoints } from "../../styles/theme";

export const LinkStyled = styled(Link)({
  textDecorationLine: "none",
  ".nav-icon": {
    width: "14px",
    height: "14px",
    marginRight: "8px",
    [`@media(min-width: ${breakpoints.tablet}px)`]: {
      width: "28px",
      height: "28px",
      marginRight: "8px",
    },
    [`@media(min-width: ${breakpoints.desktop}px)`]: {
      width: "28px",
      height: "28px",
      marginRight: "8px",
    },
  },
});

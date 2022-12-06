import styled from "@emotion/styled";
import MuiAlert from "@mui/material/Alert";
import { breakpoints, color } from "../../styles/theme";

export const AlertStyled = styled(MuiAlert)({
  padding: "28px 0",
  color: color.error,
  justifyContent: "space-between",
  fontSize: "16px",
  ".MuiAlert-message": {
    width: "100%",
    padding: "0",
    lineHeight: "21px",
  },
  ".MuiAlert-icon": {
    margin: "0 -8px 0 0",
    padding: "0 0 0 8px",
    color: color.error,
    minWidth: "72px",
    justifyContent: "center",
  },
  ".MuiAlert-action": {
    margin: "-3px 0 0 -8px",
    padding: "0 8px 0 0",
    minWidth: "72px",
    justifyContent: "center",
  },
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    fontSize: "18px",
  },
});

export const AlertLink = styled.a`
  color: ${color.purple.two};
`;

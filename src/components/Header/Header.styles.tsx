import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const HeaderStyled = styled(Typography)({
  fontFamily: "Rubik",
  fontSize: "24px",
  fontWeight: 600,
  lineHeight: "28px",
  letterSpacing: "0px",
  textAlign: "left",
  marginBottom: 8,
  marginTop: "104px",
  "@media (max-width: 544px)": {
    marginTop: "56px",
  },
  "@media (min-width: 545px) and (max-width: 991.98px)": {
    marginTop: "80px",
  },
});

import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { breakpoints, color } from "../../styles/theme";

export const TypographyStyled = styled(Typography)({
  color: color.gray.one,
  fontFamily: "Roboto",
  fontSize: "16px",
  lineHeight: "19px",
  letterSpacing: "0.15px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    fontSize: 18,
    lineHeight: "21.09px",
  },
});

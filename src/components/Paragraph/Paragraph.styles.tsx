import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { breakpoints, color } from "../../styles/theme";

export const TypographyStyled = styled(Typography)({
  color: color.gray.one,
  fontFamily: "Roboto",
  lineHeight: "18.75px",
  letterSpacing: "0.15px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    lineHeight: "21.09px",
  },
});

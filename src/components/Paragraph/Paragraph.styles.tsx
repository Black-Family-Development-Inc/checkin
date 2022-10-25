import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { color } from "../../styles/colors";

export const TypographyStyled = styled(Typography)({
  color: color.gray.one,
  fontFamily: "Roboto",
  fontSize: "16px",
  lineHeight: "19px",
  letterSpacing: "0.15px",
  "@media(min-width: 768px)": {
    fontSize: 18,
  },
});

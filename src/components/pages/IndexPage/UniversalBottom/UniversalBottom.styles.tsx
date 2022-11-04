import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { breakpoints } from "../../../../styles/theme";
import { Paragraph } from "../../../Paragraph";

export const ButtonContainerStyled = styled(Box)({
  marginTop: "40px",
  marginBottom: "0px",
});

export const ParagraphWrapperStyled = styled(Paragraph)({
  ".universial-ass-desc": {
    fontWeight: "400",
    [`@media(min-width: ${breakpoints.tablet}px)`]: {
      fontWeight: "500",
    },
    [`@media(min-width: ${breakpoints.desktop}px)`]: {
      fontWeight: "400",
    },
  },
});

import { ButtonGroup } from "@mui/material";
import { styled } from "@mui/system";
import { breakpoints } from "../../../../styles/theme";

export const AnswerButtonGroupStyled = styled(ButtonGroup)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "center",
  width: "100%",
  maxWidth: "360px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    width: "100%",
    maxWidth: "360px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    width: "100%",
    maxWidth: "400px",
  },
});

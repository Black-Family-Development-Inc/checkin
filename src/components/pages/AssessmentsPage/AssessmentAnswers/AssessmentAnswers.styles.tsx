import { ButtonGroup } from "@mui/material";
import { styled } from "@mui/system";
import { breakpoints, maxWidths } from "../../../../styles/theme";

export const AnswerButtonGroupStyled = styled(ButtonGroup)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "center",
  marginBottom: 20,
  width: "100%",
  maxWidth: maxWidths.mobile.buttons,
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    maxWidth: maxWidths.tablet.buttons,
    marginBottom: 36,
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    maxWidth: maxWidths.desktop.buttons,
  },
});

import { FormControl, styled } from "@mui/material";
import { maxWidths } from "../../styles/theme";

export const StyledFormControl = styled(FormControl)({
  maxWidth: maxWidths.mobile.buttons,
  "@media(min-width: 768px)": {
    width: "100%",
    maxWidth: maxWidths.tablet.buttons,
  },
  "@media(min-width: 1024px)": {
    width: "100%",
    maxWidth: maxWidths.desktop.buttons,
  },
});

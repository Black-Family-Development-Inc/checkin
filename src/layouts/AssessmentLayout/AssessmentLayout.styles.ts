import styled from "@emotion/styled";
import { Box, FormControl } from "@mui/material";
import { maxWidths } from "../../styles/theme";

export const NavButtonContainerStyled = styled(Box)({
  width: "100%",
});

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

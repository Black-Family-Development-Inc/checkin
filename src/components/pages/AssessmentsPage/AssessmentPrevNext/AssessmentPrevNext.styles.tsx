import { Box, styled } from "@mui/material";
import { breakpoints } from "../../../../styles/theme";

export const PrevNextContainerStyled = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  marginBottom: 60,
  padding: "10px 0",
  width: "100%",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    marginBottom: 68,
  },
});

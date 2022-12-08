import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { breakpoints } from "../../../../styles/theme";

export const OtherResourcesContainer = styled(Box)({
  margin: "56px 0 80px 0",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    margin: "80px 0 88px 0",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    margin: "104px 0",
  },
});

import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { breakpoints } from "../../../../styles/theme";

export const UpperAndMiddleParagraphSpacing = styled(Box)({
  marginTop: "40px",
  marginBottom: "24px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    marginBottom: "32px",
  },
});

export const BottomParagraphSpacing = styled(Box)({
  margin: "48px 0 34px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    margin: "56px 0 42px",
  },
});

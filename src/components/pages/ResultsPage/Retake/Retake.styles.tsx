import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "gatsby";
import { breakpoints } from "../../../../styles/theme";

export const ParagraphSpacing = styled(Box)({
  marginTop: "72px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    marginTop: "96px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    marginTop: "120px",
  },
});

export const RetakeAndStartOverContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  margin: "24px 0 56px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    gap: "24px",
    margin: "32px 0 80px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    marginBottom: "104px",
  },
});

export const LinkStyled = styled(Link)({
  textDecoration: "none",
  flex: 1,
});

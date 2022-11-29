import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "gatsby";
import { breakpoints } from "../../../../styles/theme";

export const ParagraphSpacing = styled(Box)({
  marginTop: "72px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    marginTop: "100px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    marginTop: "120px",
  },
});

export const RetakeAndStartOverContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  margin: "24px 0 56px 0",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    gap: "24px",
    margin: "32px 0 80px 0",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    margin: "32px 0 104px 0",
  },
});

const LinkStyles = {
  textDecoration: "none",
  flex: 1,
};

export const LeftLinkStyled = styled(Link)({
  ...LinkStyles,
});

export const RightLinkStyled = styled(Link)({
  ...LinkStyles,
});

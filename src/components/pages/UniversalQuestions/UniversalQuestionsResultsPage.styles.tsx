import { Box, Divider, Link as MuiLink } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "gatsby";

export const LinkStyled = styled(Link)({
  textDecorationLine: "none",
});

export const MuiLinkStyled = styled(MuiLink)({
  textDecorationLine: "none",
});

export const FlexCenterContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
});

export const DividerStyled = styled(Divider)({
  width: "343px",
  margin: "48px 0",
  height: "1px",
});

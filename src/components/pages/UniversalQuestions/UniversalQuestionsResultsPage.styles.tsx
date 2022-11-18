import { Box, Divider } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "gatsby";

export const LinkStyled = styled(Link)({
  textDecorationLine: "none",
});

export const FlexCenterContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  padding: 0,
});

export const DividerStyled = styled(Divider)({
  width: "100%",
  margin: "48px 0",
  height: "1px",
});

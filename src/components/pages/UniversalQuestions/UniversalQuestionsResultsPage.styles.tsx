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

export const TopParagraphStyled = styled(Box)({
  marginBottom: "40px",
});

export const MiddleParagraphStyled = styled(Box)({
  marginBottom: "24px",
});

export const BottomParagraphStyled = styled(Box)({
  margin: "40px 0 24px 0",
});

export const BottomButtonStyled = styled(Box)({
  margin: "",
});

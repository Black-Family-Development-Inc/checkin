import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { PrevNextStyledProps } from "./assessmentPrevNext-types";

export const PrevNextContainerStyled = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "10px",
});

const preventDomList = (prop: string) =>
  prop !== "bgColor" && prop !== "cursor";

export const NextResultButtonStyled = styled(Button, {
  shouldForwardProp: (prop) => preventDomList(prop),
})<PrevNextStyledProps>(({ bgColor, cursor = "pointer" }) => ({
  width: "120px",
  fontSize: "18px",
  color: "white",
  borderRadius: "8px",
  backgroundColor: bgColor,
  fontFamily: "roboto",
  fontWeight: 600,
  textTransform: "none",
  ":hover": {
    backgroundColor: bgColor,
    cursor: cursor,
  },
}));

export const PreviousButtonStyled = styled(Button, {
  shouldForwardProp: (prop) => preventDomList(prop),
})<PrevNextStyledProps>((props) => ({
  width: "55px",
  height: "24px",
  fontSize: "14px",
  marginRight: "20px",
  color: props.bgColor,
  borderRadius: "8px",
  fontFamily: "roboto",
  fontWeight: 600,
  textTransform: "none",
  textDecorationLine: "underline",
  ":hover": {
    textDecorationLine: "underline",
    color: props.bgColor,
    cursor: props.cursor,
    backgroundColor: "transparent",
  },
}));

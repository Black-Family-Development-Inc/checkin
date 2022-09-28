import { Button, ButtonGroup } from "@mui/material";
import { styled } from "@mui/system";
import { AnswerButtonStyledProps } from "./AnswerButton-types";

const preventDomList = ["answer", "currentAnswer"];

export const AnswerButtonStyled = styled(Button, {
  shouldForwardProp: (prop) => {
    let isTrue = false;
    preventDomList.forEach((attribute) => {
      isTrue = prop !== attribute;
    });
    return isTrue;
  },
})<AnswerButtonStyledProps>((props) => ({
  padding: 10,
  margin: 10,
  width: "343px",
  fontSize: "18px",
  color: "black",
  borderRadius: "8px",
  backgroundColor: props.currentAnswer === props.answer ? "#b8b4b7" : "#E6E1E5",
  border: "2px solid black",
  fontFamily: "roboto",
  textTransform: "none",
  ":hover": {
    backgroundColor:
      props.currentAnswer === props.answer ? "#b8b4b7" : "#E6E1E5",
    border: "2px solid black",
  },
}));

export const AnswerButtonGroupStyled = styled(ButtonGroup)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

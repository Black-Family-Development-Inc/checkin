import { Button, ButtonGroup } from "@mui/material";
import { styled } from "@mui/system";
import { ButtonStyledProps } from "./AssessmentButton-types";

export const AssessmentButtonStyled = styled(Button, {
  shouldForwardProp: (prop) => prop !== "answer" && prop !== "currentanswer",
})<ButtonStyledProps>((props) => ({
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

export const ButtonGroupStyled = styled(ButtonGroup)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // border: "2px solid black",
});

export const ButtonStyled = styled(Button)({
  padding: 10,
  margin: 20,
  width: "343px",
  ":hover": {
    background: "none",
  },
  fontWeight: "bold",
  fontSize: "15px",
  color: "black",
});

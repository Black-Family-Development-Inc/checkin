import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { AnswerStyledProps } from "./MultiButton-types";

const preventDomList = (prop: string | number | symbol) =>
  prop !== "cursor" && prop !== "answer" && prop !== "currentAnswer";

const answerAssessUniversal: Object = {
  padding: 10,
  margin: 10,
  width: "343px",
  fontSize: "18px",
  color: "black",
  borderRadius: "8px",
  backgroundColor: "#E6E1E5",
  border: "1px solid black",
  fontFamily: "Roboto",
  textTransform: "none",
  ":hover": {
    backgroundColor: "#E6E1E5",
    border: "1px solid black",
  },
};

export const AssessmentStyled = styled(Button)({
  ...answerAssessUniversal,
});

export const UniversalStyled = styled(Button)({
  ...answerAssessUniversal,
  color: "white",
  backgroundColor: "black",
  ":hover": {
    backgroundColor: "black",
  },
});

export const AnswerStyled = styled(Button, {
  shouldForwardProp: (prop) => preventDomList(prop),
})<AnswerStyledProps>((props) => ({
  ...answerAssessUniversal,
  backgroundColor: props.currentAnswer === props.answer ? "#b8b4b7" : "#E6E1E5",
  ":hover": {
    backgroundColor:
      props.currentAnswer === props.answer ? "#b8b4b7" : "#E6E1E5",
  },
}));

const nextAndResult: Object = {
  width: "120px",
  fontSize: "18px",
  color: "white",
  borderRadius: "8px",
  backgroundColor: "black",
  fontFamily: "Roboto",
  fontWeight: 600,
  textTransform: "none",
  ":hover": {
    backgroundColor: "black",
  },
};

export const NextStyled = styled(Button)({
  ...nextAndResult,
});

export const ResultStyled = styled(Button)({
  ...nextAndResult,
});

export const PreviousStyled = styled(Button)({
  width: "55px",
  height: "24px",
  fontSize: "14px",
  marginRight: "20px",
  color: "black",
  borderRadius: "8px",
  fontFamily: "Roboto",
  fontWeight: 600,
  textTransform: "none",
  textDecorationLine: "underline",
  ":hover": {
    textDecorationLine: "underline",
  },
});

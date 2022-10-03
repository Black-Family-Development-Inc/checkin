import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "gatsby";
import { AnswerStyledProps } from "./MultiButton-types";

const answerAssessUniversal: Object = {
  width: "343px",
  height: "44px",
  padding: "10px 24px",
  fontSize: "18px",
  fontWeight: 600,
  color: "black",
  borderRadius: "8px",
  backgroundColor: "#E6E1E5",
  border: "2px solid black",
  fontFamily: "Roboto",
  textTransform: "none",
  textDecorationLine: "none",
  ":hover": {
    backgroundColor: "#E6E1E5",
    border: "2px solid black",
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

export const LinkStyled = styled(Link)({
  display: "flex",
  justifyContent: "center",
  textDecoration: "none",
});

const preventDomList = (prop: string | number | symbol) =>
  prop !== "label" && prop !== "usersCurrentAnswer";

export const AnswerStyled = styled(Button, {
  shouldForwardProp: (prop) => preventDomList(prop),
})<AnswerStyledProps>((props) => ({
  ...answerAssessUniversal,
  margin: "10px",
  backgroundColor:
    props.usersCurrentAnswer === props.label ? "#b8b4b7" : "#E6E1E5",
  ":hover": {
    backgroundColor:
      props.usersCurrentAnswer === props.label ? "#b8b4b7" : "#E6E1E5",
    border: "2px solid black",
  },
}));

export const NextAndResultStyled = styled(Button)({
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
});

export const PreviousStyled = styled(Button)({
  width: "55px",
  height: "24px",
  fontSize: "14px",
  marginRight: "20px",
  color: "black",
  borderRadius: "8px",
  fontFamily: "Roboto",
  fontWeight: 500,
  textTransform: "none",
  textDecorationLine: "underline",
  ":hover": {
    textDecorationLine: "underline",
  },
});

export const ResultsPageSmallStyled = styled(Button)({
  ...answerAssessUniversal,
  width: "162px",
});

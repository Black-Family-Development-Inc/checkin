import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { AssessmentStyledProps, NextStyledProps } from "./MultiButton-types";

const preventDomList = ["answer", "currentAnswer", "backgroundColor"];

// const domListChecker = (prop: PropertyKey) => {
//     let isTrue = false;
//     preventDomList.forEach((attribute) => {
//       isTrue = prop !== attribute;
//     });
//     return isTrue;
// };

export const AssessmentButtonStyled = styled(Button, {
  shouldForwardProp: (prop) => {
    let isTrue = false;
    preventDomList.forEach((attribute) => {
      isTrue = prop !== attribute;
    });
    return isTrue;
  },
})<AssessmentStyledProps>((props) => ({
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

export const NextButtonStyled = styled(Button, {
  shouldForwardProp: (prop) => {
    let isTrue = false;
    preventDomList.forEach((attribute) => {
      isTrue = prop !== attribute;
    });
    return isTrue;
  },
})<NextStyledProps>((props) => ({
  width: "120px",
  fontSize: "18px",
  color: "white",
  borderRadius: "8px",
  backgroundColor: props.backgroundColor,
  fontFamily: "roboto",
  fontWeight: 600,
  textTransform: "none",
  ":hover": {
    backgroundColor: props.backgroundColor,
  },
}));

export const PreviousButtonStyled = styled(Button)({
  width: "55px",
  height: "24px",
  fontSize: "14px",
  marginRight: "20px",
  color: "black",
  borderRadius: "8px",
  fontFamily: "roboto",
  fontWeight: 600,
  textTransform: "none",
  textDecorationLine: "underline",
  ":hover": {
    textDecorationLine: "underline",
  },
});

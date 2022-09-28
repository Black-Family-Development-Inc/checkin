import React from "react";
import {
  AnswerStyled,
  AssessmentStyled,
  NextStyled,
  PreviousStyled,
  ResultStyled,
  UniversalStyled,
} from "./MultiButton.styles";
import { MultiButtonPropType } from "./MultiButton-types";

const MultiButton = (props: MultiButtonPropType) => {
  const buttons = {
    universal: (
      <UniversalStyled onClick={props.onClick}>{props.label}</UniversalStyled>
    ),
    assessment: (
      <AssessmentStyled onClick={props.onClick}>{props.label}</AssessmentStyled>
    ),
    answer: (
      <AnswerStyled answer={props.answer} currentAnswer={props.currentAnswer}>
        {props.label}
      </AnswerStyled>
    ),
    next: <NextStyled onClick={props.onClick}>{props.label}</NextStyled>,
    result: <ResultStyled onClick={props.onClick}>{props.label}</ResultStyled>,
    previous: (
      <PreviousStyled onClick={props.onClick}>{props.label}</PreviousStyled>
    ),
  };
  return buttons[props.version as keyof typeof buttons];
};

export default MultiButton;

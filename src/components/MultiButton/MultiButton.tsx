import React from "react";
import {
  AnswerStyled,
  AssessmentStyled,
  LinkStyled,
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
      <LinkStyled to={props.link}>
        <AssessmentStyled onClick={props.onClick}>
          {props.label}
        </AssessmentStyled>
      </LinkStyled>
    ),
    answer: (
      <AnswerStyled
        onClick={props.onClick}
        label={props.label}
        usersCurrentAnswer={props.usersCurrentAnswer}
      >
        {props.label}
      </AnswerStyled>
    ),
    next: <NextStyled onClick={props.onClick}>{props.label}</NextStyled>,
    results: <ResultStyled onClick={props.onClick}>{props.label}</ResultStyled>,
    previous: (
      <PreviousStyled onClick={props.onClick}>{props.label}</PreviousStyled>
    ),
  };
  return buttons[props.version as keyof typeof buttons];
};

export default MultiButton;

import React from "react";
import {
  AnswerStyled,
  AssessmentStyled,
  LinkStyled,
  NextAndResultStyled,
  PreviousStyled,
  ResultsPageSmallStyled,
  UniversalStyled,
} from "./MultiButton.styles";
import { MultiButtonPropType } from "./MultiButton-types";

const MultiButton = (props: MultiButtonPropType) => {
  const buttons = {
    universal: (
      <LinkStyled to={props.link ? props.link : "/"}>
        <UniversalStyled>{props.label}</UniversalStyled>
      </LinkStyled>
    ),
    assessment: (
      <LinkStyled to={props.link ? props.link : "/"}>
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
    next: (
      <NextAndResultStyled onClick={props.onClick}>
        {props.label}
      </NextAndResultStyled>
    ),
    results: (
      <NextAndResultStyled onClick={props.onClick}>
        {props.label}
      </NextAndResultStyled>
    ),
    previous: (
      <PreviousStyled onClick={props.onClick}>{props.label}</PreviousStyled>
    ),
    retake: (
      <LinkStyled to={props.link ? props.link : "/"}>
        <ResultsPageSmallStyled onClick={props.onClick}>
          {props.label}
        </ResultsPageSmallStyled>
      </LinkStyled>
    ),
    startOver: (
      <LinkStyled to={props.link ? props.link : "/"}>
        <ResultsPageSmallStyled onClick={props.onClick}>
          {props.label}
        </ResultsPageSmallStyled>
      </LinkStyled>
    ),
  };
  return buttons[props.version as keyof typeof buttons];
};

export default MultiButton;

import React from "react";
import {
  AllArticlesStyled,
  AnswerStyled,
  AssessmentStyled,
  NextAndResultStyled,
  PhoneNumberStyled,
  PreviousStyled,
  ResultsPageSmallStyled,
  UniversalStyled,
} from "./MultiButton.styles";
import { MultiButtonPropType } from "./MultiButton-types";

const MultiButton = (props: MultiButtonPropType) => {
  const buttons = {
    universal: <UniversalStyled>{props.label}</UniversalStyled>,
    assessment: (
      <AssessmentStyled onClick={props.onClick}>{props.label}</AssessmentStyled>
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
      <ResultsPageSmallStyled onClick={props.onClick}>
        {props.label}
      </ResultsPageSmallStyled>
    ),
    startOver: (
      <ResultsPageSmallStyled onClick={props.onClick}>
        {props.label}
      </ResultsPageSmallStyled>
    ),
    phoneNumber: (
      <PhoneNumberStyled id={props.phoneNumber}>
        {props.label}
      </PhoneNumberStyled>
    ), //id is just a placeholder for what needs to be done with phoneNumber in a future card web/mobile functionality
    allArticles: (
      <AllArticlesStyled onClick={props.onClick}>
        {props.label}
      </AllArticlesStyled>
    ),
  };
  return buttons[props.version as keyof typeof buttons];
};

export default MultiButton;

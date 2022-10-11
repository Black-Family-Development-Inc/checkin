import React from "react";
import {
  AllArticlesStyled,
  AnswerStyled,
  AssessmentStyled,
  NavButtonStyled,
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
    navButton: (
      <NavButtonStyled onClick={props.onClick}>
        {props.children} {props.label}
      </NavButtonStyled>
    ),
    phoneNumber: (
      <PhoneNumberStyled to={`tel:${props.phoneNumber}`}>
        {props.label}
      </PhoneNumberStyled>
    ),
    allArticles: (
      <AllArticlesStyled to={props.link || ""}>{props.label}</AllArticlesStyled>
    ),
  };
  return buttons[props.version as keyof typeof buttons];
};

export default MultiButton;

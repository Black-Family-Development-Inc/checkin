import { Link } from "@mui/material";
import React from "react";
import {
  AllArticlesStyled,
  AnswerStyled,
  AssessmentStyled,
  ExternalLinkStyled,
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
      <PhoneNumberStyled href={`tel:${props.phoneNumber}`} type={props.type}>
        {props.label}
      </PhoneNumberStyled>
    ),
    phoneNumberBasic: <Link href={props.link}>{props.label}</Link>,
    allArticles: (
      <AllArticlesStyled to={props.link || ""}>{props.label}</AllArticlesStyled>
    ),
    externalLink: (
      <ExternalLinkStyled
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.label}
      </ExternalLinkStyled>
    ),
    externalLinkBasic: (
      <Link href={props.link} target="_blank" rel="noopener noreferrer">
        {props.label}
      </Link>
    ),
  };
  return buttons[props.version as keyof typeof buttons];
};

export default MultiButton;

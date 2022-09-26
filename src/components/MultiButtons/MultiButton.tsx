import { Box } from "@mui/material";
import React from "react";
import {
  AssessmentButtonStyled,
  NextButtonStyled,
  PreviousButtonStyled,
} from "./MultiButton.styles";
import { MultiButtonPropType } from "./MultiButton-types";

const MultiButton = (props: MultiButtonPropType) => {
  const buttons = {
    assessment: (
      <AssessmentButtonStyled
        answer={props.answer}
        currentAnswer={props.currentAnswer}
      >
        {props.label}
      </AssessmentButtonStyled>
    ),
    next: (
      <Box onClick={props.onClick}>
        <NextButtonStyled backgroundColor={props.backgroundColor}>
          {props.label}
        </NextButtonStyled>
      </Box>
    ),
    previous: (
      <Box onClick={props.onClick}>
        <PreviousButtonStyled>{props.label}</PreviousButtonStyled>
      </Box>
    ),
  };
  return buttons[props.version];
};

export default MultiButton;

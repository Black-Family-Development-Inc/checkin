import React from "react";
import { AnswerButtonStyled } from "./AnswerButton.styles";
import { AnswerButtonType } from "./AnswerButton-types";

const AnswerButton = ({
  answer,
  handleAnswerClick,
  usersCurrentAnswer,
}: AnswerButtonType) => {
  return (
    <AnswerButtonStyled
      currentAnswer={usersCurrentAnswer}
      answer={answer.text}
      onClick={() => handleAnswerClick(answer)}
    >
      {answer.text}
    </AnswerButtonStyled>
  );
};

export default AnswerButton;

import { Box } from "@mui/material";
import React from "react";
import { AnswerButtonStyled } from "./AnswerButton.styles";
import { AnswerButtonType } from "./AnswerButton-types";

const AnswerButton = ({
  answer,
  handleAnswerClick,
  usersCurrentAnswer,
}: AnswerButtonType) => {
  return (
    <>
      <Box onClick={() => handleAnswerClick(answer)}>
        <AnswerButtonStyled
          currentAnswer={usersCurrentAnswer}
          answer={answer.text}
        >
          {answer.text}
        </AnswerButtonStyled>
      </Box>
    </>
  );
};

export default AnswerButton;

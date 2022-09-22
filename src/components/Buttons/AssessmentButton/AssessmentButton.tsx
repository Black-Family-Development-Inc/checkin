import { Box } from "@mui/material";
import React from "react";
import { AssessmentButtonStyled } from "./AssessmentButton.styles";
import { AnswerButtonType } from "./AssessmentButton-types";

const AssessmentButton = ({
  answer,
  handleAnswerClick,
  usersCurrentAnswer,
}: AnswerButtonType) => {
  return (
    <>
      <Box onClick={() => handleAnswerClick(answer)}>
        <AssessmentButtonStyled
          currentanswer={usersCurrentAnswer}
          answer={answer.text}
        >
          {answer.text}
        </AssessmentButtonStyled>
      </Box>
    </>
  );
};

export default AssessmentButton;

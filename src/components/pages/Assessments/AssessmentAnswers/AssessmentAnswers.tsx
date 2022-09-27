import { Box } from "@mui/material";
import React from "react";
import {
  AnswerOption,
  AnswerTypes,
} from "../../../../pages/assessments/AssessmentPage-types";
import AnswerButton from "../AnswerButton/AnswerButton";
import { AnswerButtonGroupStyled } from "../AnswerButton/AnswerButton.styles";
import { AssessmentAnswersProps } from "./assessmentAnswers-types";

const AssessmentAnswers = ({
  currentQuestion,
  answers,
  currentQuestionIdx,
  usersSavedQuestions,
  setUsersSavedQuestions,
}: AssessmentAnswersProps) => {
  const getAppropriateAnswers = () => {
    if (currentQuestion.questionType === "custom" && currentQuestion.answers) {
      return currentQuestion.answers;
    }
    const currentQuestionType = currentQuestion.questionType as
      | AnswerTypes.Binary
      | AnswerTypes.Scale;
    return answers[currentQuestionType];
  };

  const handleAnswerClick = ({ text, score }: AnswerOption) => {
    const triggered = currentQuestion.triggerAnswer === text;

    const updatedSavedQuestions = usersSavedQuestions.map((saved) => {
      if (saved.question === currentQuestion.text) {
        return { ...saved, answer: text, score, triggered };
      }
      return { ...saved };
    });
    setUsersSavedQuestions(updatedSavedQuestions);
  };

  const usersCurrentAnswer = usersSavedQuestions[currentQuestionIdx]?.answer;
  return (
    <AnswerButtonGroupStyled>
      {getAppropriateAnswers()?.map((answer: AnswerOption, i: number) => (
        <Box key={i}>
          <AnswerButton
            answer={answer}
            handleAnswerClick={handleAnswerClick}
            usersCurrentAnswer={usersCurrentAnswer}
          />
        </Box>
      ))}
    </AnswerButtonGroupStyled>
  );
};

export default AssessmentAnswers;

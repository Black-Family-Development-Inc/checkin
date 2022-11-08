import React from "react";
import {
  AnswerOption,
  AnswerTypes,
} from "../../../../pages/assessments/AssessmentPage-types";
import MultiButton from "../../../MultiButton/MultiButton";
import { StyledBox } from "../../../MultiButton/MultiButton.styles";
import { AnswerButtonGroupStyled } from "./AssessmentAnswers.styles";
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
      {getAppropriateAnswers()?.map((answer: AnswerOption) => (
        <StyledBox key={answer.text}>
          <MultiButton
            version="answer"
            label={answer.text}
            onClick={() => handleAnswerClick(answer)}
            usersCurrentAnswer={usersCurrentAnswer}
          />
        </StyledBox>
      ))}
    </AnswerButtonGroupStyled>
  );
};

export default AssessmentAnswers;

import React from "react";
import MultiButton from "../../../MultiButton/MultiButton";
import { PrevNextContainerStyled } from "./AssessmentPrevNext.styles";
import { AssessmentPrevNextProps } from "./assessmentPrevNext-types";

const AssessmentPrevNext = ({
  currentQuestionIdx,
  questionsLength,
  setCurrentQuestionIdx,
  resultsDisabled,
  nextDisabled,
  handleResultsClick,
}: AssessmentPrevNextProps) => {
  const clamp = (num: number) =>
    Math.min(Math.max(num, 0), questionsLength - 1);

  const handleNextClick = () => {
    setCurrentQuestionIdx(clamp(currentQuestionIdx + 1));
  };

  const lastQuestion = currentQuestionIdx === questionsLength - 1;
  const lastQuestionAnswered = lastQuestion && !resultsDisabled;
  const nextButtonDisabled = !nextDisabled && !lastQuestion;

  return (
    <PrevNextContainerStyled>
      {currentQuestionIdx !== 0 && (
        <MultiButton
          version="previous"
          label="Previous"
          onClick={() => setCurrentQuestionIdx(clamp(currentQuestionIdx - 1))}
        />
      )}
      {lastQuestionAnswered && (
        <MultiButton
          version="results"
          label="Submit"
          onClick={handleResultsClick}
        />
      )}
      {nextButtonDisabled && (
        <MultiButton version="next" label="Next" onClick={handleNextClick} />
      )}
    </PrevNextContainerStyled>
  );
};

export default AssessmentPrevNext;

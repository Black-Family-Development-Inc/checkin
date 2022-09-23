import Button from "@mui/material/Button";
import React from "react";
import { PrevNextStyled } from "./AssessmentPrevNext.styles";
import { AssessmentPrevNextProps } from "./assessmentPrevNext-types";

const AssessmentPrevNext = ({
  currentQuestionIdx,
  questions,
  contentfulButton,
  setCurrentQuestionIdx,
  nextDisabled,
  resultsDisabled,
  handleResultsClick,
}: AssessmentPrevNextProps) => {
  const clamp = (num: number) =>
    Math.min(Math.max(num, 0), questions.length - 1);

  const handleNextClick = () => {
    setCurrentQuestionIdx(clamp(currentQuestionIdx + 1));
  };

  return (
    <PrevNextStyled>
      <Button
        onClick={() => setCurrentQuestionIdx(clamp(currentQuestionIdx - 1))}
        disabled={currentQuestionIdx === 0}
      >
        Previous
      </Button>
      {currentQuestionIdx === questions.length - 1 ? (
        <Button disabled={resultsDisabled} onClick={handleResultsClick}>
          {contentfulButton?.text}
        </Button>
      ) : (
        <Button onClick={handleNextClick} disabled={nextDisabled}>
          Next
        </Button>
      )}
    </PrevNextStyled>
  );
};

export default AssessmentPrevNext;

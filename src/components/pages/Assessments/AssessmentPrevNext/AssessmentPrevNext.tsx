import React from "react";
import {
  NextResultButtonStyled,
  PreviousButtonStyled,
  PrevNextContainerStyled,
} from "./AssessmentPrevNext.styles";
import { AssessmentPrevNextProps } from "./assessmentPrevNext-types";

const AssessmentPrevNext = ({
  currentQuestionIdx,
  questions,
  setCurrentQuestionIdx,
  nextDisabled,
  handleResultsClick,
}: AssessmentPrevNextProps) => {
  const clamp = (num: number) =>
    Math.min(Math.max(num, 0), questions.length - 1);

  const handleNextClick = () => {
    setCurrentQuestionIdx(clamp(currentQuestionIdx + 1));
  };

  return (
    <PrevNextContainerStyled>
      {currentQuestionIdx !== 0 && (
        <PreviousButtonStyled
          bgColor={currentQuestionIdx === 0 ? "gray" : "black"}
          cursor={currentQuestionIdx === 0 ? "default" : "pointer"}
          onClick={
            currentQuestionIdx === 0
              ? () => {}
              : () => setCurrentQuestionIdx(clamp(currentQuestionIdx - 1))
          }
        >
          Previous
        </PreviousButtonStyled>
      )}
      {currentQuestionIdx === questions.length - 1 ? (
        <NextResultButtonStyled
          bgColor={"black"}
          cursor={"pointer"}
          onClick={handleResultsClick}
        >
          Submit
        </NextResultButtonStyled>
      ) : (
        <NextResultButtonStyled
          bgColor={nextDisabled ? "gray" : "black"}
          cursor={nextDisabled ? "default" : "pointer"}
          onClick={nextDisabled ? () => {} : handleNextClick}
        >
          Next
        </NextResultButtonStyled>
      )}
    </PrevNextContainerStyled>
  );
};

export default AssessmentPrevNext;

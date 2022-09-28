import React from "react";
import MultiButton from "../../../MultiButton/MultiButton";
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
          onClick={setCurrentQuestionIdx(clamp(currentQuestionIdx - 1))}
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
        <MultiButton version="next" onClick={handleNextClick} label="Next" />
      )}
    </PrevNextContainerStyled>
  );
};

export default AssessmentPrevNext;

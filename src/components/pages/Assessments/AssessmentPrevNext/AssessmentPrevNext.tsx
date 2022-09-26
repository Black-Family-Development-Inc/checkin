import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import {
  NextButtonStyled,
  PreviousButtonStyled,
  PrevNextContainerStyled,
} from "./AssessmentPrevNext.styles";
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
    <PrevNextContainerStyled>
      <Box
        onClick={
          currentQuestionIdx === 0
            ? () => {}
            : () => setCurrentQuestionIdx(clamp(currentQuestionIdx - 1))
        }
      >
        <PreviousButtonStyled
          bgColor={currentQuestionIdx === 0 ? "gray" : "black"}
          cursor={currentQuestionIdx === 0 ? "default" : "pointer"}
        >
          Previous
        </PreviousButtonStyled>
      </Box>
      {currentQuestionIdx === questions.length - 1 ? (
        <Button disabled={resultsDisabled} onClick={handleResultsClick}>
          {contentfulButton?.text}
        </Button>
      ) : (
        <>
          <Box onClick={nextDisabled ? () => {} : handleNextClick}>
            <NextButtonStyled
              bgColor={nextDisabled ? "gray" : "black"}
              cursor={nextDisabled ? "default" : "pointer"}
            >
              Next
            </NextButtonStyled>
          </Box>
        </>
      )}
    </PrevNextContainerStyled>
  );
};

export default AssessmentPrevNext;

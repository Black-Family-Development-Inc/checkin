import { Box } from "@mui/material";
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
        <Box onClick={resultsDisabled ? () => {} : handleResultsClick}>
          <NextResultButtonStyled bgColor={"black"} cursor={"pointer"}>
            Submit
          </NextResultButtonStyled>
        </Box>
      ) : (
        <>
          <Box onClick={nextDisabled ? () => {} : handleNextClick}>
            <NextResultButtonStyled
              bgColor={nextDisabled ? "gray" : "black"}
              cursor={nextDisabled ? "default" : "pointer"}
            >
              Next
            </NextResultButtonStyled>
          </Box>
        </>
      )}
    </PrevNextContainerStyled>
  );
};

export default AssessmentPrevNext;

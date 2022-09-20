import Button from "@mui/material/Button";
import React from "react";
import ButtonLink from "../../../ButtonLink/ButtonLink";
import { AssessmentPrevNextProps } from "./AssessmentPrevNext-types";

const AssessmentPrevNext = ({
  currentQuestionIdx,
  questions,
  contentfulButton,
  setCurrentQuestionIdx,
  nextDisabled,
  resultsDisabled,
}: AssessmentPrevNextProps) => {
  const clamp = (num: number) =>
    Math.min(Math.max(num, 0), questions.length - 1);

  const handleNextClick = () => {
    setCurrentQuestionIdx(clamp(currentQuestionIdx + 1));
  };
  return (
    <>
      <Button
        onClick={() => setCurrentQuestionIdx(clamp(currentQuestionIdx - 1))}
        disabled={currentQuestionIdx === 0}
      >
        Previous
      </Button>
      {currentQuestionIdx === questions.length - 1 ? (
        <ButtonLink
          text={contentfulButton.text}
          link={contentfulButton.link}
          disabled={resultsDisabled}
        />
      ) : (
        <Button onClick={handleNextClick} disabled={nextDisabled}>
          Next
        </Button>
      )}
    </>
  );
};

export default AssessmentPrevNext;

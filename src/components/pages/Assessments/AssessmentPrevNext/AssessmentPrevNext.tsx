import Button from "@mui/material/Button";
import React from "react";
import MultiButton from "../../../MultiButtons/MultiButton";
import { Versions } from "../../../MultiButtons/MultiButton-types";
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
      <MultiButton
        version={"previous" as Versions.Previous}
        onClick={() => setCurrentQuestionIdx(clamp(currentQuestionIdx - 1))}
        // disabled={currentQuestionIdx === 0}
        label={"Previous"}
      />
      {currentQuestionIdx === questions.length - 1 ? (
        <Button disabled={resultsDisabled} onClick={handleResultsClick}>
          {contentfulButton?.text}
        </Button>
      ) : (
        <MultiButton
          version={"next" as Versions.Next}
          onClick={nextDisabled ? () => {} : handleNextClick}
          backgroundColor={nextDisabled ? "grey" : "black"}
          label={"Next"}
        />
      )}
    </PrevNextStyled>
  );
};

export default AssessmentPrevNext;

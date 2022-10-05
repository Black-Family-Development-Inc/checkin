import { SetStateAction } from "react";

export type AssessmentPrevNextProps = {
  setCurrentQuestionIdx: Dispatch<SetStateAction<number>>;
  questionsLength: number;
  currentQuestionIdx: number;
  handleResultsClick: () => void;
  resultsDisabled: boolean;
  nextDisabled: boolean;
};

import { SetStateAction } from "react";
import { Question } from "../../../../pages/assessments/AssessmentPage-types";

export type AssessmentPrevNextProps = {
  setCurrentQuestionIdx: Dispatch<SetStateAction<number>>;
  questions: Question[];
  currentQuestionIdx: number;
  nextDisabled: boolean;
  resultsDisabled: boolean;
  handleResultsClick: () => void;
};

export type PrevNextStyledProps = {
  bgColor: string;
  cursor?: string;
};

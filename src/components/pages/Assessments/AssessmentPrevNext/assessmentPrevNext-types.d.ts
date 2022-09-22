import { SetStateAction } from "react";
import {
  ContentfulButton,
  Question,
} from "../../../../pages/assessments/AssessmentPage-types";

export type AssessmentPrevNextProps = {
  setCurrentQuestionIdx: Dispatch<SetStateAction<number>>;
  questions: Question[];
  currentQuestionIdx: number;
  contentfulButton: ContentfulButton;
  nextDisabled: boolean;
  resultsDisabled: boolean;
};

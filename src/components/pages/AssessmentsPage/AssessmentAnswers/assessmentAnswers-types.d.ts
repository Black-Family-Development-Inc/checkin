import { SetStateAction } from "react";
import {
  AnswerOption,
  Question,
  UsersSavedQuestion,
} from "../../../../pages/assessments/AssessmentPage-types";

export type AssessmentAnswersProps = {
  answers: {
    binary: AnswerOption[];
    scale: AnswerOption[];
  };
  currentQuestion: Question;
  usersSavedQuestions: UsersSavedQuestion[];
  currentQuestionIdx: number;
  setUsersSavedQuestions: Dispatch<SetStateAction<UsersSavedQuestion[]>>;
};

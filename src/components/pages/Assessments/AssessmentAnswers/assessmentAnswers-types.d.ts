import { SetStateAction } from "react";
import {
  AnswerOptions,
  Question,
  UsersSavedQuestions,
} from "../../../../pages/assessments/assessment-types";

export type AssessmentAnswersProps = {
  answers: {
    binary: AnswerOptions[];
    scale: AnswerOptions[];
  };
  currentQuestion: Question;
  usersSavedQuestions: UsersSavedQuestions[];
  currentQuestionIdx: number;
  setUsersSavedQuestions: Dispatch<SetStateAction<UsersSavedQuestions[]>>;
};

import {
  AnswerOptions,
  ContentfulButton,
  Question,
  UsersSavedQuestions,
} from "../../../pages/assessments/assessment-types";

export type AssessmentPrevNextProps = {
  setCurrentQuestionIdx: (value: number) => void;
  questions: Question[];
  currentQuestionIdx: number;
  contentfulButton: ContentfulButton;
  nextDisabled: boolean;
  resultsDisabled: boolean;
};

export type AssessmentAnswersProps = {
  answers: {
    binary: AnswerOptions[];
    scale: AnswerOptions[];
  };
  currentQuestion: Question;
  usersSavedQuestions: UsersSavedQuestions[];
  currentQuestionIdx: number;
  setUsersSavedQuestions: (value: UsersSavedQuestions[]) => void;
};

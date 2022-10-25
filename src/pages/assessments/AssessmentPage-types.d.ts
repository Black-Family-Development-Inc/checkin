import { StepperPagesType } from "../../components/pages/AssessmentsPage/AssessmentStepper/AssessmentStepper-types";

export type AssessmentStep = {
  label: string;
  isComplete: boolean;
};

export enum AnswerTypes {
  Binary = "binary",
  Scale = "scale",
  Custom = "custom",
}

export type AnswerOption = {
  score: number;
  text: string;
};

export type Description = string;

export type Severity = {
  max: number;
  min: number;
  severity: string;
};

export type Heading = {
  scale: string;
  binary: string;
  custom: string;
};

export type Question = {
  text: string;
  questionType: AnswerTypes;
  triggerAnswer: string;
  answers: AnswerOption[] | null;
};

export type Assessment = {
  questions: Question[];
  headings: Heading;
  description: Description;
  severityRubric: Severity[];
  answers: {
    binary: AnswerOption[];
    scale: AnswerOption[];
  };
};

export type ContentfulButton = {
  text: string;
  link: string;
};

export type AssessmentPageProps = {
  contentfulAssessment: ContentfulAssessment;
};

export type ContentfulAssessment = {
  title: string;
  pageTitle: string;
  assessment: Assessment;
};

export type UsersSavedQuestion = {
  question: string;
  answer: string;
  score: number;
  triggered: boolean;
};

export type AssessmentButtonsData = {
  label: string;
  assessment: "phq-9" | "gad-7" | "dast-10";
};

export type FaqButtonsData = {
  label: string;
};

export type AssessmentLocationState = {
  startingPage?: StepperPagesType;
};

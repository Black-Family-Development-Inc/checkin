export type AssessmentStep = {
  label: string;
  isComplete: boolean;
};

export enum AnswerTypes {
  Binary = "binary",
  Scale = "scale",
  Custom = "custom",
}

export type AnswerOptions = {
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
};

export type Question = {
  text: string;
  questionType: AnswerTypes;
  triggerAnswer: string;
  answers: AnswerOptions[] | null;
};

export type Assessment = {
  questions: Question[];
  headings: Heading[];
  description: Description;
  severityRubric: Severity[];
  answers: {
    binary: AnswerOptions[];
    scale: AnswerOptions[];
  };
};

export type ContentfulButton = {
  text: string;
  link: string;
};

export type AssessmentPageProps = {
  data: {
    contentfulButton: ContentfulButton;
    contentfulAssessment: { title: string; assessment: Assessment };
  };
};

export type UsersSavedQuestions = {
  question: string;
  answer: string;
  score: number;
};

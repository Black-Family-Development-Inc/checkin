export enum AnswerTypes {
  binary = "binary",
  scale = "scale",
  custom = "custom",
}

export type AnswerOptions = {
  score: number;
  text: string; // geuyrf
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

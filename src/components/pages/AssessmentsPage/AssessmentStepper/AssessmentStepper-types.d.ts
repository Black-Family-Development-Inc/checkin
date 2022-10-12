export type AssessmentStepperPropTypes = {
  currentPage: StepperPagesType;
  startingPage: StepperPagesType;
};

export type StepperPagesType =
  | "Assessment Questions"
  | "Results & Resources"
  | "Universal Question"
  | "";

export type StepType = {
  label: string;
  isComplete: boolean;
};

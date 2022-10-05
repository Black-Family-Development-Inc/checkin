export type MultiButtonPropType = {
  version: Versions;
  label: string;
  onClick?: () => void;
  answer?: string;
  usersCurrentAnswer?: string;
  children?: element;
};

type Versions =
  | "assessment"
  | "next"
  | "previous"
  | "results"
  | "answer"
  | "universal"
  | "retake"
  | "startOver"
  | "navButton";

export type AnswerStyledProps = {
  usersCurrentAnswer?: string;
  label: string;
};

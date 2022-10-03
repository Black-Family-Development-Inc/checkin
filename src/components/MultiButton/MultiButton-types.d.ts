export type MultiButtonPropType = {
  version: Versions;
  label: string;
  onClick?: () => void;
  answer?: string;
  usersCurrentAnswer?: string;
  link?: string;
};

type Versions =
  | "assessment"
  | "next"
  | "previous"
  | "results"
  | "answer"
  | "universal"
  | "retake"
  | "startOver";

export type AnswerButtonType = {
  answer?: {
    text: string;
  };
  handleAnswerClick: Function;
  usersCurrentAnswer?: string;
};

export type AnswerStyledProps = {
  usersCurrentAnswer?: string;
  label: string;
};

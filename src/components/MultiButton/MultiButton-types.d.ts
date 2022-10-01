export type MultiButtonPropType = {
  version: Versions;
  onClick?: () => void;
  answer?: string;
  usersCurrentAnswer?: string;
  backgroundColor?: string;
  label: string;
};

type Versions =
  | "assessment"
  | "next"
  | "previous"
  | "results"
  | "answer"
  | "universal";

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

export type MultiButtonPropType = {
  version: Versions;
  onClick?: () => void;
  answer?: string;
  currentAnswer?: string;
  backgroundColor?: string;
  label: string;
};

export type AnswerButtonType = {
  answer?: {
    text: string;
  };
  handleAnswerClick: Function;
  usersCurrentAnswer?: string;
};

export type AnswerStyledProps = {
  currentAnswer?: string;
  answer?: string;
};

type Versions =
  | "assessment"
  | "next"
  | "previous"
  | "result"
  | "answer"
  | "universal";

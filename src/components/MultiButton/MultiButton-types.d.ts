export type MultiButtonPropType = {
  version: Versions;
  label: string;
  onClick?: () => void;
  answer?: string;
  usersCurrentAnswer?: string;
  children?: element;
  phoneNumber?: string;
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
  | "startOver"
  | "navButton"
  | "phoneNumber"
  | "allArticles";

export type AnswerStyledProps = {
  usersCurrentAnswer?: string;
  label: string;
};

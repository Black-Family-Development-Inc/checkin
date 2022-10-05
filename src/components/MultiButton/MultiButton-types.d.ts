export type MultiButtonPropType = {
  version: Versions;
  label: string;
  onClick?: () => void;
  answer?: string;
  usersCurrentAnswer?: string;
  phoneNumber?: string;
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
  | "phoneNumber"
  | "allArticles";

export type AnswerStyledProps = {
  usersCurrentAnswer?: string;
  label: string;
};

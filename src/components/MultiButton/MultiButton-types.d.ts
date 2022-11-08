export type MultiButtonPropType = {
  version: Versions;
  label: string;
  onClick?: () => void;
  answer?: string;
  usersCurrentAnswer?: string;
  children?: element;
  phoneNumber?: string;
  link?: string;
  type?: "light" | "dark";
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
  | "phoneNumberBasic"
  | "allArticles"
  | "externalLink"
  | "externalLinkBasic";

export type AnswerStyledProps = {
  usersCurrentAnswer?: string;
  label: string;
};

export type PhoneNumberStyledProps = {
  type?: "light" | "dark";
};

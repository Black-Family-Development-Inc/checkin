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
  | "secondary"
  | "next"
  | "previous"
  | "results"
  | "answer"
  | "universalAnswer"
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

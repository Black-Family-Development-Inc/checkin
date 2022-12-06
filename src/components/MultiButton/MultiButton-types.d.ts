export type MultiButtonPropType = {
  version: Versions;
  label: ReactNode;
  onClick?: () => void;
  answer?: string;
  usersCurrentAnswer?: string;
  children?: element;
  phoneNumber?: string;
  link?: string;
  type?: "light" | "dark";
  className?: string;
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

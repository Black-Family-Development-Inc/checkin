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

export const enum Versions {
  Assessment = "assessment",
  Previous = "previous",
  Next = "next",
}

export type MultiButtonPropType = {
  version: Versions;
  onClick?: () => void;
  answer?: string;
  currentAnswer?: string;
  backgroundColor?: string;
  label: string;
};

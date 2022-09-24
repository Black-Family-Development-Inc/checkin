export type AnswerButtonType = {
  answer: {
    text: string;
  };
  handleAnswerClick: function;
  usersCurrentAnswer: string;
};

export type ButtonStyledProps = {
  currentAnswer: string;
  answer: string;
};

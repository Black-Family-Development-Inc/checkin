export type AnswerButtonType = {
  answer: {
    text: string;
  };
  handleAnswerClick: function;
  usersCurrentAnswer: string;
};

export type AnswerButtonStyledProps = {
  currentAnswer: string;
  answer: string;
};

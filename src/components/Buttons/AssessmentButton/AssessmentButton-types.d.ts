export type AnswerButtonType = {
  answer: {
    text: string;
  };
  handleAnswerClick: function;
  usersCurrentAnswer: string;
};

export type ButtonStyledProps = {
  currentanswer: string;
  answer: string;
};

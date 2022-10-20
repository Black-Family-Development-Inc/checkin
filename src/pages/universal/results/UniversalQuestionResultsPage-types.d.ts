export type UniversalQuestionResultsPagePropTypes = {
  contentfulUniversalQuestionResultsPage: UniversalQuestionResultsPage;
};

type UniversalQuestionResultsPage = {
  title: string;
  header: string;
  pageDescription: string;
  firstStaticButtonDescription: string;
  firstStaticButton: {
    buttonText: string;
    linkToPage: {
      title: string;
    };
  };
  secondStaticButtonDescription: string;
  secondStaticButton: {
    text: string;
    phoneNumber: string;
  };
};

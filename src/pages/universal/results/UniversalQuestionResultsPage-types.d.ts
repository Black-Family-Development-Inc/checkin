export type UniversalQuestionResultsPagePropTypes = {
  contentfulUniversalQuestionResultsPage: UniversalQuestionResultsPage;
};

type UniversalQuestionResultsPage = {
  title: string;
  header: string;
  pageDescription: string;
  dynamicButton: {
    buttonText: string;
    buttonLink?: string;
    linkToPage?: {
      title: string;
    };
    assessmentPage: {
      title: string;
    };
  };
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

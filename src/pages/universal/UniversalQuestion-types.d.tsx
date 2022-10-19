export type UniversalQuestionPageProps = {
  contentfulUniversalQuestionPage: UniversalQustionPage;
};

type UniversalQustionPage = {
  header: string;
  description: UniversalQuestionPageDescription;
  buttons: UniversalQuestionPageButton[];
};

type UniversalQuestionPageDescription = {
  description: string;
};

type UniversalQuestionPageButton = {
  label: string;
  universalResultPage: UniversalQuestionPageResultPage;
};

type UniversalQuestionPageResultPage = {
  title: string;
};

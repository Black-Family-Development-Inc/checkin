export type ResourcesTypes = {
  resourcesHeader: string;
  bookAppointmentDescription: string;
  bookAppointmentButtonText: string;
  bookAppointmentPhoneNumber: string;
  crisisLineDescription: string;
  crisisLineButtonText: string;
  crisisLinePhoneNumber: string;
  articlesDescription: string;
  allArticles: AllArticles[];
  assessmentType: string;
  tabAnxiety: ArticleGroup;
  tabDepression: ArticleGroup;
  tabSubstanceUse: ArticleGroup;
  assessmentSeverity?: string;
};

type AllArticles = {
  type: string;
  articles: Articles[];
};

type ArticleGroup = {
  type: string;
  label: string;
  icon: {
    url: string;
  };
};

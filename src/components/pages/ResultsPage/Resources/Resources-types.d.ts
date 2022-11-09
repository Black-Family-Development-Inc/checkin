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
  assessmentSeverity?: string;
};

type AllArticles = {
  type: string;
  label: string;
  icon: {
    url: string;
  };
  articles: Articles[];
};

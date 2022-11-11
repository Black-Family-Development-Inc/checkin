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
  assessmentSeverity?: string;
  shouldRenderCrisisInfo: boolean;
};

export type AllArticles = {
  type: string;
  articles: Articles[];
};

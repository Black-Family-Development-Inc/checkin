export type ResourcesTypes = {
  resourcesHeader: string;
  bookAppointmentDescription: string;
  bookAppointmentButtonText: string;
  bookAppointmentPhoneNumber: string;
  crisisLineDescription: string;
  crisisLineButtonText: string;
  crisisLinePhoneNumber: string;
  crisisHotlineButton: ButtonPhoneNumber;
  articlesDescription: string;
  allArticles: AllArticles[];
  assessmentSeverity?: string;
};

type ButtonPhoneNumber = {
  text: string;
  phoneNumber: string;
};

type AllArticles = {
  type: string;
  articles: Articles[];
};

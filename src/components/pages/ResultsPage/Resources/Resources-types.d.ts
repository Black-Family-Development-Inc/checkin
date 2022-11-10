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
  assessmentType: string;
  assessmentSeverity?: string;
};

type ButtonPhoneNumber = {
  text: string;
  phoneNumber: string;
};

type AllArticles = {
  type: string;
  label: string;
  icon: {
    url: string;
  };
  articles: Articles[];
};

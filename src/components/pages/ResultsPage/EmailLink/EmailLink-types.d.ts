import { AllArticles } from "../Resources/Resources-types";
import { AccordionData } from "../Results/Results-types";

export type EmailLinkTypes = {
  resultsHeader: string;
  scoreAndSeverity: string;
  accordionData: AccordionData;
  bookAppointmentButtonText: string;
  bookAppointmentPhoneNumber: string;
  crisisLineButtonText: string;
  crisisLinePhoneNumber: string;
  assessmentType: string;
  allArticles: AllArticles[];
};

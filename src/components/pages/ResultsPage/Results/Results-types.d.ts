import { AllArticles } from "../Resources/Resources-types";

export type ResultsTypes = {
  triggered: boolean;
  crisisWarningMessage: string;
  crisisWarningPhoneNumber: string;
  resultsHeader: string;
  resultsDescription: string;
  allAccordionContents?: AccordionData[];
  accordionData?: AccordionData;
  assessmentScore: number;
  assessmentSeverity?: string;
  maxScore: number;
  bookAppointmentButtonText: string;
  bookAppointmentPhoneNumber: string;
  crisisLineButtonText: string;
  crisisLinePhoneNumber: string;
  assessmentType: string;
  allArticles: AllArticles[];
  otherResourcesHeader: string;
  shouldRenderCrisisInfo: boolean;
};

export type AccordionData = {
  id?: string;
  title?: string;
  type: string;
  label?: string;
  severity?: string;
  summary?: string;
  description?: {
    raw: string;
  };
  scoreTable: string[];
  maxScore: number;
  assessmentSeverity?: string;
};

import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";
import { AllArticles } from "../Resources/Resources-types";

export type ResultsTypes = {
  triggered: boolean;
  crisisWarningMessage: string;
  crisisWarningPhoneNumber: string;
  resultsHeader: string;
  resultsDescription: string;
  resultsDisclaimer: {
    resultsDisclaimer: string;
  };
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
  title?: string;
  type?: string;
  label?: string;
  severity?: string;
  summary?: string;
  description: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  scoreTableHeader: string;
  scoreTable: string[];
  maxScore: number;
  assessmentSeverity?: string;
};

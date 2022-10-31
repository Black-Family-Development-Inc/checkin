import { Severity } from "../assessments/AssessmentPage-types";

type ResultsPagePropTypes = {
  contentfulResultsPage: ContentfulResultsPage;
  otherResourcesTypes: OtherResourcesTypes;
  resources: ResourcesTypes;
  resultsPageResultsSection: ResultsPageResultsSection;
};

type ResultsPageLocationState = {
  assessmentScore: number;
  severityRubric: Severity[];
  triggered: boolean;
  startingPage: string;
};

export type OtherResourcesTypes = {
  title: string;
  bfdiLink: string;
  bfdiLinkText: string;
  bfdiResourcesParagraph: string;
  faqLink: string;
  faqLinkText: string;
  faqResourcesParagraph: string;
};

export type ResourcesTypes = {
  header: string;
  bfdiButtonDescription: string;
  bfdiButtonText: string;
  bfdiIntakeNumber: string;
  crisisLineButtonText: string;
  crisisLineDescription: string;
  crisisLineNumber: string;
  headingForArticles: string;
  allResourcesLink: string;
  allResourcesText: string;
  articles: ArticleType[];
  severity?: string;
};

export type ResultsPageResultsSection = {
  resultsHeaderText: string;
  resultsSummaryText: string;
  resultsAccordionData: ResultsAccordion[];
  assessmentScore?: number;
  assessmentSeverity?: string;
};

type ResultsAccordion = {
  id: string;
  title: string;
  summary: string;
  scoreRange: string;
  body: { body: string };
};

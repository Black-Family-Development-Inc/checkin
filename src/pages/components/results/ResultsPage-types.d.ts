export type ResultsPageTypes = {
  contentfulResultsPage: ContentfulResultsPage;
  otherResourcesTypes: OtherResourcesTypes;
  resources: ResourcesTypes;
  resultsPageResultsSection: ResultsPageResultsSection;
};

// Other Resources

export type OtherResourcesTypes = {
  title: string;
  bfdiLink: string;
  bfdiLinkText: string;
  bfdiResourcesParagraph: string;
  faqLink: string;
  faqLinkText: string;
  faqResourcesParagraph: string;
};

// Resources Types

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
  severity?: string; //this doesn't need an optional type once merged with results pages as it should be passed from parent component
};

// Results Section

export type ResultsPageResultsSection = {
  resultsHeaderText: string;
  resultsSummaryText: string;
  resultsAccordionData: ResultsAccordion[];
};

type ResultsAccordion = {
  id: string;
  title: string;
  summary: string;
  scoreRange: string;
  body: string;
};

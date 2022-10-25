export type ResultsTypes = {
  resultsHeader: string;
  resultsDescription: string;
  allResultsAccordions: ResultsAccordion[];
  assessmentScore: number;
  assessmentSeverity?: string;
};

type resultsAccordion = {
  id: string;
  title: string;
  summary?: string;
  description: {
    raw: string;
  };
  assessmentScore?: number;
  assessmentSeverity?: string;
};

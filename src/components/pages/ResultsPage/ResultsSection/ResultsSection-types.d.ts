export type ResultsTypes = {
  resultsHeader: string;
  resultsDescription: string;
  allAccordions?: AccordionGroup[];
  accordionGroup: AccordionGroup | undefined;
  assessmentScore: number;
  assessmentSeverity?: string;
  maxScore: number;
};

type AccordionGroup = {
  type: string;
  label: string;
  scoreTable: string[];
  accordions: Accordions[];
};

type Accordions = {
  id?: string;
  title?: string;
  severity?: string;
  maxScore: number;
  assessmentSeverity?: string;
  summary?: string;
  description?: {
    raw: string;
  };
};

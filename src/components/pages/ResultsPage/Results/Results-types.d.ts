export type ResultsTypes = {
  resultsHeader: string;
  resultsDescription: string;
  allAccordionContents?: AccordionData[];
  accordionData?: AccordionData;
  assessmentScore: number;
  assessmentSeverity?: string;
  maxScore: number;
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

// type Accordions = {
//   id?: string;
//   title?: string;
//   severity?: string;
//   maxScore: number;
//   assessmentSeverity?: string;
//   summary?: string;
//   description?: {
//     raw: string;
//   };
// };

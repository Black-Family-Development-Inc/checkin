export type AccordionPropTypes = {
  key?: string;
  title?: string;
  type?: string;
  summary?: string;
  description?: string;
  scoreTable?: string[];
  score?: {
    assessmentScore: number;
    maxScore: number;
    assessmentSeverity: string;
  };
};

import { Severity } from "../assessments/AssessmentPage-types";

type ResultsPagePropTypes = {
  contentfulResultsPage: {
    title: string;
  };
};

type LocationState = {
  assessmentScore: number;
  severityRubric: Severity[];
};

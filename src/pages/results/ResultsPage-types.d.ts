import { Severity } from "../assessments/AssessmentPage-types";

type ResultsPagePropTypes = {
  contentfulResultsPage: {
    title: string;
  };
};

type ResultsPageLocationState = {
  assessmentScore: number;
  severityRubric: Severity[];
  triggered: boolean;
  startingPage: string;
};

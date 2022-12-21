import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";
import { OtherResourcesTypes } from "../../components/pages/ResultsPage/OtherResources/OtherResources-types";
import { ResourcesTypes } from "../../components/pages/ResultsPage/Resources/Resources-types";
import { ResultsTypes } from "../../components/pages/ResultsPage/Results/Results-types";
import { RetakeTypes } from "../../components/pages/ResultsPage/Retake/Retake-types";
import { Severity } from "../assessments/AssessmentPage-types";

export type ResultsPagePropTypes = {
  contentfulResultsPage: ContentfulResultsPage;
};

export type ContentfulResultsPage = ResultsTypes &
  ResourcesTypes &
  OtherResourcesTypes &
  RetakeTypes;

export type ResultsPageLocationState = {
  assessmentScore: number;
  severityRubric: Severity[];
  triggered: boolean;
  startingPage: string;
  assessmentType: string;
  maxScore: number;
};

type ResultsAccordion = {
  id: string;
  title: string;
  summary: string;
  scoreRange: string;
  body: { body: string };
  description: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  assessmentType: string;
  maxScore: number;
};

import { graphql, PageProps } from "gatsby";
import React from "react";
import { ResultsSection } from "../../../components/pages/ResultsPage/ResultsSection";

/**
 * These types are in this file and not in a separate dedicated file because they will be removed
 * once we start migrating all of the "results" componenents into a single file
 */
type ResultsSectionPageTypes = {
  contentfulResultsPage: ResultsPageResultsSection;
};

export type ResultsPageResultsSection = {
  resultsHeader: string;
  resultsSummary: string;
  resultsAccordion: ResultsAccordion[];
};

type ResultsAccordion = {
  id: string;
  title: string;
  summary: string;
  scoreRange: string;
  body: AccordionBody;
};

type AccordionBody = {
  body: string;
};

const ResultsSectionPage = ({ data }: PageProps<ResultsSectionPageTypes>) => {
  return <ResultsSection {...data.contentfulResultsPage} />;
};

export default ResultsSectionPage;

export const query = graphql`
  query ($title: String) {
    contentfulResultsPage(title: { eq: $title }) {
      title
      resultsHeader
      resultsSummary
      resultsAccordion {
        id
        title
        summary
        scoreRange
        body {
          body
        }
      }
    }
  }
`;

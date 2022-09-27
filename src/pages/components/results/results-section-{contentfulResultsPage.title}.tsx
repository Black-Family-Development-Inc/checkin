import { graphql, PageProps } from "gatsby";
import React from "react";
import { ResultsSection } from "../../../components/pages/ResultsPage/ResultsSection";

const ResultsSectionPage = ({ data }: PageProps<any>) => {
  console.log(data);
  return <ResultsSection />;
};

export default ResultsSectionPage;

export const query = graphql`
  query ($title: String) {
    contentfulResultsPage(title: { eq: $title }) {
      title
      resultsHeader
      resultsSummary
      resultsAccordion {
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

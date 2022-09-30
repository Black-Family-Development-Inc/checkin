import { graphql, PageProps } from "gatsby";
import React from "react";
import { RetakeSection } from "../../../components/pages/ResultsPage/RetakeSection";
import { RetakeSectionType } from "../../../components/pages/ResultsPage/RetakeSection/RetakeSection-types";

/**
 * These types are in this file and not in a separate dedicated file because they will be removed
 * once we start migrating all of the "results" componenents into a single file
 */

type RetakeSectionPageTypes = {
  contentfulResultsPage: { retakeSection: RetakeSectionType };
};

const RetakeSectionPage = ({ data }: PageProps<RetakeSectionPageTypes>) => {
  return <RetakeSection {...data.contentfulResultsPage} />;
};

export default RetakeSectionPage;

export const query = graphql`
  query ($title: String!) {
    contentfulResultsPage(title: { eq: $title }) {
      title
      retakeDescription
      resultsTestimonial {
        testimonialAuthor
        testimonialQuote
      }
    }
  }
`;

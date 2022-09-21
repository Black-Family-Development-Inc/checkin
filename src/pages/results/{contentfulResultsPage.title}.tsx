import { graphql, PageProps } from "gatsby";
import React from "react";
import AssessmentTracker from "../../layouts/AsssessmentTracker/AssessementTracker";

type ResultPagePropTypes = {
  contentfulResultsPage: {
    title: string;
  };
};

const ResultsPage = ({ data }: PageProps<ResultPagePropTypes>) => {
  return (
    <AssessmentTracker>
      <h1>{data.contentfulResultsPage.title}</h1>
    </AssessmentTracker>
  );
};

export default ResultsPage;

export const query = graphql`
  query ($title: String!) {
    contentfulResultsPage(title: { eq: $title }) {
      title
    }
  }
`;

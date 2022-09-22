import { graphql, PageProps } from "gatsby";
import React from "react";
import AssessmentTrackerLayout from "../../layouts/AssessmentTrackerLayout/AssessmentTrackerLayout";

type ResultPagePropTypes = {
  contentfulResultsPage: {
    title: string;
  };
};

const ResultsPage = ({ data }: PageProps<ResultPagePropTypes>) => {
  return (
    <AssessmentTrackerLayout>
      <h1>{data.contentfulResultsPage.title}</h1>
    </AssessmentTrackerLayout>
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

import { graphql, PageProps } from "gatsby";
import React from "react";
import { LocationState, ResultsPagePropTypes } from "./ResultsPage-types";

const ResultsPage = ({
  data,
  location: { state },
}: PageProps<ResultsPagePropTypes, object, LocationState>) => {
  const { assessmentScore, severityRubric } = state || {};

  const determineAssessmentSeverity = () => {
    const assessmentSeverity = severityRubric?.find(({ min, max }) => {
      return assessmentScore >= min && assessmentScore <= max;
    });

    return (
      assessmentSeverity?.severity ||
      "Could not determine score" +
        "Please check that the accumulative of answers matches one area of the scoring rubric for this assessment"
    );
  };

  return (
    <>
      <h1>{data.contentfulResultsPage.title}</h1>
      <p>Score: {assessmentScore}</p>
      <p>Severity: {determineAssessmentSeverity()}</p>
    </>
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

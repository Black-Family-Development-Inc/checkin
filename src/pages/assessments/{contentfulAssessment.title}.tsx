import { graphql, PageProps } from "gatsby";
import React from "react";
import AssessmentStepper from "../../components/AssessmentStepper/AssessmentStepper";

const AssessmentPage = ({ data }: PageProps<Queries.AssessmentPageQuery>) => {
  const { contentfulAssessment: assessment } = data;
  return (
    <>
      <AssessmentStepper />
      <p>Assessment ID: {assessment?.id}</p>
      <p>Assessment Title: {assessment?.title}</p>
      <p>Assessment "Questions":</p>
      <ul>
        <li>one</li>
        <li>two</li>
      </ul>
    </>
  );
};

export default AssessmentPage;

export const query = graphql`
  query AssessmentPage($title: String!) {
    contentfulAssessment(title: { eq: $title }) {
      id
      title
    }
  }
`;

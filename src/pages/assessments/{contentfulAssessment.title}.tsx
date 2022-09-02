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
        {assessment?.repeaterList?.map((el) => {
          return (
            <div key={el?.id}>
              <li>{el?.key}</li>
              <li>{el?.value}</li>
            </div>
          );
        })}
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
      repeaterList {
        id
        key
        value
      }
    }
  }
`;

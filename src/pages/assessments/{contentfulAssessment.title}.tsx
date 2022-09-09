import { graphql, PageProps } from "gatsby";
import React from "react";
import AssessmentStepper from "../../components/AssessmentStepper/AssessmentStepper";

const AssessmentPage = ({ data }: PageProps<Queries.AssessmentPageQuery>) => {
  const { contentfulAssessment: assessment } = data;
  console.log(assessment); // only for testing purposes remove once page is more complete
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
      title
      assessment {
        answers {
          binary {
            score
            text
          }
          scale {
            score
            text
          }
        }
        questions {
          text
          triggerAnswer
          questionType
          answers {
            text
            score
          }
        }
        severityRubric {
          max
          min
          severity
        }
        description
        headings {
          scale
          binary
        }
      }
    }
  }
`;

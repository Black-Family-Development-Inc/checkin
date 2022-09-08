import { graphql, PageProps } from "gatsby";
import React from "react";

const AssessmentPage = ({ data }: PageProps<Queries.AssessmentPageQuery>) => {
  const { contentfulAssessment: assessment } = data;
  console.log(assessment); // only for testing purposes remove once page is more complete
  return (
    <>
      <p>Assessment Title: {assessment?.title}</p>
      <p>Assessment "Questions":</p>
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
          type
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
        }
      }
    }
  }
`;

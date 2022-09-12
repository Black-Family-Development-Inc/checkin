import { graphql, PageProps } from "gatsby";
import React from "react";
import ButtonLink from "../../components/ButtonLink/ButtonLink";

const AssessmentPage = ({ data }: PageProps<Queries.AssessmentPageQuery>) => {
  const { contentfulAssessment: assessment } = data;
  const linkToResults = "/results";

  return (
    <>
      <p>Assessment ID: {assessment?.id}</p>
      <p>Assessment Title: {assessment?.title}</p>
      <p>Assessment "Questions":</p>
      <ul>
        <li>one</li>
        <li>two</li>
      </ul>
      {data.contentfulButton?.text && (
        <ButtonLink text={data.contentfulButton.text} link={linkToResults} />
      )}
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
    contentfulButton(text: { eq: "Results" }) {
      text
      link
    }
  }
`;

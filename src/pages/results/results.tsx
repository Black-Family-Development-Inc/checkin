import { graphql, PageProps } from "gatsby";
import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";

const ResultsPage = ({ data }: PageProps<Queries.ResultsPageQuery>) => {
  const { contentfulPage: results } = data;
  const handleClick = () => {
    window.open(
      `${results?.assessmentButton?.link}`,
      "_blank",
      "rel=noreferrer",
    );
  };
  return (
    <DefaultLayout>
      <h2>{results?.header}</h2>
      <p>{results?.body?.body}</p>
      <button onClick={handleClick}>{results?.assessmentButton?.text}</button>
    </DefaultLayout>
  );
};

export default ResultsPage;

export const query = graphql`
  query ResultsPage {
    contentfulPage(title: { eq: "Results Page" }) {
      title
      header
      body {
        body
      }
      assessmentButton {
        link
        text
      }
    }
  }
`;

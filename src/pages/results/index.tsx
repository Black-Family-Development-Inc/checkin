import { Link } from "@mui/material";
import { graphql, PageProps } from "gatsby";
import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";

const ResultsPage = ({ data }: PageProps<Queries.ResultsPageQuery>) => {
  const { contentfulPage: results } = data;
  return (
    <DefaultLayout>
      <h2>{results?.header}</h2>
      <p>{results?.body?.body}</p>
      <Link
        href={`${results?.assessmentButton?.link}`}
        target="_blank"
        rel="noreferrer"
      >
        {results?.assessmentButton?.text}
      </Link>
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

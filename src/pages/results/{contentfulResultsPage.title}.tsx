import { graphql, PageProps } from "gatsby";
import React from "react";

type ResultPagePropTypes = {
  contentfulResultsPage: {
    title: string;
  };
};

const ResultsPage = ({ data }: PageProps<ResultPagePropTypes>) => {
  return <h1>{data.contentfulResultsPage.title}</h1>;
};

export default ResultsPage;

export const query = graphql`
  query ($title: String!) {
    contentfulResultsPage(title: { eq: $title }) {
      title
    }
  }
`;

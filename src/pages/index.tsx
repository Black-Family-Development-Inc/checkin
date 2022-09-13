import { graphql, PageProps } from "gatsby";
import * as React from "react";
import { FirstSection } from "../components/pages/IndexPage/FirstSection";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import { IndexPageTypes } from "./IndexPage-types";

const IndexPage = ({ data }: PageProps<IndexPageTypes>) => {
  return (
    <>
      <DefaultLayout>
        <FirstSection {...data.contentfulHomePage} />
      </DefaultLayout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  {
    contentfulHomePage(title: { eq: "Home Page" }) {
      title
      firstSectionHeader
      firstSectionSubheader
      universalAssessmentButton {
        text
        assessment {
          id
          title
        }
      }
      firstSectionImage {
        url
        description
        gatsbyImageData(formats: [WEBP])
      }
      assessmentButtons {
        link
      }
    }
    allContentfulAssessment {
      nodes {
        id
        title
      }
    }
  }
`;

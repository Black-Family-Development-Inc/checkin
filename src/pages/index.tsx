import { graphql, PageProps } from "gatsby";
import * as React from "react";
import UniversalBottom from "../components/pages/home/UniversalBottom/UniversalBottom";
import { FirstSection } from "../components/pages/IndexPage/FirstSection";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import { IndexPageTypes } from "./IndexPage-types";

const IndexPage = ({ data }: PageProps<IndexPageTypes>) => {
  console.log(data);
  return (
    <>
      <DefaultLayout>
        <FirstSection {...data.contentfulHomePage} />
        <UniversalBottom {...data.contentfulHomePage} />
      </DefaultLayout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  {
    contentfulHomePage(title: { eq: "Home Page" }) {
      title
      introSectionHeader
      introSectionSubheader
      universalBottomHeader
      universalBottomSubHeader
      universalAssessmentButton {
        text
        assessment {
          id
          title
        }
      }
      introSectionImage {
        url
        description
        gatsbyImageData(formats: [WEBP], breakpoints: [375])
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

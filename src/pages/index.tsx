import { graphql, PageProps } from "gatsby";
import * as React from "react";
import UniversalBottom from "../components/pages/home/UniversalBottom/UniversalBottom";
import AssessmentSection from "../components/pages/IndexPage/AssessmentSection/AssessmentSection";
import { FirstSection } from "../components/pages/IndexPage/FirstSection";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import { IndexPageTypes } from "./IndexPage-types";

const IndexPage = ({ data }: PageProps<IndexPageTypes>) => {
  return (
    <>
      <DefaultLayout>
        <FirstSection {...data.contentfulHomePage} />
        <AssessmentSection {...data.contentfulHomePage} />
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
      assessmentSectionHeader
      assessmentSectionSubheader
      assessmentButtons {
        ... on ContentfulAssessmentButton {
          assessmentDescription
          buttonText
          assessment {
            title
            id
          }
        }
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

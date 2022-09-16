import { graphql, PageProps } from "gatsby";
import * as React from "react";
import { FirstSection } from "../components/pages/IndexPage/FirstSection";
import AssessmentInstructions from "../components/pages/IndexPage/FirstSection/AssessmentInstructions";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import { IndexPageTypes } from "./IndexPage-types";

const IndexPage = ({ data }: PageProps<IndexPageTypes>) => {
  return (
    <>
      <DefaultLayout>
        <FirstSection {...data.contentfulHomePage} />
        <AssessmentInstructions {...data.contentfulHomePage} />
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
      assessmentInstructionsHeader
      stepOneLabel
      stepOneDescription
      stepTwoLabel
      stepTwoDescription
      stepThreeLabel
      stepThreeDescription
      assessmentStepsImage {
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

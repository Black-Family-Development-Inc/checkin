import { graphql, PageProps } from "gatsby";
import * as React from "react";
import Accordion from "../components/Accordion/Accordion";
import UniversalBottom from "../components/pages/home/UniversalBottom/UniversalBottom";
import AssessmentSection from "../components/pages/IndexPage/AssessmentSection/AssessmentSection";
import { FirstSection } from "../components/pages/IndexPage/FirstSection";
import AssessmentInstructions from "../components/pages/IndexPage/FirstSection/AssessmentInstructions";
import { TestimonialSection } from "../components/pages/IndexPage/Testimonial";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import { IndexPageTypes } from "./IndexPage-types";

const IndexPage = ({ data }: PageProps<IndexPageTypes>) => {
  // Temp data variables to test component props, please remove once accordion component is removed
  const tempAccordionTitle =
    "This is data prop for the header of the Accordion";
  const tempAccordionBody =
    "And this is data prop for the body of the accordion";

  return (
    <>
      <DefaultLayout>
        <FirstSection {...data.contentfulHomePage} />
        <AssessmentInstructions {...data.contentfulHomePage} />
        <AssessmentSection {...data.contentfulHomePage} />
        <Accordion title={tempAccordionTitle} body={tempAccordionBody} />
        <UniversalBottom {...data.contentfulHomePage} />
        <TestimonialSection {...data.contentfulHomePage} />
      </DefaultLayout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query HomePage {
    contentfulHomePage(title: { eq: "Home Page" }) {
      title
      introSectionHeader
      introSectionSubheader
      testimonial
      testimonialParticipant
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

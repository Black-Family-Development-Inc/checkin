import { graphql, PageProps } from "gatsby";
import * as React from "react";
import AssessmentSection from "../components/pages/IndexPage/AssessmentSection/AssessmentSection";
import { IntroSection } from "../components/pages/IndexPage/IntroSection";
import AssessmentInstructions from "../components/pages/IndexPage/IntroSection/AssessmentInstructions";
import UniversalBottom from "../components/pages/IndexPage/UniversalBottom/UniversalBottom";
import { TestimonialSection } from "../components/Testimonial";
import { setHeadTitle } from "../globalFunctions/setHeadTitle";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import { IndexPageTypes } from "./IndexPage-types";

const IndexPage = ({ data }: PageProps<IndexPageTypes>) => {
  return (
    <DefaultLayout>
      <IntroSection {...data.contentfulHomePage} />
      <AssessmentInstructions {...data.contentfulHomePage} />
      <AssessmentSection {...data.contentfulHomePage} />
      <UniversalBottom {...data.contentfulHomePage} />
      <TestimonialSection {...data.contentfulHomePage.testimonialSection} />
    </DefaultLayout>
  );
};

export default IndexPage;

export const Head = () => setHeadTitle("Home");

export const query = graphql`
  query HomePage {
    contentfulHomePage(title: { eq: "Home Page" }) {
      title
      introSectionHeader
      introSectionSubheader
      universalBottomHeader
      universalBottomSubHeader
      universalAssessmentButton {
        text
        assessment {
          ... on ContentfulUniversalQuestionPage {
            id
            title
          }
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
          assessmentPage {
            title
            id
          }
        }
      }
      testimonialSection {
        testimonialQuote
        testimonialAuthor
        quoteImage {
          url
        }
      }
    }
  }
`;

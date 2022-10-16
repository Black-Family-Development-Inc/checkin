import { graphql, PageProps } from "gatsby";
import * as React from "react";
import { useEffect } from "react";
import AssessmentSection from "../components/pages/IndexPage/AssessmentSection/AssessmentSection";
import { IntroSection } from "../components/pages/IndexPage/IntroSection";
import AssessmentInstructions from "../components/pages/IndexPage/IntroSection/AssessmentInstructions";
import { TestimonialSection } from "../components/pages/IndexPage/Testimonial";
import UniversalBottom from "../components/pages/IndexPage/UniversalBottom/UniversalBottom";
import { localSavedPageKey } from "../global-variables";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import { IndexPageTypes } from "./IndexPage-types";

const IndexPage = ({ data }: PageProps<IndexPageTypes>) => {
  useEffect(() => {
    const pageData = {
      cameFromUniversal: false,
    };
    localStorage.setItem(localSavedPageKey, JSON.stringify(pageData));
  }, []);

  return (
    <>
      <DefaultLayout>
        <IntroSection {...data.contentfulHomePage} />
        <AssessmentInstructions {...data.contentfulHomePage} />
        <AssessmentSection {...data.contentfulHomePage} />
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

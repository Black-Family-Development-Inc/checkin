import { graphql, PageProps } from "gatsby";
import * as React from "react";
import { FirstSection } from "../components/pages/IndexPage/FirstSection";
import Testimonial from "../components/pages/IndexPage/Testimonial/Testimonial";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import { IndexPageTypes } from "./IndexPage-types";

const IndexPage = ({ data }: PageProps<IndexPageTypes>) => {
  return (
    <>
      <DefaultLayout>
        <FirstSection {...data.contentfulHomePage} />
        <Testimonial {...data.contentfulHomePage} />
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
      testimonial
      testimonialParticipant
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

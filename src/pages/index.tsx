import { graphql, PageProps } from "gatsby";
import * as React from "react";
import Accordion from "../components/Accordion/Accordion";
import { FirstSection } from "../components/pages/IndexPage/FirstSection";
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
        {/* Please remove Accordion once FAQ paged is created */}
        <Accordion title={tempAccordionTitle} body={tempAccordionBody} />
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
    }
    allContentfulAssessment {
      nodes {
        id
        title
      }
    }
  }
`;

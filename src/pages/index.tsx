import { graphql, PageProps } from "gatsby";
import * as React from "react";
import AssessmentSection from "../components/pages/home/AssessmentSection/AssessmentSection";
// import Button from "../components/Button/Button";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  return (
    <>
      <DefaultLayout>
        <AssessmentSection {...data} />
      </DefaultLayout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage {
    contentfulHomePage {
      assessmentSectionHeader
      assessmentSectionSubheader
      assessmentButtons {
        ... on ContentfulAssessmentButton {
          assessmentDescription
          buttonText
          assessment {
            title
          }
        }
      }
    }
  }
`;

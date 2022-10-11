import { graphql, PageProps } from "gatsby";
import React from "react";
import { OtherResources } from "../../../components/pages/ResultsPage/OtherResources";
import { Resources } from "../../../components/pages/ResultsPage/Resources";
import { ResultsSection } from "../../../components/pages/ResultsPage/ResultsSection";
import { RetakeSection } from "../../../components/pages/ResultsPage/RetakeSection";
import DefaultLayout from "../../../layouts/DefaultLayout/DefaultLayout";
import { ResultsPageTypes } from "./ResultsPage-types";

const ResultsPage = ({ data }: PageProps<ResultsPageTypes>) => {
  console.log(data);
  return (
    <>
      <DefaultLayout>
        <ResultsSection {...data.contentfulResultsPage} />
        <Resources {...data.contentfulResultsPage.resources} />
        <OtherResources {...data.contentfulResultsPage.otherResources} />
        <RetakeSection {...data.contentfulResultsPage} />
      </DefaultLayout>
    </>
  );
};

export default ResultsPage;

export const query = graphql`
  query ($title: String) {
    contentfulResultsPage(title: { eq: $title }) {
      title
      resultsHeaderText
      resultsSummaryText
      retakeDescription
      resultsTestimonial {
        testimonialAuthor
        testimonialQuote
      }
      resultsAccordionData {
        id
        title
        summary
        scoreRange
        body {
          body
        }
      }
      otherResources {
        title
        bfdiLink
        bfdiLinkText
        bfdiResourcesParagraph
        faqLink
        faqLinkText
        faqResourcesParagraph
      }
      resources {
        title
        header
        bfdiButtonDescription
        bfdiButtonText
        bfdiIntakeNumber
        crisisLineButtonText
        crisisLineDescription
        crisisLineNumber
        headingForArticles
        allResourcesLink
        allResourcesText
        articles {
          articleLink
          articleSubTitle
          articleTitle
          articleType
        }
      }
    }
  }
`;

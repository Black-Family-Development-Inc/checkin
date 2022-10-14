import { graphql, PageProps } from "gatsby";
import React from "react";
import {
  Resources,
  ResultsSection,
  RetakeSection,
} from "../../components/pages/ResultsPage";
import { OtherResources } from "../../components/pages/ResultsPage/OtherResources";
import AssessmentTrackerLayout from "../../layouts/AssessmentTrackerLayout/AssessmentTrackerLayout";
import { LocationState, ResultsPagePropTypes } from "./ResultsPage-types";

const ResultsPage = ({
  data,
  location: { state },
}: PageProps<ResultsPagePropTypes, object, LocationState>) => {
  const { assessmentScore, severityRubric, triggered } = state || {};
  const {
    resultsSummaryText,
    resultsHeaderText,
    resultsAccordionData,
    title,
    retakeDescription,
    resultsTestimonial,
  } = data.contentfulResultsPage;

  const resultsSectionProps = {
    resultsSummaryText,
    resultsHeaderText,
    resultsAccordionData,
  };

  const retakeSectionProps = {
    title,
    retakeDescription,
    resultsTestimonial,
  };

  const determineAssessmentSeverity = () => {
    return severityRubric?.find(({ min, max }) => {
      const isScoreInRange = assessmentScore >= min && assessmentScore <= max;
      return isScoreInRange;
    });
  };

  const assessmentResults = determineAssessmentSeverity();

  return (
    <AssessmentTrackerLayout>
      <h1>{data.contentfulResultsPage.title}</h1>
      {assessmentScore > -1 ? (
        <>
          <p>Score: {assessmentScore}</p>
          <p>Severity: {assessmentResults?.severity}</p>
          <p>Did you trip a trigger question: {triggered ? "Yes" : "No"}</p>
          {/* remove above line concerning trigger question once its properly used */}
          <ResultsSection {...resultsSectionProps} />
          <Resources {...data.contentfulResultsPage.resources} />
          <RetakeSection {...retakeSectionProps} />
          <OtherResources {...data.contentfulResultsPage.otherResources} />
        </>
      ) : (
        <>
          <p>Could not determine score</p>
          <p>
            Please check that the accumulative of answers matches on area of the
            scoring rubric for this assessment
          </p>
        </>
      )}
    </AssessmentTrackerLayout>
  );
};

export default ResultsPage;

export const query = graphql`
  query ($title: String!) {
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

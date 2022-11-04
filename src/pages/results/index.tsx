import { graphql, PageProps } from "gatsby";
import React from "react";
import { Header } from "../../components/Header";
import { stepperPages } from "../../components/pages/AssessmentsPage/AssessmentStepper/AssessmentStepper";
import { StepperPagesType } from "../../components/pages/AssessmentsPage/AssessmentStepper/AssessmentStepper-types";
import {
  OtherResources,
  Resources,
  Results,
  Retake,
} from "../../components/pages/ResultsPage";
import AssessmentLayout from "../../layouts/AssessmentLayout/AssessmentLayout";
import {
  ResultsPageLocationState,
  ResultsPagePropTypes,
} from "./ResultsPage-types";

const ResultsPage = ({
  data,
  location: { state },
}: PageProps<ResultsPagePropTypes, object, ResultsPageLocationState>) => {
  const {
    assessmentScore,
    severityRubric,
    triggered,
    startingPage,
    assessmentType,
    maxScore,
  } = state || {};
  const {
    resultsHeader,
    resultsDescription,
    allAccordionContents,
    resourcesHeader,
    bookAppointmentDescription,
    bookAppointmentButtonText,
    bookAppointmentPhoneNumber,
    crisisLineDescription,
    crisisLineButtonText,
    crisisLinePhoneNumber,
    articlesDescription,
    allArticles,
    retakeDescription,
    retakeButtonText,
    retakeButtonLink,
    startOverButtonText,
    startOverButtonLink,
    testimonialSection,
    otherResourcesHeader,
    otherResourcesDescription,
  } = data.contentfulResultsPage;
  const { tabAnxiety, tabDepression, tabSubstanceUse } = data;

  const determineAssessmentSeverity = () => {
    return severityRubric?.find(({ min, max }) => {
      const isScoreInRange = assessmentScore >= min && assessmentScore <= max;
      return isScoreInRange;
    });
  };
  const assessmentSeverity = determineAssessmentSeverity()?.severity;
  const accordionData = allAccordionContents?.find(
    (accordion: { type: string }) => accordion.type === assessmentType,
  );

  const resultsSectionProps = {
    resultsDescription,
    resultsHeader,
    accordionData,
    assessmentScore,
    assessmentSeverity,
    maxScore,
  };
  const resourcesSectionProps = {
    resourcesHeader,
    bookAppointmentDescription,
    bookAppointmentButtonText,
    bookAppointmentPhoneNumber,
    crisisLineDescription,
    crisisLineButtonText,
    crisisLinePhoneNumber,
    articlesDescription,
    allArticles,
    tabAnxiety,
    tabDepression,
    tabSubstanceUse,
    assessmentType,
    retakeDescription,
    assessmentSeverity,
  };
  const retakeSectionProps = {
    assessmentType,
    retakeDescription,
    testimonialSection,
    retakeButtonText,
    retakeButtonLink,
    startOverButtonText,
    startOverButtonLink,
  };
  const otherResourcesProps = {
    otherResourcesHeader,
    otherResourcesDescription,
  };

  return (
    <AssessmentLayout
      currentPage={stepperPages.results}
      startingPage={startingPage as StepperPagesType}
      assessmentTitle={assessmentType}
    >
      <Header text={resultsHeader} variant="h2" />
      {assessmentScore > -1 ? (
        <>
          <p>Score: {assessmentScore}</p>
          <p>Severity: {assessmentSeverity}</p>
          <p>Did you trip a trigger question: {triggered ? "Yes" : "No"}</p>
          {/* remove above line concerning trigger question once its properly used */}
          <Results {...resultsSectionProps} />
          <Resources {...resourcesSectionProps} />
          <Retake {...retakeSectionProps} />
          <OtherResources {...otherResourcesProps} />
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
    </AssessmentLayout>
  );
};

export default ResultsPage;

export const query = graphql`
  query {
    contentfulResultsPage(title: { eq: "Results Page" }) {
      resultsHeader
      resultsDescription
      allAccordionContents {
        id
        title
        type
        label
        summary
        description {
          raw
        }
        scoreTable
      }
      resourcesHeader
      bookAppointmentDescription
      bookAppointmentButtonText
      bookAppointmentPhoneNumber
      crisisLineDescription
      crisisLineButtonText
      crisisLinePhoneNumber
      articlesDescription
      allArticles {
        type
        articles {
          title
          source
          link
        }
      }
      retakeDescription
      retakeButtonText
      retakeButtonLink
      startOverButtonText
      startOverButtonLink
      testimonialSection {
        testimonialQuote
        testimonialAuthor
        quoteImage {
          url
        }
      }
      otherResourcesHeader
      otherResourcesDescription {
        raw
      }
    }
    tabAnxiety: contentfulArticleGroup(type: { eq: "GAD-7" }) {
      type
      label
      icon {
        url
      }
    }
    tabDepression: contentfulArticleGroup(type: { eq: "PHQ-9" }) {
      type
      label
      icon {
        url
      }
    }
    tabSubstanceUse: contentfulArticleGroup(type: { eq: "DAST-10" }) {
      type
      label
      icon {
        url
      }
    }
  }
`;

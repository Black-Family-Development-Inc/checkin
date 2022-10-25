import { graphql, PageProps } from "gatsby";
import React from "react";
import { Header } from "../../components/Header";
import { stepperPages } from "../../components/pages/AssessmentsPage/AssessmentStepper/AssessmentStepper";
import { StepperPagesType } from "../../components/pages/AssessmentsPage/AssessmentStepper/AssessmentStepper-types";
import {
  OtherResources,
  Resources,
  ResultsSection,
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
  const { assessmentScore, severityRubric, triggered, startingPage } =
    state || {};
  const {
    title,
    resultsHeader,
    resultsDescription,
    allResultsAccordions,
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
    resultsTestimonial: { testimonialQuote, testimonialAuthor },
    otherResourcesHeader,
    otherResourcesDescription,
  } = data.contentfulResultsPage;

  const determineAssessmentSeverity = () => {
    return severityRubric?.find(({ min, max }) => {
      const isScoreInRange = assessmentScore >= min && assessmentScore <= max;
      return isScoreInRange;
    });
  };

  const assessmentSeverity = determineAssessmentSeverity()?.severity;

  const resultsSectionProps = {
    resultsDescription,
    resultsHeader,
    allResultsAccordions,
    assessmentScore,
    assessmentSeverity,
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
    retakeDescription,
    resultsTestimonial: {
      testimonialQuote,
      testimonialAuthor,
    },
    assessmentSeverity,
  };

  const retakeSectionProps = {
    title,
    retakeDescription,
    resultsTestimonial: {
      testimonialQuote,
      testimonialAuthor,
    },
  };

  const otherResourcesProps = {
    otherResourcesHeader,
    otherResourcesDescription,
  };

  return (
    <AssessmentLayout
      currentPage={stepperPages.results}
      startingPage={startingPage as StepperPagesType}
    >
      <Header text={resultsHeader} variant="h2" />
      {assessmentScore > -1 ? (
        <>
          <p>Score: {assessmentScore}</p>
          <p>Severity: {assessmentSeverity}</p>
          <p>Did you trip a trigger question: {triggered ? "Yes" : "No"}</p>
          {/* remove above line concerning trigger question once its properly used */}
          <ResultsSection {...resultsSectionProps} />
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
  query MyQuery {
    contentfulResultsPage(title: { eq: "Results Page" }) {
      title
      resultsHeader
      resultsDescription
      allResultsAccordions {
        id
        title
        summary
        scoreRange
        description {
          raw
        }
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
      resultsTestimonial {
        testimonialQuote
        testimonialAuthor
      }
      otherResourcesHeader
      otherResourcesDescription {
        raw
      }
    }
  }
`;

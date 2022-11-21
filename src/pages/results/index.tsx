import { graphql, PageProps } from "gatsby";
import React from "react";
import { stepperPages } from "../../components/pages/AssessmentsPage/AssessmentStepper/AssessmentStepper";
import { StepperPagesType } from "../../components/pages/AssessmentsPage/AssessmentStepper/AssessmentStepper-types";
import {
  OtherResources,
  Resources,
  Results,
  Retake,
} from "../../components/pages/ResultsPage";
import { setHeadTitle } from "../../globalFunctions/setHeadTitle";
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
    crisisHotlineButton,
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

  const determineAssessmentSeverity = () => {
    return severityRubric?.find(({ min, max }) => {
      const isScoreInRange = assessmentScore >= min && assessmentScore <= max;
      return isScoreInRange;
    });
  };
  const assessmentSeverity = determineAssessmentSeverity()?.severity;
  const accordionData = allAccordionContents?.find(
    (accordion) => accordion.type === assessmentType,
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
    crisisHotlineButton,
    articlesDescription,
    allArticles,
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
      {assessmentScore > -1 ? (
        <>
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

export const Head = () => setHeadTitle("Results");

export const query = graphql`
  query {
    contentfulResultsPage(title: { eq: "Results Page" }) {
      resultsHeader
      resultsDescription
      allAccordionContents {
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
      crisisHotlineButton {
        text
        phoneNumber
      }
      allArticles {
        type
        label
        icon {
          url
        }
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
  }
`;

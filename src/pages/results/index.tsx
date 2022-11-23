import { graphql, PageProps } from "gatsby";
import React, { useState } from "react";
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
    triggered,
    startingPage,
    assessmentType,
    maxScore,
    triggered,
  } = state || {};
  const [alertOpen, setAlertOpen] = useState(triggered || false);

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
  const crisisWarningMessage =
    "Because of your response, BFDI is here to help you right away. " +
    "Please contact one of our caring staff at 1-844-SEE-HOPE";
  const crisisWarningPhoneNumber = "1-844-773-4673";
  const shouldRenderCrisisInfo =
    assessmentSeverity === "Severe" || assessmentSeverity === "Severe Level";

  const resultsSectionProps = {
    triggered,
    crisisWarningMessage,
    crisisWarningPhoneNumber,
    resultsHeader,
    resultsDescription,
    resourcesHeader,
    accordionData,
    assessmentScore,
    assessmentSeverity,
    maxScore,
    bookAppointmentButtonText,
    bookAppointmentPhoneNumber,
    crisisLineButtonText,
    crisisLinePhoneNumber,
    assessmentType,
    allArticles,
    otherResourcesHeader,
    shouldRenderCrisisInfo,
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
    shouldRenderCrisisInfo,
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
      isAlertOpen={alertOpen}
      handleAlert={setAlertOpen}
      alertMSG={
        <>
          Because of your response, BFDI is here to help you right away. Please
          contact one of our caring staff at 1-844-SEE-HOPE (
          <a href="tel:1-844-773-4673">1-844-773-4673</a>).
        </>
      }
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

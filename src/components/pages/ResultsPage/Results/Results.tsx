import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import React from "react";
import Accordion from "../../../Accordion/Accordion";
import { Header } from "../../../Header";
import { Paragraph } from "../../../Paragraph";
import {
  EmailExternalLinkStyled,
  IconContainer,
  ScreenShotOrEmailContainer,
  UpperParagraphSpacing,
} from "./Results.styles";
import { ResultsTypes } from "./Results-types";

const Results = ({
  triggered,
  crisisWarningMessage,
  crisisWarningPhoneNumber,
  resultsHeader,
  resultsDescription,
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
}: ResultsTypes) => {
  const shouldAccordionRender =
    accordionData?.title &&
    accordionData?.summary &&
    accordionData?.description &&
    typeof assessmentScore === "number" &&
    assessmentSeverity;

  const accordionProps = {
    assessmentScore,
    assessmentSeverity,
    title: accordionData?.label,
    summary: accordionData?.summary,
    description: accordionData?.description,
    scoreTable: accordionData?.scoreTable,
  };
  accordionProps;

  const crisisWarning = triggered
    ? `${crisisWarningMessage} (${crisisWarningPhoneNumber})%0D%0A%0D%0A`
    : "";
  const scoreAndSeverity = `Score: ${assessmentScore}/${maxScore} [${assessmentSeverity}-Symptoms]`;

  const assessmentSpecificArticles = allArticles.find(
    (element) => element.type === assessmentType,
  )?.articles;
  let symptomsDescription = "";
  if (accordionData?.description !== undefined) {
    symptomsDescription =
      JSON.parse(accordionData?.description?.raw).content[0].content[0].value +
      "%0D%0A%0D%0A";
  }
  const crisisLineSection = shouldRenderCrisisInfo
    ? `${crisisLineButtonText}: ${crisisLinePhoneNumber}%0D%0A`
    : "";
  let articleList = "";
  if (assessmentSpecificArticles !== undefined) {
    for (const article of assessmentSpecificArticles) {
      articleList += `Title: ${article.title}%0D%0A Source: ${article.source}%0D%0A Link: ${article.link}%0D%0A%0D%0A`;
    }
  }

  const emailBody = `
  ${crisisWarning}
  ${resultsHeader}:%0D%0A
  ${scoreAndSeverity}%0D%0A%0D%0A
  ${symptomsDescription}
  Direct Assistance:%0D%0A
  ${crisisLineSection}
  ${bookAppointmentButtonText}: ${bookAppointmentPhoneNumber}%0D%0A%0D%0A
  Helpful Articles:%0D%0A
  ${articleList}
  ${otherResourcesHeader}:%0D%0A
  Frequrently Asked Questions: https://hopeishereatbfdi.com/faq%0D%0A
  Black Family Development Inc.: https://www.blackfamilydevelopment.org/
`;

  return (
    <>
      <Header text={resultsHeader} variant="h2" />
      <UpperParagraphSpacing>
        <Paragraph>{resultsDescription}</Paragraph>
      </UpperParagraphSpacing>
      {shouldAccordionRender && (
        <Accordion
          title={accordionData.label}
          type={accordionData.type}
          summary={accordionData.summary}
          description={accordionData.description}
          scoreTable={accordionData.scoreTable}
          scoreAndSeverity={scoreAndSeverity}
        />
      )}
      <ScreenShotOrEmailContainer>
        <IconContainer>
          <CropOriginalIcon />
        </IconContainer>
        <Paragraph>
          Take a screenshot or{" "}
          <EmailExternalLinkStyled
            href={`mailto:?subject=${accordionData?.label} Check-in Results and Resources&body=${emailBody}`}
          >
            Email
          </EmailExternalLinkStyled>{" "}
          your results.
        </Paragraph>
      </ScreenShotOrEmailContainer>
    </>
  );
};

export default Results;

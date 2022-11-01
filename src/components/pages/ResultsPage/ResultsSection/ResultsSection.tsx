import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import React from "react";
import { ResultsPageResultsSection } from "../../../../pages/results/ResultsPage-types";
import Accordion from "../../../Accordion/Accordion";
import { Header } from "../../../Header";
import { Paragraph } from "../../../Paragraph";
import {
  BottomParagraphContainer,
  EmailExternalLinkStyled,
  IconContainer,
  TextContainer,
  UpperParagraphContainer,
} from "./ResultsSection.styles";

const ResultsSection = ({
  resultsHeaderText,
  resultsSummaryText,
  resultsAccordionData,
  assessmentScore,
  assessmentSeverity,
}: ResultsPageResultsSection) => {
  return (
    <>
      <Header text={resultsHeaderText} variant="h2" />
      <UpperParagraphContainer>
        <Paragraph>{resultsSummaryText}</Paragraph>
      </UpperParagraphContainer>
      {resultsAccordionData?.map((accordion) => {
        return (
          <Accordion
            assessmentScore={assessmentScore}
            assessmentSeverity={assessmentSeverity}
            key={accordion.id}
            title={accordion.title}
            summary={accordion.summary}
            body={accordion.body.body}
          />
        );
      })}
      <BottomParagraphContainer>
        <IconContainer>
          <CropOriginalIcon />
        </IconContainer>
        <TextContainer>
          <Paragraph>
            Take a screenshot or{" "}
            <EmailExternalLinkStyled href="mailto:?subject=Test testing&body=This is the body!">
              Email
            </EmailExternalLinkStyled>{" "}
            your results.
          </Paragraph>
        </TextContainer>
      </BottomParagraphContainer>
    </>
  );
};

export default ResultsSection;

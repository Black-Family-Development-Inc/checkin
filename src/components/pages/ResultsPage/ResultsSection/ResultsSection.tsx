import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import React from "react";
import Accordion from "../../../Accordion/Accordion";
import { Header } from "../../../Header";
import { Paragraph } from "../../../Paragraph";
import {
  BottomParagraphContainer,
  ExternalLinkStyled,
  IconContainer,
  TextContainer,
  UpperParagraphContainer,
} from "./ResultsSection.styles";
import { ResultsTypes } from "./ResultsSection-types";

const ResultsSection = ({
  resultsHeader,
  resultsDescription,
  allResultsAccordions,
  assessmentScore,
  assessmentSeverity,
}: ResultsTypes) => {
  return (
    <>
      <Header text={resultsHeader} variant="h2" />
      <UpperParagraphContainer>
        <Paragraph>{resultsDescription}</Paragraph>
      </UpperParagraphContainer>
      {allResultsAccordions?.map((accordion) => {
        return (
          <Accordion
            key={accordion.id}
            title={accordion.title}
            summary={accordion.summary}
            description={accordion.description.raw}
            assessmentScore={assessmentScore}
            assessmentSeverity={assessmentSeverity}
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
            <ExternalLinkStyled href="mailto:?subject=Test testing&body=This is the body!">
              Email
            </ExternalLinkStyled>{" "}
            your results.
          </Paragraph>
        </TextContainer>
      </BottomParagraphContainer>
    </>
  );
};

export default ResultsSection;

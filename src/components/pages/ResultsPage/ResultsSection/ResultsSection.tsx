import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import React from "react";
import { ResultsPageResultsSection } from "../../../../pages/components/results/results-section-{contentfulResultsPage.title}";
import Accordion from "../../../Accordion/Accordion";
import { Header } from "../../../Header";
import { HR } from "../../../HR";
import { Paragraph } from "../../../Paragraph";
import {
  BottomParagraphContainer,
  ExternalLinkStyled,
  IconContainer,
  TextContainer,
  UpperParagraphContainer,
} from "./ResultsSection.styles";

const ResultsSection = ({
  resultsHeaderText,
  resultsSummaryText,
  resultsAccordionData,
}: ResultsPageResultsSection) => {
  return (
    <>
      <Header text={resultsHeaderText} />
      <HR />
      <UpperParagraphContainer>
        <Paragraph>{resultsSummaryText}</Paragraph>
      </UpperParagraphContainer>
      {resultsAccordionData?.map((accordion) => {
        return (
          <Accordion
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

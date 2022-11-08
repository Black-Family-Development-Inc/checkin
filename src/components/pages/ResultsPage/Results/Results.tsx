import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import React from "react";
import Accordion from "../../../Accordion/Accordion";
import { Header } from "../../../Header";
import { Paragraph } from "../../../Paragraph";
import {
  BottomParagraphContainer,
  EmailExternalLinkStyled,
  IconContainer,
  TextContainer,
  UpperParagraphContainer,
} from "./Results.styles";
import { ResultsTypes } from "./Results-types";

const Results = ({
  resultsHeader,
  resultsDescription,
  accordionData,
  assessmentScore,
  assessmentSeverity,
  maxScore,
}: ResultsTypes) => {
  return (
    <>
      <Header text={resultsHeader} variant="h2" />
      <UpperParagraphContainer>
        <Paragraph>{resultsDescription}</Paragraph>
      </UpperParagraphContainer>
      {accordionData?.title &&
        accordionData?.summary &&
        accordionData?.description &&
        typeof assessmentScore === "number" &&
        assessmentSeverity && (
          <Accordion
            title={accordionData.label}
            summary={accordionData.summary}
            description={accordionData.description.raw}
            scoreTable={accordionData.scoreTable}
            score={{ assessmentScore, maxScore, assessmentSeverity }}
          />
        )}
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

export default Results;

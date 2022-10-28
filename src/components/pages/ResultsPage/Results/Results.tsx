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
  accordionGroup,
  assessmentScore,
  assessmentSeverity,
  maxScore,
}: ResultsTypes) => {
  const assessmentLabel = accordionGroup?.label;
  const accordion = accordionGroup?.accordions?.find(
    (accordion) => accordion.severity === assessmentSeverity,
  );
  return (
    <>
      <Header text={resultsHeader} variant="h2" />
      <UpperParagraphContainer>
        <Paragraph>{resultsDescription}</Paragraph>
      </UpperParagraphContainer>
      <Accordion
        key={accordion?.id}
        title={assessmentLabel}
        summary={accordion?.summary}
        description={accordion?.description?.raw}
        assessmentScore={assessmentScore}
        maxScore={maxScore}
        assessmentSeverity={assessmentSeverity}
      />
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

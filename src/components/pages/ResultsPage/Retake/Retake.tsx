import React from "react";
import MultiButton from "../../../MultiButton/MultiButton";
import {
  ResultsPageLeftLinkStyled,
  ResultsPageRightLinkStyled,
} from "../../../MultiButton/MultiButton.styles";
// import { LinkStyled } from "../../../MultiButton/MultiButton.styles";
import { Paragraph } from "../../../Paragraph";
import { TestimonialSection } from "../../../Testimonial";
import { RetakeAndStartOverStyled } from "./Retake.styles";
import { RetakeTypes } from "./Retake-types";

const RetakeSection = ({
  assessmentType,
  retakeDescription,
  testimonialSection,
  retakeButtonText,
  retakeButtonLink,
  startOverButtonText,
  startOverButtonLink,
}: RetakeTypes) => {
  return (
    <>
      <Paragraph>{retakeDescription}</Paragraph>
      <RetakeAndStartOverStyled>
        <ResultsPageLeftLinkStyled
          to={retakeButtonLink + assessmentType?.toLowerCase()}
        >
          <MultiButton version="retake" label={retakeButtonText} />
        </ResultsPageLeftLinkStyled>
        <ResultsPageRightLinkStyled to={startOverButtonLink}>
          <MultiButton version="startOver" label={startOverButtonText} />
        </ResultsPageRightLinkStyled>
      </RetakeAndStartOverStyled>
      <TestimonialSection {...testimonialSection} />
    </>
  );
};

export default RetakeSection;

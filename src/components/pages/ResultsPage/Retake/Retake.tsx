import React from "react";
import MultiButton from "../../../MultiButton/MultiButton";
import { Paragraph } from "../../../Paragraph";
import { TestimonialSection } from "../../../Testimonial";
import {
  LeftLinkStyled,
  ParagraphSpacing,
  RetakeAndStartOverContainer,
  RightLinkStyled,
} from "./Retake.styles";
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
      <ParagraphSpacing>
        <Paragraph>{retakeDescription}</Paragraph>
      </ParagraphSpacing>
      <RetakeAndStartOverContainer>
        <LeftLinkStyled to={retakeButtonLink + assessmentType?.toLowerCase()}>
          <MultiButton version="retake" label={retakeButtonText} />
        </LeftLinkStyled>
        <RightLinkStyled to={startOverButtonLink}>
          <MultiButton version="startOver" label={startOverButtonText} />
        </RightLinkStyled>
      </RetakeAndStartOverContainer>
      <TestimonialSection {...testimonialSection} />
    </>
  );
};

export default RetakeSection;

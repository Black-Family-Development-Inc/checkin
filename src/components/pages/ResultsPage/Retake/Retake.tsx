import React from "react";
import MultiButton from "../../../MultiButton/MultiButton";
import { Paragraph } from "../../../Paragraph";
import { TestimonialSection } from "../../../Testimonial";
import {
  LinkStyled,
  ParagraphSpacing,
  RetakeAndStartOverContainer,
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
        <LinkStyled
          to={retakeButtonLink + assessmentType?.toLowerCase()}
          tabIndex={-1}
        >
          <MultiButton version="retake" label={retakeButtonText} />
        </LinkStyled>
        <LinkStyled to={startOverButtonLink} tabIndex={-1}>
          <MultiButton version="startOver" label={startOverButtonText} />
        </LinkStyled>
      </RetakeAndStartOverContainer>
      <TestimonialSection {...testimonialSection} />
    </>
  );
};

export default RetakeSection;

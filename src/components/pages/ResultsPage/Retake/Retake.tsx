import React from "react";
import MultiButton from "../../../MultiButton/MultiButton";
import { LinkStyled } from "../../../MultiButton/MultiButton.styles";
import { TestimonialSection } from "../../../Testimonial";
import { RetakeAndStartOverStyled, TextStyled } from "./Retake.styles";
import { RetakeTypes } from "./Retake-types";

const RetakeSection = ({
  assessmentType,
  retakeDescription,
  resultsTestimonial,
  retakeButtonText,
  retakeButtonLink,
  startOverButtonText,
  startOverButtonLink,
}: RetakeTypes) => {
  return (
    <>
      <TextStyled>{retakeDescription}</TextStyled>
      <RetakeAndStartOverStyled>
        <LinkStyled to={retakeButtonLink + assessmentType?.toLowerCase()}>
          <MultiButton version="retake" label={retakeButtonText} />
        </LinkStyled>
        <LinkStyled to={startOverButtonLink}>
          <MultiButton version="startOver" label={startOverButtonText} />
        </LinkStyled>
      </RetakeAndStartOverStyled>
      <TestimonialSection
        testimonial={resultsTestimonial.testimonialQuote}
        testimonialParticipant={resultsTestimonial.testimonialAuthor}
      />
    </>
  );
};

export default RetakeSection;

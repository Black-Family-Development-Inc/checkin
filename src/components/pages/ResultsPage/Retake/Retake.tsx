import React from "react";
import MultiButton from "../../../MultiButton/MultiButton";
import { LinkStyled } from "../../../MultiButton/MultiButton.styles";
import { TestimonialSection } from "../../../Testimonial";
import { RetakeAndStartOverStyled, TextStyled } from "./Retake.styles";
import { RetakeTypes } from "./Retake-types";

const RetakeSection = ({
  title,
  retakeDescription,
  resultsTestimonial,
}: RetakeTypes) => {
  const retakeBtnLabel = "Retake";
  const startOverBtnLabel = "Start Over";
  const retakeBtnLink = "/assessments/" + title?.toLowerCase();
  const scrollToLink = "/#scroll";

  return (
    <>
      <TextStyled>{retakeDescription}</TextStyled>
      <RetakeAndStartOverStyled>
        <LinkStyled to={retakeBtnLink}>
          <MultiButton version="retake" label={retakeBtnLabel} />
        </LinkStyled>
        <LinkStyled to={scrollToLink}>
          <MultiButton version="startOver" label={startOverBtnLabel} />
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

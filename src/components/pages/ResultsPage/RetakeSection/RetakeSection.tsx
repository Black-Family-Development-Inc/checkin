import React from "react";
import MultiButton from "../../../MultiButton/MultiButton";
import { LinkStyled } from "../../../MultiButton/MultiButton.styles";
import { Paragraph } from "../../../Paragraph";
import { TestimonialSection } from "../../../Testimonial";
import { RetakeAndStartOverStyled } from "./RetakeSection.styles";
import { RetakeSectionType } from "./RetakeSection-types";

const RetakeSection = (props: RetakeSectionType) => {
  const { title, retakeDescription, resultsTestimonial } = props;
  const retakeBtnLabel = "Retake";
  const startOverBtnLabel = "Start Over";
  const retakeBtnLink = "/assessments/" + title?.toLowerCase();
  const scrollToLink = "/#scroll";

  return (
    <>
      <Paragraph>{retakeDescription}</Paragraph>
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

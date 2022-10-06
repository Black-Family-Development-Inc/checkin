import { Link } from "gatsby";
import React from "react";
import MultiButton from "../../../MultiButton/MultiButton";
import { TestimonialSection } from "../../IndexPage/Testimonial";
import { RetakeAndStartOverStyled, TextStyled } from "./RetakeSection.styles";
import { RetakeSectionType } from "./RetakeSection-types";

const RetakeSection = (props: RetakeSectionType) => {
  const { title, retakeDescription, resultsTestimonial } = props;
  const retakeBtnLabel = "Retake";
  const startOverBtnLabel = "Start Over";
  const retakeBtnLink = "/assessments/" + title?.toLowerCase();
  const scrollToLink = "/#scroll";

  return (
    <>
      <TextStyled>{retakeDescription}</TextStyled>
      <RetakeAndStartOverStyled>
        <Link to={retakeBtnLink}>
          <MultiButton version="retake" label={retakeBtnLabel} />
        </Link>
        <Link to={scrollToLink}>
          <MultiButton version="startOver" label={startOverBtnLabel} />
        </Link>
      </RetakeAndStartOverStyled>
      <TestimonialSection
        testimonial={resultsTestimonial.testimonialQuote}
        testimonialParticipant={resultsTestimonial.testimonialAuthor}
      />
    </>
  );
};

export default RetakeSection;

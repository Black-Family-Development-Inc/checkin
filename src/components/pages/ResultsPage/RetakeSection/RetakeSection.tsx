import { Typography } from "@mui/material";
import React from "react";
import AssessmentButton from "../../IndexPage/AssessmentButton/AssessmentButton";
import { TestimonialSection } from "../../IndexPage/Testimonial";
import { RetakeSectionType } from "./RetakeSection-types";

const RetakeSection = (props: RetakeSectionType) => {
  const { title, retakeDescription, resultsTestimonial } = props;
  const retakeBtnLabel = "Retake";
  const startOverBtnLabel = "Start Over";
  const retakeBtnLink = "/assessments/" + title?.toLowerCase();
  const scrollToLink = "/#scroll";

  return (
    <>
      <Typography paragraph>{retakeDescription}</Typography>
      <AssessmentButton text={retakeBtnLabel} link={retakeBtnLink} />
      <AssessmentButton text={startOverBtnLabel} link={scrollToLink} />
      <TestimonialSection
        testimonial={resultsTestimonial.testimonialQuote}
        testimonialParticipant={resultsTestimonial.testimonialAuthor}
      />
    </>
  );
};

export default RetakeSection;

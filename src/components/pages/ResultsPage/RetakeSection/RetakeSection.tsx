import { Typography } from "@mui/material";
import React from "react";
import MultiButton from "../../../MultiButton/MultiButton";
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
      <MultiButton
        version="retake"
        label={retakeBtnLabel}
        link={retakeBtnLink}
      />
      <MultiButton
        version="startOver"
        label={startOverBtnLabel}
        link={scrollToLink}
      />
      <TestimonialSection
        testimonial={resultsTestimonial.testimonialQuote}
        testimonialParticipant={resultsTestimonial.testimonialAuthor}
      />
    </>
  );
};

export default RetakeSection;

import { Typography } from "@mui/material";
import React from "react";
import AssessmentButton from "../../../components/pages/IndexPage/AssessmentButton/AssessmentButton";
import { TestimonialSection } from "../../../components/pages/IndexPage/Testimonial";
import { RetakeSectionType } from "../../IndexPage-types";

const RetakeSection = (props: RetakeSectionType) => {
  const { title, retakeDescription, testimonial, testimonialParticipant } =
    props;
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
        testimonial={testimonial}
        testimonialParticipant={testimonialParticipant}
      />
    </>
  );
};

export default RetakeSection;

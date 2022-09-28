import { Typography } from "@mui/material";
import React from "react";
import { RetakeSectionType } from "../../../../pages/IndexPage-types";
import ButtonLink from "../../../components/ButtonLink/ButtonLink";
import { TestimonialSection } from "../../../components/pages/IndexPage/Testimonial";

const RetakeSection = (props: RetakeSectionType) => {
  const { title, retakeDescription, testimonial, testimonialParticipant } =
    props;
  const retakeBtnLabel = "Retake";
  const startOverBtnLabel = "Start Over";
  const retakeBtnLink = "/assessments/" + title.toLowerCase();
  const scrollToLink = "/#scroll";

  return (
    <>
      <Typography paragraph>{retakeDescription}</Typography>
      <ButtonLink disabled={false} text={retakeBtnLabel} link={retakeBtnLink} />
      <ButtonLink
        disabled={false}
        text={startOverBtnLabel}
        link={scrollToLink}
      />
      <TestimonialSection
        testimonial={testimonial}
        testimonialParticipant={testimonialParticipant}
      />
    </>
  );
};

export default RetakeSection;

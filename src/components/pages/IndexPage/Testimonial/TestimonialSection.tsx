import React from "react";
import { TestimonialSectionType } from "../../../../pages/IndexPage-types";
import { BoxStyled, ContainerStyled } from "./TestimonialSection.styles";

const TestimonialSection = (props: TestimonialSectionType) => {
  const { testimonial, testimonialParticipant } = props;

  return (
    <ContainerStyled>
      <BoxStyled>{`"${testimonial}"`}</BoxStyled>
      <BoxStyled>{testimonialParticipant}</BoxStyled>
    </ContainerStyled>
  );
};

export default TestimonialSection;

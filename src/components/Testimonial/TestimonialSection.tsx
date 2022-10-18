import React from "react";
import QuoteSVG from "../../images/Vector.svg";
import {
  BoxStyled,
  ContainerStyled,
  ImageStyled,
} from "./TestimonialSection.styles";
import { TestimonialSectionType } from "./TestimonialSection-types";

const TestimonialSection = (props: TestimonialSectionType) => {
  const { testimonial, testimonialParticipant } = props;

  return (
    <ContainerStyled>
      <ImageStyled src={QuoteSVG} alt="" />
      <BoxStyled>{`"${testimonial}"`}</BoxStyled>
      <BoxStyled>{testimonialParticipant}</BoxStyled>
    </ContainerStyled>
  );
};

export default TestimonialSection;

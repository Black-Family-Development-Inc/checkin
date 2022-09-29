import React from "react";
import QuoteSVG from "../../../../images/Vector.svg";
import { TestimonialSectionType } from "../../../../pages/IndexPage-types";
import {
  BoxStyled,
  ContainerStyled,
  ImageStyled,
} from "./TestimonialSection.styles";

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

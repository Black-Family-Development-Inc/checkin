import React from "react";
import { ContentfulHomePage } from "../../../../pages/IndexPage-types";
import { BoxStyled, ContainerStyled, ImageStyled } from "./TestimonialSection.styles";
import QuoteSVG from "../../../../images/Vector.svg";

const TestimonialSection = (props: ContentfulHomePage) => {
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

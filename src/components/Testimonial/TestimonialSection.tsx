import React from "react";
import {
  BoxStyled,
  ContainerStyled,
  ImageStyled,
} from "./TestimonialSection.styles";
import { TestimonialSectionType } from "./TestimonialSection-types";

const TestimonialSection = ({
  testimonialQuote,
  testimonialAuthor,
  quoteImage,
}: TestimonialSectionType) => {
  return (
    <ContainerStyled>
      <ImageStyled src={quoteImage.url} alt="" />
      <BoxStyled>{`"${testimonialQuote}"`}</BoxStyled>
      <BoxStyled>{testimonialAuthor}</BoxStyled>
    </ContainerStyled>
  );
};

export default TestimonialSection;

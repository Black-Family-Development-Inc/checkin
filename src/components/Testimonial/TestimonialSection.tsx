import React from "react";
import { Paragraph } from "../Paragraph";
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
      <ImageStyled src={quoteImage?.url} alt="" />
      <BoxStyled>
        <Paragraph sx={{ fontStyle: "italic" }}>
          {`"${testimonialQuote}"`}
        </Paragraph>
      </BoxStyled>
      <BoxStyled>
        <Paragraph>{testimonialAuthor}</Paragraph>
      </BoxStyled>
    </ContainerStyled>
  );
};

export default TestimonialSection;

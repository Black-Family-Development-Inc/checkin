import React from "react";
import ErrorSVG from "../../images/Error_page.svg";
import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";
import { breakpoints } from "../../styles/theme";
import { HeaderStyled } from "../Header/Header.styles";
import { ImageStyled } from "../Image/img.styles";
import MultiButton from "../MultiButton/MultiButton";
import { Paragraph } from "../Paragraph";
import { BoxStyled } from "../Testimonial/TestimonialSection.styles";

const ErrorComp = () => {
  return (
    <DefaultLayout>
      <HeaderStyled error variant="h1">
        Oops!
      </HeaderStyled>

      <Paragraph
        sx={{
          fontSize: 20,
          fontWeight: 500,
          margin: "0 0 40px",
          [`@media(min-width: ${breakpoints.tablet}px)`]: {
            fontSize: 24,
            fontWeight: 600,
          },
        }}
      >
        Well, this was unexpected...
      </Paragraph>

      <BoxStyled>
        <ImageStyled error src={ErrorSVG} />
      </BoxStyled>

      <Paragraph
        sx={{
          fontWeight: 500,
          margin: "40px 0 20px",
          [`@media(min-width: ${breakpoints.tablet}px)`]: {
            margin: "48px 0 20px",
          },
          [`@media(min-width: ${breakpoints.desktop}px)`]: {
            margin: "56px 0 20px",
          },
        }}
      >
        An error has occurred and we're working to fix the problem! We'll be up
        and running shortly.
      </Paragraph>

      <Paragraph
        sx={{
          fontWeight: 500,
          margin: "0 0 56px",
          [`@media(min-width: ${breakpoints.tablet}px)`]: {
            margin: "48px 0 80px",
          },
          [`@media(min-width: ${breakpoints.desktop}px)`]: {
            margin: "0 0 104px",
          },
        }}
      >
        If you are in crisis and need immediate help. Please call{" "}
        {
          <MultiButton
            version="phoneNumberBasic"
            label="Crisis Hotline"
            link="tel:988"
          />
        }
        . Otherwise, visit the{" "}
        {
          <MultiButton
            version="externalLinkBasic"
            label="BFDI Homepage"
            link="https://www.blackfamilydevelopment.org/"
          />
        }{" "}
        to learn more about what we do.
      </Paragraph>
    </DefaultLayout>
  );
};

export default ErrorComp;

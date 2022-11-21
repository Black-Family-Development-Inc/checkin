import React from "react";
import ErrorSVG from "../../images/Error_page.svg";
import { Header } from "../Header";
import { ImageStyled } from "../Image/img.styles";
import MultiButton from "../MultiButton/MultiButton";
import { Paragraph } from "../Paragraph";

const ErrorComp = () => {
  return (
    <>
      <Header variant="h1" text="Oops!" />
      <Paragraph>Well, this was unexpected...</Paragraph>

      <ImageStyled src={ErrorSVG} />

      <Paragraph>
        An error has occurred and we're working to fix the problem! We'll be up
        and running shortly.
      </Paragraph>

      <Paragraph>
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
    </>
  );
};

export default ErrorComp;

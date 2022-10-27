import React from "react";
import ErrorSVG from "../../images/Error_page.svg";
import { Header } from "../Header";
import { ImageStyled } from "../Image/img.styles";
import { Paragraph } from "../Paragraph";

const Error = () => {
  return (
    <>
      <Header variant="h1" text="Oops!" />
      <Paragraph>Well, this was unexpected...</Paragraph>

      <ImageStyled src={ErrorSVG} />

      <Paragraph>
        An error has occurred and we're working to fix the problem! We'll be up
        and running shortly. Try to refresh the page in a moment.
      </Paragraph>

      <Paragraph>
        If you are in crisis and need immediate help. Please call the Crisis
        Hotline. Otherwise, visit the BFDI Homepage to learn more about what we
        do.
      </Paragraph>
    </>
  );
};

export default Error;

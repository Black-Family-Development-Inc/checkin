import React from "react";
import { OtherResourcesTypes } from "../../../../pages/results/ResultsPage-types";
import { Header } from "../../../Header";
import {
  ExternalLinkStyled,
  InternalLinkStyled,
} from "../../../Link/Link.styles";
import { Paragraph } from "../../../Paragraph";

const OtherResources = ({
  title,
  bfdiLink,
  bfdiLinkText,
  bfdiResourcesParagraph,
  faqLink,
  faqLinkText,
  faqResourcesParagraph,
}: OtherResourcesTypes) => {
  return (
    <>
      <Header variant="h2" text={title} />
      <Paragraph sx={{ margin: "12px 0px 36px" }}>
        {faqResourcesParagraph + " "}
        <InternalLinkStyled to={faqLink}>{faqLinkText}</InternalLinkStyled>
      </Paragraph>
      <Paragraph>
        {bfdiResourcesParagraph + " "}
        <ExternalLinkStyled
          href={bfdiLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {bfdiLinkText}
        </ExternalLinkStyled>
      </Paragraph>
    </>
  );
};

export default OtherResources;

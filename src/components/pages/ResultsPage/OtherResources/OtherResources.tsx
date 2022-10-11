import { Link as ExternalLink } from "@mui/material";
import { Link as InternalLink } from "gatsby";
import React from "react";
import { OtherResourcesTypes } from "../../../../pages/components/results/other-resources-{contentfulResultsPage.title}";
import { Header } from "../../../Header";
import { HR } from "../../../HR";
import { LinkStyled } from "../../../Link/Link.styles";
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
      <Header text={title} />
      <HR />
      <Paragraph>
        {faqResourcesParagraph + " "}
        <InternalLink to={faqLink}>
          <LinkStyled>{faqLinkText}</LinkStyled>
        </InternalLink>
      </Paragraph>
      <Paragraph sx={{ marginBottom: "44px" }}>
        {bfdiResourcesParagraph + " "}
        <ExternalLink href={bfdiLink} target="_blank" rel="noopener noreferrer">
          <LinkStyled>{bfdiLinkText}</LinkStyled>
        </ExternalLink>
      </Paragraph>
    </>
  );
};

export default OtherResources;

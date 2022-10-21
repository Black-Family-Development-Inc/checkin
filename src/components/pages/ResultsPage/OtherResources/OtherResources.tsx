import { Link as ExternalLink } from "@mui/material";
import { Link as InternalLink } from "gatsby";
import React from "react";
import { OtherResourcesTypes } from "../../../../pages/components/results/other-resources-{contentfulResultsPage.title}";
import { HR } from "../../../HR";
import { LinkStyled } from "../../../Link/Link.styles";
import { Paragraph } from "../../../Paragraph";

const OtherResources = ({
  bfdiLink,
  bfdiLinkText,
  bfdiResourcesParagraph,
  faqLink,
  faqLinkText,
  faqResourcesParagraph,
}: OtherResourcesTypes) => {
  return (
    <>
      <HR />
      <Paragraph sx={{ margin: "12px 0px 36px" }}>
        {faqResourcesParagraph + " "}
        <InternalLink to={faqLink}>
          <LinkStyled>{faqLinkText}</LinkStyled>
        </InternalLink>
      </Paragraph>
      <Paragraph>
        {bfdiResourcesParagraph + " "}
        <ExternalLink href={bfdiLink} target="_blank" rel="noopener noreferrer">
          <LinkStyled>{bfdiLinkText}</LinkStyled>
        </ExternalLink>
      </Paragraph>
    </>
  );
};

export default OtherResources;

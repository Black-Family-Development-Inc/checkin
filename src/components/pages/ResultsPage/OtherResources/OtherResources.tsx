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
        <LinkStyled>
          <InternalLink to={faqLink}>{faqLinkText}</InternalLink>
        </LinkStyled>
      </Paragraph>
      <Paragraph sx={{ marginBottom: "44px" }}>
        {bfdiResourcesParagraph + " "}
        <LinkStyled>
          <ExternalLink
            href={bfdiLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {bfdiLinkText}
          </ExternalLink>
        </LinkStyled>
      </Paragraph>
    </>
  );
};

export default OtherResources;

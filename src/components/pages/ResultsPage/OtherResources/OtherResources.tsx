import { Link as ExternalLink } from "@mui/material";
import { Link as InternalLink } from "gatsby";
import React from "react";
import { OtherResourcesTypes } from "../../../../pages/results/ResultsPage-types";
import { Header } from "../../../Header";
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
      <Header variant="h2" text={title} />
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

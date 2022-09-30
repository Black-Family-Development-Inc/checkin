import { Typography } from "@mui/material";
import React from "react";
import { OtherResourcesTypes } from "../../../../pages/components/results/other-resources-{contentfulResultsPage.title}";

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
      <Typography variant="h2">{title}</Typography>
      <Typography paragraph>
        {faqResourcesParagraph + " "}
        <a href={faqLink}>{faqLinkText}</a>
      </Typography>
      <Typography paragraph>
        {bfdiResourcesParagraph + " "}
        <a href={bfdiLink} target="_blank" rel="noopener noreferrer">
          {bfdiLinkText}
        </a>
      </Typography>
    </>
  );
};

export default OtherResources;

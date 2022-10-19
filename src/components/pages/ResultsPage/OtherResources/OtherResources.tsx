import { Typography } from "@mui/material";
import React from "react";
import { OtherResourcesTypes } from "../../../../pages/results/ResultsPage-types";
import { Header } from "../../../Header";

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

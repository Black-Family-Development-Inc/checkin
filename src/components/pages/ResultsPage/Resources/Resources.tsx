import Typography from "@mui/material/Typography";
import { navigate } from "gatsby";
import React from "react";
import { ResourcesTypes } from "../../../../pages/components/results/resources-section-{contentfulResultsPage.title}";
import ArticleList from "../../../ArticleList/ArticleList";

const Resources = ({
  header,
  bfdiButtonDescription,
  bfdiButtonText,
  bfdiIntakeNumber,
  crisisLineButtonText,
  crisisLineDescription,
  crisisLineNumber,
  headingForArticles,
  allResourcesLink,
  allResourcesText,
  articles,
  title, // remove title once merged with results pages, its only for testing purposes
  severity,
}: ResourcesTypes) => {
  const renderCrisisButton =
    severity === "High" || title === "Resources for DAST-10"; //this will need to be changed once merged with the actual results pages
  return (
    <>
      <Typography variant="h2">{header}</Typography>
      <Typography paragraph>{bfdiButtonDescription}</Typography>
      <button id={bfdiIntakeNumber}>{bfdiButtonText}</button>
      {renderCrisisButton && (
        <div>
          <Typography paragraph>{crisisLineDescription}</Typography>
          <button id={crisisLineNumber}>{crisisLineButtonText}</button>
        </div>
      )}
      <Typography paragraph>{headingForArticles}</Typography>
      <ArticleList articles={articles} />
      <button onClick={() => navigate(allResourcesLink)}>
        {allResourcesText}
      </button>
      <hr />
    </>
  );
};

export default Resources;

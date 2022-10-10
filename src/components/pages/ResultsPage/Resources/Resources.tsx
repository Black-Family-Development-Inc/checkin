import Typography from "@mui/material/Typography";
import React from "react";
import { ResourcesTypes } from "../../../../pages/components/results/resources-section-{contentfulResultsPage.title}";
import ArticleList from "../../../ArticleList/ArticleList";
import MultiButton from "../../../MultiButton/MultiButton";

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
      <MultiButton
        version="phoneNumber"
        phoneNumber={bfdiIntakeNumber}
        label={bfdiButtonText}
      />
      {renderCrisisButton && (
        <div>
          <Typography paragraph>{crisisLineDescription}</Typography>
          <MultiButton
            version="phoneNumber"
            phoneNumber={crisisLineNumber}
            label={crisisLineButtonText}
          />
        </div>
      )}
      <Typography paragraph>{headingForArticles}</Typography>
      <ArticleList articles={articles} />
      <MultiButton
        version="allArticles"
        link={allResourcesLink}
        label={allResourcesText}
      />
      <hr />
    </>
  );
};

export default Resources;

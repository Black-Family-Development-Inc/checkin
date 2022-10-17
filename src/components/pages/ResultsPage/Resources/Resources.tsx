import Typography from "@mui/material/Typography";
import React from "react";
import { ResourcesTypes } from "../../../../pages/components/results/resources-section-{contentfulResultsPage.title}";
import ArticleList from "../../../ArticleList/ArticleList";
import { Header } from "../../../Header";
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
  severity,
}: ResourcesTypes) => {
  const shouldRenderCrisisButton =
    severity === "Severe" || severity === "Severe Level";
  return (
    <>
      <Header text={header} variant="h2" />
      <Typography paragraph>{bfdiButtonDescription}</Typography>
      <MultiButton
        version="phoneNumber"
        phoneNumber={bfdiIntakeNumber}
        label={bfdiButtonText}
      />
      {shouldRenderCrisisButton && (
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

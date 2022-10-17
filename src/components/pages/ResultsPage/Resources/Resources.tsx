import React from "react";
import { ResourcesTypes } from "../../../../pages/components/results/resources-section-{contentfulResultsPage.title}";
import ArticleList from "../../../ArticleList/ArticleList";
import { Header } from "../../../Header";
import { HR } from "../../../HR";
import MultiButton from "../../../MultiButton/MultiButton";
import { Paragraph } from "../../../Paragraph";
import { AllArticlesContainerStyled } from "./Resources.styles";

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
      <Header text={header} />
      <HR />
      <Paragraph paragraph>{bfdiButtonDescription}</Paragraph>

      <MultiButton
        version="phoneNumber"
        phoneNumber={bfdiIntakeNumber}
        label={bfdiButtonText}
      />

      {renderCrisisButton && (
        <div>
          <Paragraph paragraph>{crisisLineDescription}</Paragraph>
          <MultiButton
            version="phoneNumber"
            phoneNumber={crisisLineNumber}
            label={crisisLineButtonText}
          />
        </div>
      )}
      <Paragraph paragraph>{headingForArticles}</Paragraph>
      <ArticleList articles={articles} />

      <AllArticlesContainerStyled>
        <MultiButton
          version="allArticles"
          link={allResourcesLink}
          label={allResourcesText}
        />
      </AllArticlesContainerStyled>
      <hr />
    </>
  );
};

export default Resources;

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
  severity,
}: ResourcesTypes) => {
  const shouldRenderCrisisButton =
    severity === "Severe" || severity === "Severe Level";
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
      {shouldRenderCrisisButton && (
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

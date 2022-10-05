import { graphql, PageProps } from "gatsby";
import React from "react";
import { ArticleType } from "../../../components/ArticleList/Articles-types";
import { Resources } from "../../../components/pages/ResultsPage/Resources";

/**
 * These types are in this file and not in a separate dedicated file because they will be removed
 * once we start migrating all of the "results" componenents into a single file
 *
 * the title query and prop is just for testing the conditional rendering, once merged with actual results pages it shoud be removed
 */

type ResourcesPageTypes = {
  contentfulResultsPage: { resources: ResourcesTypes };
};

export type ResourcesTypes = {
  header: string;
  bfdiButtonDescription: string;
  bfdiButtonText: string;
  bfdiIntakeNumber: string;
  crisisLineButtonText: string;
  crisisLineDescription: string;
  crisisLineNumber: string;
  headingForArticles: string;
  allResourcesLink: string;
  allResourcesText: string;
  articles: ArticleType[];
  severity?: string; //this doesn't need an optional type once merged with results pages as it should be passed from parent component
  title: string; //remove once mereged with actual results pages
};

const ResourcesPage = ({ data }: PageProps<ResourcesPageTypes>) => {
  return <Resources {...data.contentfulResultsPage.resources} />;
};

export default ResourcesPage;

//remove "title" from line 42 inside the resources object once merged with actual results pages
export const query = graphql`
  query ($title: String) {
    contentfulResultsPage(title: { eq: $title }) {
      resources {
        title
        header
        bfdiButtonDescription
        bfdiButtonText
        bfdiIntakeNumber
        crisisLineButtonText
        crisisLineDescription
        crisisLineNumber
        headingForArticles
        allResourcesLink
        allResourcesText
        articles {
          articleLink
          articleSubTitle
          articleTitle
          articleType
        }
      }
    }
  }
`;

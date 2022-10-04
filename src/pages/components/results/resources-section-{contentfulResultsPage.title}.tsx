import { graphql, PageProps } from "gatsby";
import React from "react";
import { ArticleType } from "../../../components/Articles/Articles-types";
import { Resources } from "../../../components/pages/ResultsPage/Resources";

/**
 * These types are in this file and not in a separate dedicated file because they will be removed
 * once we start migrating all of the "results" componenents into a single file
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
};

const ResourcesPage = ({ data }: PageProps<ResourcesPageTypes>) => {
  console.log(data);
  return <Resources {...data.contentfulResultsPage.resources} />;
  //   return <>Made it!</>;
};

export default ResourcesPage;

export const query = graphql`
  query ($title: String) {
    contentfulResultsPage(title: { eq: $title }) {
      resources {
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

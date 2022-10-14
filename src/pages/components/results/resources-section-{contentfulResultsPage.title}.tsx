import { MenuItem, Select } from "@mui/material";
import { graphql, PageProps } from "gatsby";
import React, { useState } from "react";
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
  severity: Severity;
};

type Severity =
  | "None-Minimal"
  | "Mild"
  | "Moderate"
  | "Moderately Severe"
  | "Severe"
  | "No Problems Reported"
  | "Low Level"
  | "Moderate Level"
  | "Substantial Level"
  | "Severe Level";

const severities = [
  "None-Minimal",
  "Mild",
  "Moderate",
  "Moderately Severe",
  "Severe",
  "No Problems Reported",
  "Low Level",
  "Moderate Level",
  "Substantial Level",
  "Severe Level",
];

const ResourcesPage = ({ data }: PageProps<ResourcesPageTypes>) => {
  const [severity, setSeverity] = useState<Severity>("None-Minimal");

  return (
    <>
      <Select
        label="Severity"
        value={severity}
        onChange={(e) => setSeverity(e.target.value as Severity)}
      >
        {severities.map((severity) => (
          <MenuItem key={severity} value={severity}>
            {severity}
          </MenuItem>
        ))}
      </Select>

      <Resources
        {...data.contentfulResultsPage.resources}
        severity={severity}
      />
    </>
  );
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

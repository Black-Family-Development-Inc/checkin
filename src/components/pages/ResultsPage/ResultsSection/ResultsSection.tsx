import { Typography } from "@mui/material";
import React from "react";
import { ResultsPageResultsSection } from "../../../../pages/components/results/results-section-{contentfulResultsPage.title}";
import Accordion from "../../../Accordion/Accordion";
import { HR } from "../../../HR";

const ResultsSection = ({
  resultsHeaderText,
  resultsSummaryText,
  resultsAccordionData,
}: ResultsPageResultsSection) => {
  return (
    <>
      <Typography variant="h2">{resultsHeaderText}</Typography>
      <HR />
      <Typography paragraph>{resultsSummaryText}</Typography>

      {resultsAccordionData?.map((accordion) => {
        return (
          <Accordion
            key={accordion.id}
            title={accordion.title}
            summary={accordion.summary}
            body={accordion.body.body}
          />
        );
      })}

      <Typography paragraph>
        Take a screenshot or{" "}
        <a href="mailto:?subject=Test testing&body=This is the body!">Email</a>{" "}
        your results
      </Typography>
    </>
  );
};

export default ResultsSection;

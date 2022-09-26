import { Typography } from "@mui/material";
import React from "react";
import Accordion from "../../../Accordion/Accordion";
import { HR } from "../../../HR";

const ResultsSection = ({
  resultsHeader,
  resultsSummary,
  resultsAccordion,
}: ResultsSectionPropTypes) => {
  return (
    <>
      <Typography variant="h2">{resultsHeader}</Typography>
      <HR />
      <Typography paragraph>{resultsSummary}</Typography>

      <Accordion
        title={resultsAccordion.condition}
        summary={summary}
        body={body}
      />

      <Typography paragraph>
        Take a screenshot or{" "}
        <a href="mailto:?subject=Test testing&body=This is the body!">Email</a>{" "}
        your results
      </Typography>
    </>
  );
};

export default ResultsSection;

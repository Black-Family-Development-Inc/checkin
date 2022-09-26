import React from "react";
import Accordion from "../../../Accordion/Accordion";
import { HR } from "../../../HR";

const ResultsSection = () => {
  return (
    <>
      <h1>Results Section</h1>
      <HR />
      <p>Your responses indicate you may be experiencing the following:</p>

      <Accordion title="Anxiety" body="Lorem Ipsum" />
    </>
  );
};

export default ResultsSection;

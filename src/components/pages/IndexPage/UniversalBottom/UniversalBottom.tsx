import React from "react";
import { ContentfulHomePage } from "../../../../pages/IndexPage-types";
import MultiButton from "../../../MultiButton/MultiButton";
import {
  UniversalBottomHeader,
  UniversalBottomSubHeader,
} from "./UniversalBottom.styles";

const UniversalBottom = ({
  universalBottomSubHeader,
  universalBottomHeader,
  universalAssessmentButton: { text: assessmentButtonLabel, assessment },
}: ContentfulHomePage) => {
  return (
    <>
      <UniversalBottomHeader>{universalBottomHeader}</UniversalBottomHeader>
      <UniversalBottomSubHeader>
        {universalBottomSubHeader}
      </UniversalBottomSubHeader>
      <MultiButton
        version="universal"
        label={assessmentButtonLabel}
        link={"/assessments/" + assessment.title.toLowerCase()}
      />
    </>
  );
};

export default UniversalBottom;

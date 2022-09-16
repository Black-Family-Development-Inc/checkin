import React from "react";
import { ContentfulHomePage } from "../../../../pages/IndexPage-types";
import ButtonLink from "../../../ButtonLink/ButtonLink";
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
      <ButtonLink
        link={"/assessments/" + assessment.title.toLowerCase()}
        text={assessmentButtonLabel}
      />
    </>
  );
};

export default UniversalBottom;

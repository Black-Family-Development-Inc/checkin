import React from "react";
import { ContentfulHomePage } from "../../../../pages/IndexPage-types";
import {
  ButtonStyled,
  UniversalBottomHeader,
  UniversalBottomSubHeader,
} from "./UniversalBottom.styles";

const UniversalBottom = ({
  universalBottomSubHeader,
  universalBottomHeader,
  universalAssessmentButton: { text: assessmentButtonLabel },
}: ContentfulHomePage) => {
  return (
    <>
      <UniversalBottomHeader>{universalBottomHeader}</UniversalBottomHeader>
      <UniversalBottomSubHeader>
        {universalBottomSubHeader}
      </UniversalBottomSubHeader>
      <ButtonStyled>{assessmentButtonLabel}</ButtonStyled>
    </>
  );
};

export default UniversalBottom;

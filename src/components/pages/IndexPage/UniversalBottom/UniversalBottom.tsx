import React from "react";
import { ContentfulHomePage } from "../../../../pages/IndexPage-types";
import MultiButton from "../../../MultiButton/MultiButton";
import { LinkStyled } from "../../../MultiButton/MultiButton.styles";
import {
  ButtonContainerStyled,
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
      <ButtonContainerStyled>
        <LinkStyled to={"/assessments/" + assessment.title.toLowerCase()}>
          <MultiButton version="universal" label={assessmentButtonLabel} />
        </LinkStyled>
      </ButtonContainerStyled>
    </>
  );
};

export default UniversalBottom;

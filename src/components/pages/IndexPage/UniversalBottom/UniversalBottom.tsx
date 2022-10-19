import React from "react";
import { ContentfulHomePage } from "../../../../pages/IndexPage-types";
import { Header } from "../../../Header";
import MultiButton from "../../../MultiButton/MultiButton";
import { LinkStyled } from "../../../MultiButton/MultiButton.styles";
import {
  ButtonContainerStyled,
  UniversalBottomSubHeader,
} from "./UniversalBottom.styles";

const UniversalBottom = ({
  universalBottomSubHeader,
  universalBottomHeader,
  universalAssessmentButton: { text: assessmentButtonLabel, assessment },
}: ContentfulHomePage) => {
  return (
    <>
      <Header text={universalBottomHeader} variant="h2" />
      <UniversalBottomSubHeader>
        {universalBottomSubHeader}
      </UniversalBottomSubHeader>
      <ButtonContainerStyled>
        <LinkStyled to={assessment.title.toLowerCase()}>
          <MultiButton version="universal" label={assessmentButtonLabel} />
        </LinkStyled>
      </ButtonContainerStyled>
    </>
  );
};

export default UniversalBottom;

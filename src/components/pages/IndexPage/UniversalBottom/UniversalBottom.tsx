import React from "react";
import { ContentfulHomePage } from "../../../../pages/IndexPage-types";
import { Header } from "../../../Header";
import MultiButton from "../../../MultiButton/MultiButton";
import { LinkStyled } from "../../../MultiButton/MultiButton.styles";
import {
  ButtonContainerStyled,
  ParagraphWrapperStyled,
} from "./UniversalBottom.styles";

const UniversalBottom = ({
  universalBottomSubHeader,
  universalBottomHeader,
  universalAssessmentButton: { text: assessmentButtonLabel, assessment },
}: ContentfulHomePage) => {
  return (
    <>
      <Header text={universalBottomHeader} variant="h2" />
      <ParagraphWrapperStyled className="universial-ass-desc">
        {universalBottomSubHeader}
      </ParagraphWrapperStyled>
      <ButtonContainerStyled>
        <LinkStyled to={assessment.title.toLowerCase()} tabIndex={-1}>
          <MultiButton version="universal" label={assessmentButtonLabel} />
        </LinkStyled>
      </ButtonContainerStyled>
    </>
  );
};

export default UniversalBottom;

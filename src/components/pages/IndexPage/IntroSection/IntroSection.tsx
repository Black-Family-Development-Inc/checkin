import React from "react";
import { ContentfulHomePage } from "../../../../pages/IndexPage-types";
import { HR } from "../../../HR";
import { ImageStyled } from "../../../Image/img.styles";
import {
  IntroContent,
  IntroSectionButtonStyled,
  IntroSectionLinkStyled,
  IntroSectionTitleStyled,
} from "./IntroSection.styles";

const IntroSection = ({
  introSectionHeader,
  introSectionSubheader,
  introSectionImage,
  universalAssessmentButton: { text: assessmentButtonLabel, assessment },
}: ContentfulHomePage) => {
  return (
    <>
      <IntroSectionTitleStyled>{introSectionHeader}</IntroSectionTitleStyled>
      <HR />
      <IntroContent>{introSectionSubheader}</IntroContent>
      {/* This Link/Button area should later become the <LinkButton /> component pending BFDI-91 as is not getting styles at this moment */}
      <IntroSectionLinkStyled
        to={"/assessments/" + assessment.title.toLowerCase()}
      >
        <IntroSectionButtonStyled>
          {assessmentButtonLabel}
        </IntroSectionButtonStyled>
      </IntroSectionLinkStyled>
      <div>
        <ImageStyled
          srcSet={introSectionImage.gatsbyImageData.images.sources[0].srcSet}
          alt={introSectionImage.description}
        />
      </div>
    </>
  );
};

export default IntroSection;

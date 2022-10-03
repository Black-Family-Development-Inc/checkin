import React from "react";
import { ContentfulHomePage } from "../../../../pages/IndexPage-types";
import { HR } from "../../../HR";
import { ImageStyled } from "../../../Image/img.styles";
import MultiButton from "../../../MultiButton/MultiButton";
import { IntroContent, IntroSectionTitleStyled } from "./IntroSection.styles";

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
      <MultiButton
        version="universal"
        label={assessmentButtonLabel}
        link={"/assessments/" + assessment.title.toLowerCase()}
      />
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

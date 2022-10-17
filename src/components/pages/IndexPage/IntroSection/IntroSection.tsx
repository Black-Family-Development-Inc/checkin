import React from "react";
import { ContentfulHomePage } from "../../../../pages/IndexPage-types";
import { Header } from "../../../Header";
import { ImageStyled } from "../../../Image/img.styles";
import MultiButton from "../../../MultiButton/MultiButton";
import { LinkStyled } from "../../../MultiButton/MultiButton.styles";
import { ButtonContainerStyled, IntroContent } from "./IntroSection.styles";

const IntroSection = ({
  introSectionHeader,
  introSectionSubheader,
  introSectionImage,
  universalAssessmentButton: { text: assessmentButtonLabel, assessment },
}: ContentfulHomePage) => {
  return (
    <>
      <Header variant="h2" text={introSectionHeader} />
      <IntroContent>{introSectionSubheader}</IntroContent>
      <ButtonContainerStyled>
        <LinkStyled to={"/assessments/" + assessment.title.toLowerCase()}>
          <MultiButton version="universal" label={assessmentButtonLabel} />
        </LinkStyled>
      </ButtonContainerStyled>
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

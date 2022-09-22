import { Button } from "@mui/material";
import { Link } from "gatsby";
import React from "react";
import { ContentfulHomePage } from "../../../../pages/IndexPage-types";
import { HR } from "../../../HR";
import { ImageStyled } from "../../../Image/img.styles";
import {
  FirstSectionButtonStyled,
  FirstSectionLinkStyled,
  FirstSectionTitleStyled,
} from "./FirstSection.styles";

const FirstSection = ({
  introSectionHeader,
  introSectionSubheader,
  introSectionImage,
  universalAssessmentButton: { text: assessmentButtonLabel, assessment },
}: ContentfulHomePage) => {
  return (
    <>
      <FirstSectionTitleStyled>{introSectionHeader}</FirstSectionTitleStyled>
      <HR />
      <p>{introSectionSubheader}</p>
      {/* This Link/Button area should later become the <LinkButton /> component pending BFDI-91 as is not getting styles at this moment */}
      <FirstSectionLinkStyled
        to={"/assessments/" + assessment.title.toLowerCase()}
      >
        <FirstSectionButtonStyled>
          {assessmentButtonLabel}
        </FirstSectionButtonStyled>
      </FirstSectionLinkStyled>
      <div>
        <ImageStyled
          srcSet={introSectionImage.gatsbyImageData.images.sources[0].srcSet}
          alt={introSectionImage.description}
        />
      </div>
    </>
  );
};

export default FirstSection;

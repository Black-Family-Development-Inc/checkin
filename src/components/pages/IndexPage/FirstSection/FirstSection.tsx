import { Button } from "@mui/material";
import { Link } from "gatsby";
import React from "react";
import { ContentfulHomePage } from "../../../../pages/IndexPage-types";
import { HR } from "../../../HR";
import { ImageStyled } from "./FirstSection.styles";

const FirstSection = ({
  introSectionHeader,
  introSectionSubheader,
  introSectionImage,
  universalAssessmentButton: { text: assessmentButtonLabel, assessment },
}: ContentfulHomePage) => {
  return (
    <>
      <h2>{introSectionHeader}</h2>
      <HR />
      <p>{introSectionSubheader}</p>
      {/* This Link/Button area should later become the <LinkButton /> component pending BFDI-91 as is not getting styles at this moment */}
      <Link to={"/assessments/" + assessment.title.toLowerCase()}>
        <Button>{assessmentButtonLabel}</Button>
      </Link>
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

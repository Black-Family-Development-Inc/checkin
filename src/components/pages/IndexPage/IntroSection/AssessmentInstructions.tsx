import Step from "@mui/material/Step";
import * as React from "react";
import { ContentfulHomePage } from "../../../../pages/IndexPage-types";
import { Header } from "../../../Header";
import { ImageStyled } from "../../../Image/img.styles";
import { Paragraph } from "../../../Paragraph";
import {
  ImageContainerStyled,
  StepContentStyled,
  StepLabelStyled,
  StepperStyled,
} from "./AssessmentInstructions.styles";

const AssessmentInstructions = ({
  assessmentInstructionsHeader,
  stepOneLabel,
  stepOneDescription,
  stepTwoLabel,
  stepTwoDescription,
  stepThreeLabel,
  stepThreeDescription,
  assessmentStepsImage,
}: ContentfulHomePage) => {
  const steps = [
    {
      label: stepOneLabel,
      description: stepOneDescription,
    },
    {
      label: stepTwoLabel,
      description: stepTwoDescription,
    },
    {
      label: stepThreeLabel,
      description: stepThreeDescription,
    },
  ];
  return (
    <ImageContainerStyled>
      <Header text={assessmentInstructionsHeader} variant="h2" />
      <StepperStyled activeStep={-1} orientation="vertical">
        {steps.map((step) => (
          <Step key={step.label} expanded={true}>
            <StepLabelStyled>{step.label}</StepLabelStyled>
            <StepContentStyled>
              <Paragraph>{step.description}</Paragraph>
            </StepContentStyled>
          </Step>
        ))}
      </StepperStyled>
      <ImageStyled
        className="assessmentSectionImage"
        srcSet={assessmentStepsImage.gatsbyImageData.images.sources[0].srcSet}
        alt={assessmentStepsImage.description}
      />
    </ImageContainerStyled>
  );
};

export default AssessmentInstructions;

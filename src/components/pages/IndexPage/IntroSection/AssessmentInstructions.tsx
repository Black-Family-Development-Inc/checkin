import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import * as React from "react";
import { ContentfulHomePage } from "../../../../pages/IndexPage-types";
import { HR } from "../../../HR";
import { ImageStyled } from "../../../Image/img.styles";
import {
  AssessmentInstructionsTitleStyled,
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
    <div>
      <AssessmentInstructionsTitleStyled>
        {assessmentInstructionsHeader}
      </AssessmentInstructionsTitleStyled>
      <HR />
      <StepperStyled activeStep={-1} orientation="vertical">
        {steps.map((step) => (
          <Step key={step.label} expanded={true}>
            <StepLabelStyled>{step.label}</StepLabelStyled>
            <StepContent>
              <StepContentStyled>{step.description}</StepContentStyled>
            </StepContent>
          </Step>
        ))}
      </StepperStyled>
      <ImageStyled
        srcSet={assessmentStepsImage.gatsbyImageData.images.sources[0].srcSet}
        alt={assessmentStepsImage.description}
      />
    </div>
  );
};

export default AssessmentInstructions;

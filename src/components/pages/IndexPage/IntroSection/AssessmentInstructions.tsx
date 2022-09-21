import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import * as React from "react";
import { ContentfulHomePage } from "../../../../pages/IndexPage-types";
import { HR } from "../../../HR";
import { ImageStyled } from "../../../Image/img.styles";

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
      <h2>{assessmentInstructionsHeader}</h2>
      <HR />
      <Stepper activeStep={-1} orientation="vertical">
        {steps.map((step) => (
          <Step key={step.label} expanded={true}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <p>{step.description}</p>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      <ImageStyled
        srcSet={assessmentStepsImage.gatsbyImageData.images.sources[0].srcSet}
        alt={assessmentStepsImage.description}
      />
    </div>
  );
};

export default AssessmentInstructions;

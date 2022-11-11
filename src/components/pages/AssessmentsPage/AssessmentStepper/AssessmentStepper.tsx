import Step from "@mui/material/Step";
import React from "react";
import { NavStepLabelStyled } from "./AssessmentStepper.styles";
import { NavStepperStyled } from "./AssessmentStepper.styles";
import {
  AssessmentStepperPropTypes,
  StepperPagesType,
  StepType,
} from "./AssessmentStepper-types";

export const stepperPages = {
  universal: "Universal Check-in" as StepperPagesType,
  assessment: "Detailed Check-in" as StepperPagesType,
  results: "Results & Resources" as StepperPagesType,
};

const allSteps = [
  {
    label: stepperPages.universal,
    isComplete: false,
  },
  {
    label: stepperPages.assessment,
    isComplete: false,
  },
  {
    label: stepperPages.results,
    isComplete: false,
  },
];

const AssessmentStepper = ({
  currentPage,
  startingPage,
}: AssessmentStepperPropTypes) => {
  const isStartPageUniversal = startingPage === stepperPages.universal;

  const stepsForPage = isStartPageUniversal
    ? allSteps
    : allSteps.filter((step) => step.label !== stepperPages.universal);

  const currentStep = stepsForPage.findIndex(
    (step) => step.label === currentPage,
  );

  const lastStepIndex = stepsForPage.length - 1;

  const isComplete = (index: number) =>
    currentStep === lastStepIndex ? true : currentStep > index;

  const checkForCompleteSteps = (steps: StepType[]) =>
    steps.map((step, index) => ({
      ...step,
      isComplete: isComplete(index),
    }));

  const stepsToRender = checkForCompleteSteps(stepsForPage);

  return (
    <>
      <NavStepperStyled
        sx={{ marginBottom: 5 }}
        activeStep={currentStep}
        alternativeLabel
        nonLinear
      >
        {stepsToRender.map((step, idx) => (
          <Step
            key={step.label}
            completed={step.isComplete}
            disabled={!step.isComplete}
          >
            <NavStepLabelStyled key={idx}>{step.label}</NavStepLabelStyled>
          </Step>
        ))}
      </NavStepperStyled>
    </>
  );
};

export default AssessmentStepper;

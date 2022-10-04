import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import React from "react";
import { AssessmentStep } from "../../../../pages/assessments/AssessmentPage-types";
import { AssessmentStepperPropTypes } from "./AssessmentStepper-types";

const AssessmentStepper = ({ steps }: AssessmentStepperPropTypes) => {
  const assessmentActiveStep = 0;
  const isStepComplete = (step: AssessmentStep) => {
    const stepIdx = steps.findIndex(({ label }) => label === step.label);
    return stepIdx === assessmentActiveStep ? false : step.isComplete;
  };

  return (
    <>
      <Stepper
        sx={{ marginBottom: 5, marginTop: 5 }}
        activeStep={assessmentActiveStep}
        alternativeLabel
        nonLinear
      >
        {steps.map((step, idx) => (
          <Step
            key={step.label}
            completed={isStepComplete(step)}
            disabled={!step.isComplete}
          >
            <StepLabel key={idx}>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default AssessmentStepper;

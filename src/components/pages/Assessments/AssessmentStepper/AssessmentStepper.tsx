import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Stepper from "@mui/material/Stepper";
import React, { useState } from "react";
import { AssessmentStep } from "../../../../pages/assessments/AssessmentPage-types";
import { AssessmentStepperPropTypes } from "./AssessmentStepper-types";

const AssessmentStepper = ({ steps }: AssessmentStepperPropTypes) => {
  const [assessmentActiveStep, setAssessmentActiveStep] = useState<number>(0);

  const isStepComplete = (step: AssessmentStep) => {
    const stepIdx = steps.findIndex(({ label }) => label === step.label);
    return stepIdx === assessmentActiveStep ? false : step.isComplete;
  };

  return (
    <>
      <Stepper
        sx={{ marginBottom: 5 }}
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
            <StepButton onClick={() => setAssessmentActiveStep(idx)}>
              {step.label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default AssessmentStepper;

import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import React, { useState } from "react";
import { AssessmentStep } from "../../../../pages/assessments/AssessmentPage-types";
import { AssessmentStepperPropTypes } from "./AssessmentStepper-types";

const AssessmentStepper = ({ numOfSteps }: AssessmentStepperPropTypes) => {
  const typeOfSteps = {
    universalQuestion: [
      {
        label: "Universal Question",
        isComplete: false,
      },
    ],
    default: [
      {
        label: "Assessment Questions",
        isComplete: false,
      },
      {
        label: "Results & Resources",
        isComplete: false,
      },
    ],
  };

  const [steps] = useState(
    numOfSteps === 3
      ? [...typeOfSteps.universalQuestion, ...typeOfSteps.default]
      : typeOfSteps.default,
  );
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
        {steps?.map((step, idx) => (
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

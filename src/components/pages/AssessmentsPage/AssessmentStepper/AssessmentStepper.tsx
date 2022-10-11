import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import React from "react";
import { AssessmentStepperPropTypes } from "./AssessmentStepper-types";

const AssessmentStepper = ({
  steps,
  activeStep,
}: AssessmentStepperPropTypes) => {
  return (
    <>
      <Stepper
        sx={{ marginBottom: 5, marginTop: 5 }}
        activeStep={activeStep}
        alternativeLabel
        nonLinear
      >
        {steps.map((step, idx) => (
          <Step
            key={step.label}
            completed={step.isComplete}
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

import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import React, { useEffect, useState } from "react";
import { AssessmentStepperPropTypes } from "./AssessmentStepper-types";

export const stepperPages = {
  assessment: "Assessment Questions",
  results: "Results & Resources",
  universal: "Universal Question",
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

const AssessmentStepper = ({ currentPage }: AssessmentStepperPropTypes) => {
  const [startingPage, setStartingPage] = useState("");
  const [steps, setSteps] = useState(allSteps);
  console.log(currentPage);
  useEffect(() => {
    if (!startingPage && currentPage) {
      setStartingPage(currentPage);
      if (startingPage !== stepperPages.universal) {
        setSteps(steps.filter((step) => step.label !== stepperPages.universal));
      }
    }
    console.log(steps, startingPage);
  }, [currentPage, startingPage, steps]);

  useEffect(
    () => () => {
      setStartingPage("");
      setSteps(allSteps);
    },
    [],
  );

  return (
    <>
      <Stepper
        sx={{ marginBottom: 5, marginTop: 5 }}
        activeStep={0}
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

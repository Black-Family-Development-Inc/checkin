import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Stepper from "@mui/material/Stepper";
import React, { useState } from "react";

const AssessmentStepper = () => {
  const [steps, setSteps] = useState([
    { text: "Preliminary Questions", isComplete: false },
    { text: "Assessment Questions", isComplete: false },
    { text: "Results & Resources", isComplete: false },
  ]);
  const [assessmentActiveStep, setAssessmentActiveStep] = useState<number>(0);

  /**
   * Temporary until Jira Issue BFDI-113 is closed
   * https://detroitlabs.jira.com/jira/software/projects/BFDI/boards/147/backlog?selectedIssue=BFDI-113
   */
  const handleStepperButtonsClick = (
    incrementStepBy: number,
    isComplete?: boolean,
  ) => {
    const updatedSteps = [...steps];
    updatedSteps[assessmentActiveStep] = {
      ...updatedSteps[assessmentActiveStep],
      isComplete: isComplete || steps[assessmentActiveStep].isComplete,
    };
    setSteps(updatedSteps);

    const nextActiveStep = Math.min(
      Math.max(assessmentActiveStep + incrementStepBy, 0),
      steps.length - 1,
    );
    setAssessmentActiveStep(nextActiveStep);
  };

  /**
   * Temporary until Jira Issue BFDI-113 is closed
   * https://detroitlabs.jira.com/jira/software/projects/BFDI/boards/147/backlog?selectedIssue=BFDI-113
   */
  const handleStepperBubbleClick = (idx: number) => {
    setAssessmentActiveStep(idx);
    const updatedSteps = [...steps];
    updatedSteps[idx] = {
      ...updatedSteps[idx],
      isComplete: false,
    };
    setSteps(updatedSteps);
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
            key={step.text}
            // eslint-disable-next-line max-len
            completed={step.isComplete} // Temporary logic until BFDI-113 is closed
            disabled={!step.isComplete}
          >
            <StepButton onClick={() => handleStepperBubbleClick(idx)}>
              {step.text}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      {/**
       * Temporary until Jira Issue BFDI-113 is closed
       * https://detroitlabs.jira.com/jira/software/projects/BFDI/boards/147/backlog?selectedIssue=BFDI-113
       */}
      <button onClick={() => handleStepperButtonsClick(-1)}>Back</button>
      <button onClick={() => handleStepperButtonsClick(1, true)}>Next</button>
    </>
  );
};

export default AssessmentStepper;

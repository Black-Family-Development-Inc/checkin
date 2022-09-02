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
  /**
   * We are currently using localStorage for testing purposes to track the current step in our assessment pages
   * This call to the localStorage should be removed along with this comment
   * block in the future once the Next/Previous buttons have been implemented
   * Update this code to also include a `setAssessmentActiveStep` function
   * when Next/Prev buttons have been implemented
   * Please see Jira Issue BFDI-113
   * https://detroitlabs.jira.com/jira/software/projects/BFDI/boards/147/backlog?selectedIssue=BFDI-113
   */
  const [assessmentActiveStep, setAssessmentActiveStep] = useState<number>(0);

  /**
   * Temporary
   * See comment above assessmentActiveStep
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
   * Temporary
   * See comment above assessmentActiveStep
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
            completed={step.isComplete} // This logic is only for testing purposes. See javadoc comment above assessmentActiveStep
            disabled={!step.isComplete}
          >
            <StepButton onClick={() => handleStepperBubbleClick(idx)}>
              {step.text}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      {/**
       * The following buttons are temporary
       * See comment above assessmentActiveStep
       */}
      <button onClick={() => handleStepperButtonsClick(-1)}>Back</button>
      <button onClick={() => handleStepperButtonsClick(1, true)}>Next</button>
    </>
  );
};

export default AssessmentStepper;

import React from "react";
import { AssessmentStepper } from "../../../components/pages/Assessments";

const twoSteps = [
  {
    label: "First Step",
    isComplete: false,
  },
  {
    label: "Second Step",
    isComplete: false,
  },
];

const threeSteps = [
  {
    label: "First Step",
    isComplete: false,
  },
  {
    label: "Second Step",
    isComplete: false,
  },
  {
    label: "Third Step",
    isComplete: false,
  },
];

const Stepper = () => {
  return (
    <>
      <AssessmentStepper {...{ steps: twoSteps }} />
      <AssessmentStepper {...{ steps: threeSteps }} />
    </>
  );
};

export default Stepper;

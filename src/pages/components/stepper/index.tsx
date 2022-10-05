import React from "react";
import { AssessmentStepper } from "../../../components/pages/AssessmentsPage";

const Stepper = () => {
  return (
    <>
      <AssessmentStepper {...{ numOfSteps: 2 }} />
      <AssessmentStepper {...{ numOfSteps: 3 }} />
    </>
  );
};

export default Stepper;

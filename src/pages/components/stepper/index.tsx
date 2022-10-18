import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { AssessmentStepper } from "../../../components/pages/AssessmentsPage";
import { stepperPages } from "../../../components/pages/AssessmentsPage/AssessmentStepper/AssessmentStepper";

const Stepper = () => {
  const [step, setStep] = useState(0);
  const [version, setVersion] = useState(0);
  const allSteps = Object.values(stepperPages);
  const stepsToUse =
    allSteps[version] === stepperPages.universal
      ? allSteps
      : allSteps.filter((step) => step !== stepperPages.universal);
  const clamp = (num: number) =>
    Math.min(Math.max(num, 0), stepsToUse.length - 1);
  const handleStep = () => {
    setStep(clamp(step + 1));
  };

  const handleVersion = () => {
    setVersion(version === 1 ? 0 : 1);
    setStep(0);
  };
  return (
    <Box>
      <AssessmentStepper
        startingPage={stepsToUse[version]}
        currentPage={stepsToUse[step]}
      />

      <Box>
        <Button onClick={handleStep}>increment step</Button>
        <Button onClick={handleVersion}>change stepper version</Button>
      </Box>
    </Box>
  );
};

export default Stepper;

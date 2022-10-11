import { Box, Button, List, ListItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { AssessmentStepper } from "../../../components/pages/AssessmentsPage";

const steps = [
  {
    label: "Assessment Questions",
    isComplete: false,
  },
  {
    label: "Results & Resources",
    isComplete: false,
  },
  {
    label: "Universal Question",
    isComplete: false,
  },
];

const clamp = (num: number, length: number) =>
  Math.min(Math.max(num, 0), length - 1);

const TwoStepper = () => {
  const [twoSteps, setTwoSteps] = useState(steps.slice(0, 2));
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleChangeSteps = (isComplete: boolean, changeIdxBy: number) => {
    const clampedIndex = clamp(activeStep + changeIdxBy, twoSteps.length);
    const updatedTwoSteps = [...twoSteps];
    updatedTwoSteps[activeStep].isComplete = isComplete;
    setTwoSteps(updatedTwoSteps);
    setActiveStep(clampedIndex);
  };

  return (
    <Box>
      <AssessmentStepper steps={twoSteps} activeStep={activeStep} />

      <Box>
        <Button onClick={() => handleChangeSteps(false, -1)}>Prev</Button>
        <Button onClick={() => handleChangeSteps(true, 1)}>Next</Button>
      </Box>
    </Box>
  );
};

const ThreeStepper = () => {
  const [threeSteps, setThreeSteps] = useState(steps);
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleChangeSteps = (isComplete: boolean, changeIdxBy: number) => {
    const clampedIndex = clamp(activeStep + changeIdxBy, threeSteps.length);
    const updatedThreeSteps = [...threeSteps];
    updatedThreeSteps[activeStep].isComplete = isComplete;
    setThreeSteps(updatedThreeSteps);
    setActiveStep(clampedIndex);
  };

  return (
    <Box>
      <AssessmentStepper steps={threeSteps} activeStep={activeStep} />

      <Box>
        <Button onClick={() => handleChangeSteps(false, -1)}>Prev</Button>
        <Button onClick={() => handleChangeSteps(true, 1)}>Next</Button>
      </Box>
    </Box>
  );
};

const Stepper = () => {
  return (
    <>
      <Typography paragraph>
        The buttons underneath each stepper is only here to visually test how
        the stepper looks in different states
      </Typography>

      <Typography paragraph>
        When using the stepper in the actual app, you are expected to pass down
        an array of "AssessmentStep" that will control:
      </Typography>

      <List>
        <ListItem>
          Label ("Universal Question", "Assessment Questions", etc.)
        </ListItem>
        <ListItem>The "isComplete" prop for each item of the array</ListItem>
      </List>
      <TwoStepper />
      <ThreeStepper />
    </>
  );
};

export default Stepper;

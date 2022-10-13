import { Box } from "@mui/material";
import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import NavButton from "../../components/NavButton/NavButton";
import { AssessmentStepper } from "../../components/pages/AssessmentsPage";
import { getStoredPath } from "../../hooks/useStorePath";
import { AssessmentTrackerLayoutPropTypes } from "./AssessmentTrackerLayout-types";

const AssessmentTrackerLayout = ({
  children,
}: AssessmentTrackerLayoutPropTypes) => {
  const steps = {
    universal: [
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

  const activeStep = 0;

  const universalQuestionsPath = "/assessments/universal";
  const cameFromUniversalQuestions = getStoredPath() === universalQuestionsPath;

  return (
    <>
      <NavBar />
      <Box sx={{ marginLeft: "20px" }}>
        {cameFromUniversalQuestions ? (
          <NavButton
            label="Universal Assessment"
            link={universalQuestionsPath}
          />
        ) : (
          <NavButton label="Home" link="/" />
        )}
      </Box>
      <AssessmentStepper {...{ activeStep, steps: steps.default }} />
      {children}
      <Footer />
    </>
  );
};

export default AssessmentTrackerLayout;

import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { AssessmentStepper } from "../../components/pages/AssessmentsPage";
import { AssessmentStep } from "../../pages/assessments/AssessmentPage-types";
import { AssessmentTrackerLayoutPropTypes } from "./AssessmentTrackerLayout-types";

const AssessmentTrackerLayout = ({
  children,
}: AssessmentTrackerLayoutPropTypes) => {
  const [steps, setSteps] = useState<AssessmentStep[]>([
    { label: "Preliminary Questions", isComplete: false },
    { label: "Assessment Questions", isComplete: false },
    { label: "Results & Resources", isComplete: false },
  ]);
  return (
    <>
      <NavBar />
      <AssessmentStepper {...{ steps, setSteps }} />
      {children}
      <Footer />
    </>
  );
};

export default AssessmentTrackerLayout;

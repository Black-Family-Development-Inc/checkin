import React, { ReactNode, useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { AssessmentStepper } from "../../components/pages/Assessments";
import { AssessmentStep } from "../../pages/assessments/AssessmentPage-types";

type AssessmentTrackerLayoutPropTypes = {
  children: ReactNode;
};

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

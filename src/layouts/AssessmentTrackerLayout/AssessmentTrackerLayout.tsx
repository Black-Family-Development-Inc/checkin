import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { AssessmentStepper } from "../../components/pages/AssessmentsPage";
import { AssessmentTrackerLayoutPropTypes } from "./AssessmentTrackerLayout-types";

const AssessmentTrackerLayout = ({
  children,
  numOfSteps,
}: AssessmentTrackerLayoutPropTypes) => {
  return (
    <>
      <NavBar />
      <AssessmentStepper {...{ numOfSteps }} />
      {children}
      <Footer />
    </>
  );
};

export default AssessmentTrackerLayout;

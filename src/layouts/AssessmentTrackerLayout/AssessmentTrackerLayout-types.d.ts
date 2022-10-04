import { ReactNode } from "react";
import { NumOfSteps } from "../../components/pages/Assessments/AssessmentStepper/AssessmentStepper-types";

export type AssessmentTrackerLayoutPropTypes = {
  children: ReactNode;
  numOfSteps: NumOfSteps;
};

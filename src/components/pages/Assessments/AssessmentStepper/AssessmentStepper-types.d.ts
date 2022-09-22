import { Dispatch, SetStateAction } from "react";
import { AssessmentStep } from "../../pages/assessments/AssessmentPage-types";

export type AssessmentStepperPropTypes = {
  steps: AssessmentStep[];
  setSteps: Dispatch<SetStateAction<AssessmentStep[]>>;
};

import React, { ReactNode } from "react";
import { StepperPagesType } from "../../components/pages/AssessmentsPage/AssessmentStepper/AssessmentStepper-types";

export type AssessmentLayoutPropTypes = {
  children: ReactNode;
  currentPage: StepperPagesType;
  startingPage?: StepperPagesType;
  assessmentTitle?: string;
  isAlertOpen: boolean;
  handleAlert: (prop) => void;
  alertMSG: string | React.Fragment;
};

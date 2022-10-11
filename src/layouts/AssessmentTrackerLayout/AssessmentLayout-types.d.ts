import { ReactNode } from "react";
import { CurrentPage } from "../../components/pages/AssessmentsPage/AssessmentStepper/AssessmentStepper-types";

export type AssessmentLayoutPropTypes = {
  children: ReactNode;
  currentPage?: CurrentPage;
};

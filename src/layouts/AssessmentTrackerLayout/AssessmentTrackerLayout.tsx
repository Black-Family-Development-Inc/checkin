import { Box } from "@mui/material";
import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import NavButton from "../../components/NavButton/NavButton";
import { AssessmentStepper } from "../../components/pages/AssessmentsPage";
import {
  localSavedAssessmentKey,
  localSavedPageKey,
} from "../../global-variables";
import { AssessmentTrackerLayoutPropTypes } from "./AssessmentTrackerLayout-types";

const AssessmentTrackerLayout = ({
  children,
  assessmentTitle,
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

  const localStoragePageData =
    typeof window !== "undefined" && localStorage.getItem(localSavedPageKey);
  const localStorageAssessmentData =
    typeof window !== "undefined" &&
    localStorage.getItem(localSavedAssessmentKey);

  const assessmentData = JSON.parse(
    localStorageAssessmentData ? localStorageAssessmentData : '{"path": "/"}',
  );
  const pageData = JSON.parse(
    localStoragePageData
      ? localStoragePageData
      : '{"cameFromUniversal": false}',
  );
  // how do we tell if we are on an assessment page?
  const cameFromUniversalQuestions = pageData.cameFromUniversal;

  const splitPath = assessmentData.path.split("/");
  const assessment = splitPath[splitPath.length - 1];
  const onResultsPage = location.pathname === `/results/${assessment}`;
  const onAssessmentPage =
    location.pathname ===
    `/assessments/${assessmentTitle?.toLocaleLowerCase()}`;

  const universalQuestionsNavButton =
    cameFromUniversalQuestions && !onResultsPage && onAssessmentPage;

  return (
    <>
      <NavBar />
      <Box sx={{ marginLeft: "20px" }}>
        {universalQuestionsNavButton && (
          <NavButton label="Universal Assessment" link={"/universal"} />
        )}
        {onResultsPage && (
          <NavButton label="Assessment Questions" link={assessmentData.path} />
        )}
        {!cameFromUniversalQuestions && !onResultsPage && (
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

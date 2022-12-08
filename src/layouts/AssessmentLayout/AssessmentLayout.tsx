import Box from "@mui/material/Box/Box";
import React from "react";
import { Alert } from "../../components/Alert";
import NavButton from "../../components/NavButton/NavButton";
import { AssessmentStepper } from "../../components/pages/AssessmentsPage";
import { stepperPages } from "../../components/pages/AssessmentsPage/AssessmentStepper/AssessmentStepper";
import DefaultLayout from "../DefaultLayout/DefaultLayout";
import { NavButtonContainerStyled } from "./AssessmentLayout.styles";
import { AssessmentLayoutPropTypes } from "./AssessmentLayout-types";

const AssessmentLayout = ({
  children,
  currentPage,
  startingPage,
  assessmentTitle,
  isAlertOpen = false,
  handleAlert,
  alertMSG,
}: AssessmentLayoutPropTypes) => {
  const startingPageProp = startingPage || "";

  const cameFromUniversalQuestions = startingPage === stepperPages.universal;
  const onAssessmentPage = currentPage === stepperPages.assessment;
  const onResultsPage = currentPage === stepperPages.results;

  const getNavButton = () => {
    if (onAssessmentPage && cameFromUniversalQuestions) {
      return <NavButton label="Universal Assessment" link={"/universal/"} />;
    }
    if (onResultsPage) {
      return (
        <NavButton
          label="Assessment Questions"
          link={`/assessments/${assessmentTitle?.toLocaleLowerCase()}/`}
          startingPage={startingPage}
        />
      );
    }
    return <NavButton label="Home" link="/" />;
  };

  return (
    <DefaultLayout variant="nav-button">
      <Box sx={{ position: "relative" }}>
        <Alert
          alertMSG={alertMSG}
          isOpen={isAlertOpen}
          handleAlert={handleAlert}
        />
        <NavButtonContainerStyled>{getNavButton()}</NavButtonContainerStyled>
        <AssessmentStepper
          currentPage={currentPage}
          startingPage={startingPageProp}
        />
      </Box>
      {children}
    </DefaultLayout>
  );
};

export default AssessmentLayout;

import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { AssessmentStepper } from "../../components/pages/AssessmentsPage";
import { LayoutContainerStyled } from "../DefaultLayout/DefaultLayout.styles";
import { AssessmentLayoutPropTypes } from "./AssessmentLayout-types";
const AssessmentLayout = ({
  children,
  currentPage,
  startingPage,
}: AssessmentLayoutPropTypes) => {
  const startingPageProp = startingPage || "";
  return (
    <>
      <NavBar />
      <LayoutContainerStyled>
        <AssessmentStepper
          currentPage={currentPage}
          startingPage={startingPageProp}
        />
        {children}
      </LayoutContainerStyled>
      <Footer />
    </>
  );
};

export default AssessmentLayout;

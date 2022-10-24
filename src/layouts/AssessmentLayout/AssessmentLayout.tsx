import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { AssessmentStepper } from "../../components/pages/AssessmentsPage";
import {
  LayoutContainerStyled,
  LayoutContainerWrapper,
} from "../DefaultLayout/DefaultLayout.styles";
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
      <LayoutContainerWrapper>
        <LayoutContainerStyled>
          <AssessmentStepper
            currentPage={currentPage}
            startingPage={startingPageProp}
          />
          {children}
        </LayoutContainerStyled>
      </LayoutContainerWrapper>
      <Footer />
    </>
  );
};

export default AssessmentLayout;

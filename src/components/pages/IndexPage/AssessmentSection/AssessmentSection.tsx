// import { Box } from "@mui/material";
import * as React from "react";
import {
  AssessmentButtonType,
  ContentfulHomePage,
} from "../../../../pages/IndexPage-types";
import { Header } from "../../../Header";
import MultiButton from "../../../MultiButton/MultiButton";
import { LinkStyled } from "../../../MultiButton/MultiButton.styles";
import { Paragraph } from "../../../Paragraph";
import {
  AssessmentQuestionBoxStyled,
  AssessmentQuestionParaStyled,
  AssessmentQuestionStyled,
  AssessmentQuestionWrapperStyled,
} from "./AssessmentSection.styles";

const AssessmentSection = (props: ContentfulHomePage) => {
  const {
    assessmentSectionHeader,
    assessmentSectionSubheader,
    assessmentButtons,
  } = props;

  return (
    <AssessmentQuestionStyled>
      <Header text={assessmentSectionHeader} variant="h2" />
      <Paragraph>{assessmentSectionSubheader}</Paragraph>
      {assessmentButtons.map((button: AssessmentButtonType) => {
        const link = `/assessments/${button.assessmentPage.title.toLocaleLowerCase()}`;
        return (
          <AssessmentQuestionWrapperStyled key={button.buttonText}>
            <AssessmentQuestionParaStyled
              className="assessment-desc"
              id="scroll"
            >
              {button.assessmentDescription}
            </AssessmentQuestionParaStyled>
            <AssessmentQuestionBoxStyled key={button.buttonText}>
              <LinkStyled to={link}>
                <MultiButton version="assessment" label={button.buttonText} />
              </LinkStyled>
            </AssessmentQuestionBoxStyled>
          </AssessmentQuestionWrapperStyled>
        );
      })}
    </AssessmentQuestionStyled>
  );
};

export default AssessmentSection;

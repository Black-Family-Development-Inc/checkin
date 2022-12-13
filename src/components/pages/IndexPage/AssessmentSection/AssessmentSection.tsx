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
    <AssessmentQuestionStyled id="scroll">
      <Header text={assessmentSectionHeader} variant="h2" />
      <Paragraph>{assessmentSectionSubheader}</Paragraph>
      {assessmentButtons.map((button: AssessmentButtonType) => {
        const link = `/assessments/${button.assessmentPage.title.toLocaleLowerCase()}`;
        return (
          <AssessmentQuestionWrapperStyled key={button.buttonText}>
            <AssessmentQuestionParaStyled className="assessment-desc">
              {button.assessmentDescription}
            </AssessmentQuestionParaStyled>
            <AssessmentQuestionBoxStyled key={button.buttonText}>
              <LinkStyled to={link} tabIndex={-1}>
                <MultiButton version="secondary" label={button.buttonText} />
              </LinkStyled>
            </AssessmentQuestionBoxStyled>
          </AssessmentQuestionWrapperStyled>
        );
      })}
    </AssessmentQuestionStyled>
  );
};

export default AssessmentSection;

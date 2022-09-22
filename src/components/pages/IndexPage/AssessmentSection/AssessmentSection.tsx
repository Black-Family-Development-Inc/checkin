import { Box, Typography } from "@mui/material";
import * as React from "react";
import {
  AssessmentButton,
  ContentfulHomePage,
} from "../../../../pages/IndexPage-types";
import ButtonLink from "../../../ButtonLink/ButtonLink";
import { HR } from "../../../HR";
import {
  AssessmentQuestionStyled,
  AssessmentQuestionWrapperStyled,
  AssessmentSectionContent,
  AssessmentSectionTitleStyled,
} from "./AssessmentSection.styles";

const AssessmentSection = (props: ContentfulHomePage) => {
  const {
    assessmentSectionHeader,
    assessmentSectionSubheader,
    assessmentButtons,
  } = props;

  return (
    <Box>
      <AssessmentSectionTitleStyled>
        {" "}
        {assessmentSectionHeader}
      </AssessmentSectionTitleStyled>
      <HR />
      <AssessmentSectionContent>
        {assessmentSectionSubheader}
      </AssessmentSectionContent>
      {assessmentButtons.map((button: AssessmentButton) => {
        const link = `/assessments/${button.assessment.title}`;

        return (
          <AssessmentQuestionWrapperStyled key={button.buttonText}>
            <AssessmentQuestionStyled>
              {button.assessmentDescription}
            </AssessmentQuestionStyled>
            <ButtonLink text={button.buttonText} link={link} />
          </AssessmentQuestionWrapperStyled>
        );
      })}
    </Box>
  );
};

export default AssessmentSection;

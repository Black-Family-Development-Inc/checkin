import { Box, Typography } from "@mui/material";
import * as React from "react";
import { ButtonStyled, LinkStyled } from "../../../../index.styles";
import {
  AssessmentButton,
  ContentfulHomePage,
} from "../../../../pages/IndexPage-types";

const AssessmentSection = (props: ContentfulHomePage) => {
  const {
    assessmentSectionHeader,
    assessmentSectionSubheader,
    assessmentButtons,
  } = props;

  return (
    <Box>
      <Typography variant="h5">{assessmentSectionHeader}</Typography>
      <Typography paragraph>{assessmentSectionSubheader}</Typography>
      {assessmentButtons.map((button: AssessmentButton) => {
        const link = `/assessments/${button.assessment.title}`;

        return (
          <Box key={button.buttonText}>
            <Typography paragraph>{button.assessmentDescription}</Typography>
            <LinkStyled to={link}>
              <ButtonStyled variant="contained">
                {button.buttonText}
              </ButtonStyled>
            </LinkStyled>
          </Box>
        );
      })}
    </Box>
  );
};

export default AssessmentSection;

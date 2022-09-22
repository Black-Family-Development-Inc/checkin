import { Box, Typography } from "@mui/material";
import * as React from "react";
import {
  AssessmentButton,
  ContentfulHomePage,
} from "../../../../pages/IndexPage-types";
import ButtonLink from "../../../Buttons/ButtonLink/ButtonLink";

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
            <ButtonLink text={button.buttonText} link={link} disabled={false} />
          </Box>
        );
      })}
    </Box>
  );
};

export default AssessmentSection;

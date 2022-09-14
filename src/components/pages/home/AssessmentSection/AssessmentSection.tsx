import { Box, Typography } from "@mui/material";
import * as React from "react";
import { ButtonStyled, LinkStyled } from "../../../../index.styles";

const AssessmentSection = (props: Queries.IndexPageQuery) => {
  const assessmentSectionHeader =
    props.contentfulHomePage?.assessmentSectionHeader;
  const assessmentSectionSubheader =
    props.contentfulHomePage?.assessmentSectionSubheader;
  const assessmentButtons = props.contentfulHomePage?.assessmentButtons;

  return (
    <Box>
      <Typography variant="h5">{assessmentSectionHeader}</Typography>
      <Typography paragraph>{assessmentSectionSubheader}</Typography>
      {assessmentButtons?.map((button) => {
        const link = `/assessments/${button?.assessment.title}`;

        return (
          <Box key={button?.buttonText}>
            <Typography paragraph>{button?.assessmentDescription}</Typography>
            <LinkStyled to={link ? link : ""}>
              <ButtonStyled variant="contained">
                {button?.buttonText}
              </ButtonStyled>
            </LinkStyled>
          </Box>
        );
      })}
    </Box>
  );
};

export default AssessmentSection;

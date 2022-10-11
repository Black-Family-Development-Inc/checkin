import { Link as MuiLink } from "@mui/material";
import { graphql, Link, PageProps } from "gatsby";
import React from "react";
import { Header } from "../../../components/Header";
import { HR } from "../../../components/HR";
import MultiButton from "../../../components/MultiButton/MultiButton";
import { Paragraph } from "../../../components/Paragraph";
import { UniversalQuestionResultsPagePropTypes } from "./UniversalQuestionResultsPage-types";

const UniversalQuestionResultsPage = ({
  data: {
    contentfulUniversalQuestionResultsPage: { title },
  },
}: PageProps<UniversalQuestionResultsPagePropTypes>) => {
  return (
    <>
      <Header text={title} />
      <HR />
      <Paragraph>
        Based on your universal assessment screening, you should proceed with
        the following assessment. Keep in mind that you will not be able to
        return back to this page as you move forward.
      </Paragraph>

      <MultiButton version="next" label={title + " Assessment"} />

      <Paragraph>
        You are in control. If you’d like to take the universal question
        screening again, start over.
      </Paragraph>
      <Link to="/assessments/universal/phq-9">
        <MultiButton version="answer" label="Start Over" />
      </Link>

      <Paragraph>If you would like support right now, contact BFDI.</Paragraph>
      <MuiLink href="tel:5555555555">
        <MultiButton version="answer" label="Call BFDI" />
      </MuiLink>
    </>
  );
};

export default UniversalQuestionResultsPage;

export const query = graphql`
  query ($title: String!) {
    contentfulUniversalQuestionResultsPage(title: { eq: $title }) {
      title
    }
  }
`;

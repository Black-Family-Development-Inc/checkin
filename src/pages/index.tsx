import { Box, Button } from "@mui/material";
import { graphql, Link, PageProps } from "gatsby";
import * as React from "react";
// import Button from "../components/Button/Button";
import Accordion from "../components/Accordion/Accordion";
import useStyles from "../index.styles";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  const header = data.contentfulPage?.header;
  const body = data.contentfulPage?.body?.body;

  const { link, button } = useStyles();

  return (
    <>
      <DefaultLayout>
        <h1>{header}</h1>
        <p>{body}</p>
        <Box>
          <Link to="/assessments/depression-assessment" className={link}>
            <Button variant="contained" className={button}>
              Depression Assessment
            </Button>
          </Link>
          <Link to="/assessments/substance-use-assessment" className={link}>
            <Button variant="contained" className={button}>
              Substance Use Assessment
            </Button>
          </Link>
          <Link to="/assessments/anxiety-assessment" className={link}>
            <Button variant="contained" className={button}>
              Anxiety Assessment
            </Button>
          </Link>
          <Link to="/assessments/universal-assessment" className={link}>
            <Button variant="contained" className={button}>
              Universal Assessment
            </Button>
          </Link>
        </Box>
        <Accordion />
      </DefaultLayout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage {
    contentfulPage(title: { eq: "Home Page" }) {
      title
      header
      body {
        body
      }
    }
  }
`;

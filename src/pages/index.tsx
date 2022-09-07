import { Box } from "@mui/material";
import { graphql, PageProps } from "gatsby";
import * as React from "react";
// import Button from "../components/Button/Button";
import Accordion from "../components/Accordion/Accordion";
import { ButtonStyled, LinkStyled } from "../index.styles";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";

type ContentfulButton =
  | {
      link: string | null;
      text: string | null;
    }
  | null
  | undefined;

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  const header = data.contentfulPage?.header;
  const body = data.contentfulPage?.body?.body;

  const depression: ContentfulButton = data.contentfulPage?.depressionButton;
  const substance: ContentfulButton = data.contentfulPage?.substanceUseButton;
  const anxiety: ContentfulButton = data.contentfulPage?.anxietyButton;
  const universal: ContentfulButton = data.contentfulPage?.universalButton;

  return (
    <>
      <DefaultLayout>
        <h1>{header}</h1>
        <p>{body}</p>
        <Box>
          <LinkStyled to={depression?.link ? depression.link : ""}>
            <ButtonStyled variant="contained">{depression?.text}</ButtonStyled>
          </LinkStyled>
          <LinkStyled to={substance?.link ? substance.link : ""}>
            <ButtonStyled variant="contained">{substance?.text}</ButtonStyled>
          </LinkStyled>
          <LinkStyled to={anxiety?.link ? anxiety.link : ""}>
            <ButtonStyled variant="contained">{anxiety?.text}</ButtonStyled>
          </LinkStyled>
          <LinkStyled to={universal?.link ? universal.link : ""}>
            <ButtonStyled variant="contained">{universal?.text}</ButtonStyled>
          </LinkStyled>
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
      anxietyButton {
        link
        text
      }
      universalButton {
        text
        link
      }
      depressionButton {
        link
        text
      }
      substanceUseButton {
        text
        link
      }
    }
  }
`;

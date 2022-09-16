import { Typography } from "@mui/material";
import { graphql, PageProps } from "gatsby";
import React from "react";
import Accordion from "../../components/Accordion/Accordion";
import { Header } from "../../components/Header";
import { HR } from "../../components/HR";
import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";
import { FaqAccordion, FaqPagePropTypes } from "./FaqPage-types";

const FaqPage = ({
  data: { contentfulFaqPage },
}: PageProps<FaqPagePropTypes>) => {
  const { title: headerText } = contentfulFaqPage;
  const {
    subHeader: { subHeader },
  } = contentfulFaqPage;

  return (
    <DefaultLayout>
      <Header text={headerText} />
      <HR />
      <Typography paragraph>{subHeader}</Typography>
      {contentfulFaqPage.faqAccordion.map((accordion: FaqAccordion) => {
        const {
          title,
          body: { body },
        } = accordion;
        const accordionProps = {
          title,
          body,
        };
        return <Accordion {...accordionProps} />;
      })}
    </DefaultLayout>
  );
};

export default FaqPage;

export const query = graphql`
  query {
    contentfulFaqPage(title: { eq: "FAQ" }) {
      title
      subHeader {
        subHeader
      }
      faqAccordion {
        title
        body {
          body
        }
      }
    }
  }
`;

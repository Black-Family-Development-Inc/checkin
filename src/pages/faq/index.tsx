import { graphql, PageProps } from "gatsby";
import React from "react";
import Accordion from "../../components/Accordion/Accordion";
import { Header } from "../../components/Header";
import { Paragraph } from "../../components/Paragraph";
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
      <Header text={headerText} variant="h2" />
      <Paragraph>{subHeader}</Paragraph>
      {contentfulFaqPage.faqAccordion.map((accordion: FaqAccordion) => {
        const {
          title,
          body: { body },
        } = accordion;
        const accordionProps = {
          title,
          body,
        };
        return <Accordion key={accordion.id} {...accordionProps} />;
      })}
    </DefaultLayout>
  );
};

export default FaqPage;

export const query = graphql`
  query {
    contentfulFaqPage(title: { eq: "Frequently Asked Questions" }) {
      title
      subHeader {
        subHeader
      }
      faqAccordion {
        id
        title
        body {
          body
        }
      }
    }
  }
`;

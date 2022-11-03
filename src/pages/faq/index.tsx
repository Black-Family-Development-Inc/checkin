import { graphql, PageProps } from "gatsby";
import React from "react";
import Accordion from "../../components/Accordion/Accordion";
import { Header } from "../../components/Header";
import NavButton from "../../components/NavButton/NavButton";
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
      <NavButton label="Home" link="/" />
      <Header text={headerText} variant="h2" />
      <Paragraph>{subHeader}</Paragraph>
      {contentfulFaqPage.faqAccordion.map((accordion: FaqAccordion) => {
        const { title, description } = accordion;
        return (
          <Accordion
            key={accordion.id}
            title={title}
            description={description.raw}
          />
        );
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
        description {
          raw
        }
      }
    }
  }
`;

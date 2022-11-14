import { graphql, PageProps } from "gatsby";
import React from "react";
import Accordion from "../../components/Accordion/Accordion";
import { Header } from "../../components/Header";
import NavButton from "../../components/NavButton/NavButton";
import { Paragraph } from "../../components/Paragraph";
import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";
import { CardBox } from "./Faq.styles";
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
      <CardBox>
        {contentfulFaqPage.faqAccordion.map(
          ({ id, title, description }: FaqAccordion) => (
            <Accordion key={id} title={title} description={description} />
          ),
        )}
      </CardBox>
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
        description {
          raw
        }
      }
    }
  }
`;

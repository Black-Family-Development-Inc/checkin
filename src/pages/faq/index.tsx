import { graphql, PageProps } from "gatsby";
import React from "react";
import Accordion from "../../components/Accordion/Accordion";
import { Header } from "../../components/Header";
import NavButton from "../../components/NavButton/NavButton";
import { CardBox } from "../../components/pages/FaqPage/Faq.styles";
import { Paragraph } from "../../components/Paragraph";
import { setHeadTitle } from "../../globalFunctions/setHeadTitle";
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
    <DefaultLayout variant="nav-button">
      <NavButton label="Home" link="/" />
      <Header text={headerText} variant="h2" />
      <Paragraph>{subHeader}</Paragraph>
      <CardBox>
        {contentfulFaqPage.faqAccordion.map((accordion: FaqAccordion) => {
          const { title, description } = accordion;
          return (
            <Accordion
              title={title}
              description={description}
              key={accordion.title}
            />
          );
        })}
      </CardBox>
    </DefaultLayout>
  );
};

export default FaqPage;

export const Head = () => setHeadTitle("FAQ");

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

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

  return (
    <DefaultLayout>
      <Header text={headerText} />
      <HR />
      {contentfulFaqPage.faqAccordion.map((accordion: FaqAccordion) => {
        const { title, childContentfulAccordionBodyTextNode } = accordion;
        const accordionProps = {
          title,
          body: childContentfulAccordionBodyTextNode.body,
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
      faqAccordion {
        title
        childContentfulAccordionBodyTextNode {
          body
        }
      }
    }
  }
`;

import { graphql, PageProps } from "gatsby";
import * as React from "react";
import Accordion from "../components/Accordion/Accordion";
// import Button from "../components/Button/Button";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  const header = data.contentfulPage?.header;
  const body = data.contentfulPage?.body?.body;
  const buttonData: any = data.contentfulPage?.assessmentButton;

  const handleClick = () => {
    window.open(buttonData.link, "_blank", "noopener,noreferrer"); //opens button link in a new tab
  };

  return (
    <>
      <DefaultLayout>
        <h1>{header}</h1>
        <p>{body}</p>
        <button onClick={handleClick}>{buttonData?.text}</button>
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
      assessmentButton {
        link
        text
      }
    }
  }
`;

import { graphql, PageProps } from "gatsby";
import * as React from "react";
import Accordion from "../components/Accordion/Accordion";
import Button from "../components/Button/Button";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";

const IndexPage = ({ data }: PageProps<Queries.AllAssessmentsQuery>) => {
  const { allContentfulAssessment: allAssessments } = data;
  return (
    <>
      <DefaultLayout>
        {allAssessments.nodes.map((assessment) => {
          return <p key={assessment.id}>{assessment.title}</p>;
        })}
        <Button />
        <Accordion />
      </DefaultLayout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query AllAssessments {
    allContentfulAssessment {
      nodes {
        id
        title
      }
    }
  }
`;

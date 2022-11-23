import { graphql, PageProps } from "gatsby";
import React from "react";
import { Header } from "../../components/Header";
import MultiButton from "../../components/MultiButton/MultiButton";
import { LinkStyled } from "../../components/MultiButton/MultiButton.styles";
import { stepperPages } from "../../components/pages/AssessmentsPage/AssessmentStepper/AssessmentStepper";
import { Paragraph } from "../../components/Paragraph";
import { setHeadTitle } from "../../globalFunctions/setHeadTitle";
import { AssessmentLayout } from "../../layouts/AssessmentLayout";
import { UniversalQuestionPageProps } from "./UniversalQuestion-types.d";

const UniversalAssessmentPage = ({
  data: {
    contentfulUniversalQuestionPage: {
      header,
      description: { description },
      buttons,
    },
  },
}: PageProps<UniversalQuestionPageProps>) => {
  return (
    <>
      <AssessmentLayout
        currentPage={stepperPages.universal}
        startingPage={stepperPages.universal}
      >
        <Header text={header} variant="h2" />

        <Paragraph>{description}</Paragraph>

        {buttons.map(({ label, universalResultPage }) => (
          <LinkStyled
            key={label}
            to={`/universal/results/${universalResultPage.title.toLocaleLowerCase()}`}
            state={{
              assessment: universalResultPage.title,
              startingPage: stepperPages.universal,
            }}
          >
            <MultiButton version="universalAnswer" label={label} />
          </LinkStyled>
        ))}
      </AssessmentLayout>
    </>
  );
};

export default UniversalAssessmentPage;

export const Head = () => setHeadTitle("Universal Check-In");

export const query = graphql`
  query {
    contentfulUniversalQuestionPage {
      header
      description {
        description
      }
      buttons {
        label
        universalResultPage {
          title
        }
      }
    }
  }
`;

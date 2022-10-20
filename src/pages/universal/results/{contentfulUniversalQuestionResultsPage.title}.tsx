import { graphql, PageProps } from "gatsby";
import React from "react";
import { Header } from "../../../components/Header";
import MultiButton from "../../../components/MultiButton/MultiButton";
import { LinkStyled } from "../../../components/MultiButton/MultiButton.styles";
import { MuiLinkStyled } from "../../../components/pages/UniversalQuestions/UniversalQuestionsResultsPage.styles";
import { Paragraph } from "../../../components/Paragraph";
import { UniversalQuestionResultsPagePropTypes } from "./UniversalQuestionResultsPage-types";

const UniversalQuestionResultsPage = ({
  data: {
    contentfulUniversalQuestionResultsPage: {
      title,
      header,
      pageDescription,
      firstStaticButtonDescription,
      firstStaticButton,
      secondStaticButtonDescription,
      secondStaticButton,
    },
  },
}: PageProps<UniversalQuestionResultsPagePropTypes>) => {
  return (
    <>
      <Header text={header} variant="h2" />
      <Paragraph>{pageDescription}</Paragraph>

      <MultiButton version="universal" label={title + " Assessment"} />

      <Paragraph>{firstStaticButtonDescription}</Paragraph>
      <LinkStyled
        to={`/${firstStaticButton?.linkToPage.title.toLocaleLowerCase()}`}
      >
        <MultiButton version="answer" label={firstStaticButton?.buttonText} />
      </LinkStyled>

      <Paragraph>{secondStaticButtonDescription}</Paragraph>
      <MuiLinkStyled href={`tel:${secondStaticButton?.phoneNumber}`}>
        <MultiButton version="answer" label="Call BFDI" />
      </MuiLinkStyled>
    </>
  );
};

export default UniversalQuestionResultsPage;

export const query = graphql`
  query ($title: String!) {
    contentfulUniversalQuestionResultsPage(title: { eq: $title }) {
      title
      header
      pageDescription
      dynamicButton {
        ... on ContentfulAssessmentButton {
          buttonText
          assessmentPage {
            title
          }
        }
        ... on ContentfulButtonInternalLink {
          buttonText
          linkToPage {
            ... on ContentfulFaqPage {
              title
            }
          }
        }
        ... on ContentfulButtonExternalLink {
          buttonText
          buttonLink
        }
      }
      firstStaticButtonDescription
      firstStaticButton {
        buttonText
        linkToPage {
          ... on ContentfulUniversalQuestionPage {
            title
          }
        }
      }
      secondStaticButtonDescription
      secondStaticButton {
        text
        phoneNumber
      }
    }
  }
`;

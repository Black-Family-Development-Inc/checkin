import { Box } from "@mui/material";
import { graphql, PageProps } from "gatsby";
import React from "react";
import { Header } from "../../../components/Header";
import MultiButton from "../../../components/MultiButton/MultiButton";
import { LinkStyled } from "../../../components/MultiButton/MultiButton.styles";
import { stepperPages } from "../../../components/pages/AssessmentsPage/AssessmentStepper/AssessmentStepper";
import {
  DividerStyled,
  FlexCenterContainer,
} from "../../../components/pages/UniversalQuestions/UniversalQuestionsResultsPage.styles";
import { Paragraph } from "../../../components/Paragraph";
import { setHeadTitle } from "../../../globalFunctions/setHeadTitle";
import { AssessmentLayout } from "../../../layouts/AssessmentLayout";
import { UniversalQuestionResultsPagePropTypes } from "./UniversalQuestionResultsPage-types";

const UniversalQuestionResultsPage = ({
  data: {
    contentfulUniversalQuestionResultsPage: {
      header,
      pageDescription,
      dynamicButton,
      firstStaticButtonDescription,
      firstStaticButton,
      secondStaticButtonDescription,
      secondStaticButton,
    },
  },
}: PageProps<UniversalQuestionResultsPagePropTypes>) => {
  const isExternalLink = dynamicButton?.buttonLink;
  const isFaq = dynamicButton?.linkToPage;

  const getDynamicButton = () => {
    if (isExternalLink) {
      return (
        <MultiButton
          version="externalLink"
          link={dynamicButton?.buttonLink}
          label={dynamicButton?.buttonText}
        />
      );
    }
    return (
      <LinkStyled
        to={
          isFaq
            ? "/faq"
            : `/assessments/${dynamicButton.assessmentPage?.title.toLocaleLowerCase()}`
        }
        state={{ startingPage: stepperPages.universal }}
      >
        <MultiButton version="universal" label={dynamicButton?.buttonText} />
      </LinkStyled>
    );
  };

  return (
    <AssessmentLayout
      currentPage={stepperPages.universal}
      startingPage={stepperPages.universal}
    >
      <Box sx={{ marginTop: "56px" }}>
        <Header text={header} variant="h2" />
        <Box sx={{ marginBottom: "40px" }}>
          <Paragraph>{pageDescription}</Paragraph>
        </Box>

        <FlexCenterContainer>{getDynamicButton()}</FlexCenterContainer>

        <FlexCenterContainer>
          <DividerStyled />
        </FlexCenterContainer>

        <Box sx={{ marginBottom: "24px" }}>
          <Paragraph>{firstStaticButtonDescription}</Paragraph>
        </Box>
        <FlexCenterContainer>
          <LinkStyled
            to={`/${firstStaticButton?.linkToPage.title.toLocaleLowerCase()}`}
          >
            <MultiButton
              version="answer"
              label={firstStaticButton?.buttonText}
            />
          </LinkStyled>
        </FlexCenterContainer>

        <Box sx={{ margin: "40px 0 24px 0" }}>
          <Paragraph>{secondStaticButtonDescription}</Paragraph>
        </Box>

        <FlexCenterContainer>
          <Box sx={{ marginBottom: "56px" }}>
            <MultiButton
              version="phoneNumber"
              label="Call BFDI"
              phoneNumber={secondStaticButton?.phoneNumber}
              type="light"
            />
          </Box>
        </FlexCenterContainer>
      </Box>
    </AssessmentLayout>
  );
};

export default UniversalQuestionResultsPage;

export const Head = () => setHeadTitle("Universal Check-In Results");

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

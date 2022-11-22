import { Box } from "@mui/material";
import { graphql, navigate, PageProps } from "gatsby";
import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import {
  AssessmentAnswers,
  AssessmentPrevNext,
} from "../../components/pages/AssessmentsPage";
import {
  AssessmentPageStyled,
  QuestionStyled,
} from "../../components/pages/AssessmentsPage/AssessmentPage/AssessmentPage.styles";
import { stepperPages } from "../../components/pages/AssessmentsPage/AssessmentStepper/AssessmentStepper";
import { StepperPagesType } from "../../components/pages/AssessmentsPage/AssessmentStepper/AssessmentStepper-types";
import { Paragraph } from "../../components/Paragraph";
import { setHeadTitle } from "../../globalFunctions/setHeadTitle";
import { AssessmentLayout } from "../../layouts/AssessmentLayout";
import { StyledFormControl } from "../../layouts/AssessmentLayout/AssessmentLayout.styles";
import {
  AssessmentLocationState,
  AssessmentPageProps,
  UsersSavedQuestion,
} from "./AssessmentPage-types";

const AssessmentPage = ({
  data,
  location: { state },
}: PageProps<AssessmentPageProps, object, AssessmentLocationState>) => {
  const {
    contentfulAssessment: {
      title,
      pageTitle,
      assessment: { answers, questions, description, severityRubric, headings },
    },
  } = data;
  const { startingPage } = state || {};

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [usersSavedQuestions, setUsersSavedQuestions] = useState<
    UsersSavedQuestion[]
  >([]);

  useEffect(() => {
    const unansweredQuestions = questions.map((question) => {
      return {
        question: question.text,
        answer: "",
        score: 0,
        triggered: false,
      };
    });
    setUsersSavedQuestions(unansweredQuestions);
  }, [questions]);

  const currentQuestion = questions[currentQuestionIdx];
  const questionsLength = questions.length;
  const nextDisabled = !usersSavedQuestions?.[currentQuestionIdx]?.answer;
  const resultsDisabled = usersSavedQuestions.some(
    (saved) => saved.answer === "",
  );

  const checkTriggerQuestions = () =>
    usersSavedQuestions.some((question) => question.triggered);

  const navigateToResultsPage = () => {
    const resultsPage = "/results/";
    const assessmentType = title;
    const maxScore = severityRubric[severityRubric.length - 1].max;
    const triggered = checkTriggerQuestions();
    const assessmentScore = accumulateAssessmentScore();
    navigate(resultsPage, {
      state: {
        assessmentScore,
        severityRubric,
        triggered,
        startingPage,
        assessmentType,
        maxScore,
      },
    });
  };

  const accumulateAssessmentScore = () =>
    usersSavedQuestions.reduce((prev, curr) => prev + curr.score, 0);

  return (
    <AssessmentLayout
      currentPage={stepperPages.assessment as StepperPagesType}
      startingPage={startingPage}
      assessmentTitle={title}
    >
      <AssessmentPageStyled>
        <Box>
          <Header text={pageTitle + " Assessment"} variant="h2" />
          {headings && (
            <Paragraph sx={{ fontWeight: 500 }}>
              {headings[currentQuestion?.questionType]}
            </Paragraph>
          )}
          {currentQuestionIdx === 0 && description && (
            <Paragraph sx={{ fontWeight: 500 }}>{description}</Paragraph>
          )}
          <QuestionStyled>
            <Paragraph>{currentQuestion.text}</Paragraph>
            <Paragraph sx={{ paddingLeft: "35px" }}>
              {currentQuestionIdx + 1}/{questions.length}
            </Paragraph>
          </QuestionStyled>
        </Box>

        <StyledFormControl>
          <AssessmentAnswers
            answers={answers}
            currentQuestion={currentQuestion}
            currentQuestionIdx={currentQuestionIdx}
            usersSavedQuestions={usersSavedQuestions}
            setUsersSavedQuestions={setUsersSavedQuestions}
          />

          <AssessmentPrevNext
            currentQuestionIdx={currentQuestionIdx}
            questionsLength={questionsLength}
            setCurrentQuestionIdx={setCurrentQuestionIdx}
            handleResultsClick={navigateToResultsPage}
            resultsDisabled={resultsDisabled}
            nextDisabled={nextDisabled}
          />
        </StyledFormControl>
      </AssessmentPageStyled>
    </AssessmentLayout>
  );
};

export default AssessmentPage;

export const Head = () => setHeadTitle("Assessment");

export const query = graphql`
  query AssessmentPage($title: String!) {
    contentfulAssessment(title: { eq: $title }) {
      id
      title
      pageTitle
      assessment {
        answers {
          binary {
            score
            text
          }
          scale {
            score
            text
          }
        }
        questions {
          text
          triggerAnswer
          questionType
          answers {
            text
            score
          }
        }
        severityRubric {
          max
          min
          severity
        }
        description
        headings {
          scale
          binary
        }
      }
    }
  }
`;

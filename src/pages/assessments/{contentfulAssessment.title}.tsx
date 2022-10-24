import { FormControl, Typography } from "@mui/material";
import { graphql, navigate, PageProps } from "gatsby";
import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import {
  AssessmentAnswers,
  AssessmentPrevNext,
} from "../../components/pages/AssessmentsPage";
import {
  AssessmentHeaderContainer,
  AssessmentHeaderStyled,
  AssessmentPageStyled,
  DirectionsStyled,
  QuestionStyled,
} from "../../components/pages/AssessmentsPage/AssessmentPage/AssessmentPage.styles";
import { stepperPages } from "../../components/pages/AssessmentsPage/AssessmentStepper/AssessmentStepper";
import { StepperPagesType } from "../../components/pages/AssessmentsPage/AssessmentStepper/AssessmentStepper-types";
import { AssessmentLayout } from "../../layouts/AssessmentLayout";
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
    const resultsPage = "/results/" + title.toLowerCase();
    const triggered = checkTriggerQuestions();
    const assessmentScore = accumulateAssessmentScore();
    navigate(resultsPage, {
      state: { assessmentScore, severityRubric, triggered, startingPage },
    });
  };

  const accumulateAssessmentScore = () =>
    usersSavedQuestions.reduce((prev, curr) => prev + curr.score, 0);

  return (
    <AssessmentLayout
      currentPage={stepperPages.assessment as StepperPagesType}
      startingPage={startingPage}
    >
      <AssessmentPageStyled>
        <AssessmentHeaderContainer>
          <Header text={pageTitle + " Assessment"} variant="h2" />
          {headings && (
            <AssessmentHeaderStyled>
              {headings[currentQuestion?.questionType]}
            </AssessmentHeaderStyled>
          )}
          {currentQuestionIdx === 0 && description && (
            <DirectionsStyled>
              <Typography sx={{ fontWeight: "700", marginBottom: "12px" }}>
                Directions
              </Typography>
              <Typography>{description}</Typography>
            </DirectionsStyled>
          )}
          <QuestionStyled>
            <Typography>{currentQuestion.text}</Typography>
            <Typography sx={{ paddingLeft: "35px" }}>
              {currentQuestionIdx + 1}/{questions.length}
            </Typography>
          </QuestionStyled>
        </AssessmentHeaderContainer>

        <FormControl>
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
        </FormControl>
      </AssessmentPageStyled>
    </AssessmentLayout>
  );
};

export default AssessmentPage;

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

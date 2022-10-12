import { FormControl, Typography } from "@mui/material";
import { graphql, navigate, PageProps } from "gatsby";
import React, { useEffect, useState } from "react";
import {
  AssessmentAnswers,
  AssessmentPrevNext,
} from "../../components/pages/AssessmentsPage";
import {
  AssessmentHeaderContainer,
  AssessmentPageStyled,
  AssessmentTitleStyled,
  DirectionsStyled,
  QuestionStyled,
} from "../../components/pages/AssessmentsPage/AssessmentPage/AssessmentPage.styles";
import { stepperPages } from "../../components/pages/AssessmentsPage/AssessmentStepper/AssessmentStepper";
import { StepperPagesType } from "../../components/pages/AssessmentsPage/AssessmentStepper/AssessmentStepper-types";
import AssessmentTrackerLayout from "../../layouts/AssessmentTrackerLayout/AssessmentLayout";
import {
  AssessmentLocationState,
  AssessmentPageProps,
  UsersSavedQuestion,
} from "./AssessmentPage-types";

const AssessmentPage = ({
  data,
  location,
}: PageProps<AssessmentPageProps, object, AssessmentLocationState>) => {
  const {
    contentfulAssessment: {
      title,
      assessment: { answers, questions, description, severityRubric },
    },
  } = data;

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
  const startingPage = location.state.startingPage;
  const currentQuestion = questions[currentQuestionIdx];
  const questionsLength = questions.length;
  const nextDisabled = !usersSavedQuestions?.[currentQuestionIdx]?.answer;
  const resultsDisabled = usersSavedQuestions.some(
    (saved) => saved.answer === "",
  );

  const titles = {
    "phq-9": "Depression",
    "dast-10": "Substance Use",
    "gad-7": "Anxiety",
    universal: "Universal",
  };

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
    <AssessmentTrackerLayout
      currentPage={stepperPages.assessment as StepperPagesType}
      startingPage={location.state.startingPage}
    >
      <AssessmentPageStyled>
        <AssessmentHeaderContainer>
          <AssessmentTitleStyled>
            {titles[title.toLocaleLowerCase() as keyof typeof titles]}{" "}
            Assessment
          </AssessmentTitleStyled>
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
    </AssessmentTrackerLayout>
  );
};

export default AssessmentPage;

export const query = graphql`
  query AssessmentPage($title: String!) {
    contentfulAssessment(title: { eq: $title }) {
      id
      title
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

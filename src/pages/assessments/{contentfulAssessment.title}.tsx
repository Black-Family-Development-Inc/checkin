import { FormControl } from "@mui/material";
import { graphql } from "gatsby";
import React, { useEffect, useState } from "react";
import {
  AssessmentAnswers,
  AssessmentPrevNext,
  AssessmentStepper,
} from "../../components/pages/assessments";
import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";
import {
  AssessmentPageProps,
  AssessmentStep,
  UsersSavedQuestions,
} from "./AssessmentPage-types";

const AssessmentPage = ({ data }: AssessmentPageProps) => {
  const {
    contentfulAssessment: {
      title,
      assessment: { answers, questions },
    },
    contentfulButton,
  } = data;

  const [steps, setSteps] = useState<AssessmentStep[]>([
    { label: "Preliminary Questions", isComplete: false },
    { label: "Assessment Questions", isComplete: false },
    { label: "Results & Resources", isComplete: false },
  ]);

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [usersSavedQuestions, setUsersSavedQuestions] = useState<
    UsersSavedQuestions[]
  >([{ question: "", answer: "", score: 0 }]);

  useEffect(() => {
    const unansweredQuestions = questions.map((question) => {
      return { question: question.text, answer: "", score: 0 };
    });
    setUsersSavedQuestions(unansweredQuestions);
  }, [questions]);

  const currentQuestion = questions[currentQuestionIdx];
  const nextDisabled = !usersSavedQuestions?.[currentQuestionIdx]?.answer;
  const resultsDisabled = usersSavedQuestions.some(
    (saved) => saved.answer === "",
  );

  return (
    <DefaultLayout>
      <AssessmentStepper {...{ steps, setSteps }} />
      <p>Assessment Title: {title}</p>
      <p>
        You are on question {currentQuestionIdx + 1} out of {questions.length}
      </p>
      <FormControl>
        <p>{currentQuestion.text}</p>
        <AssessmentAnswers
          answers={answers}
          currentQuestion={currentQuestion}
          currentQuestionIdx={currentQuestionIdx}
          usersSavedQuestions={usersSavedQuestions}
          setUsersSavedQuestions={setUsersSavedQuestions}
        />
        <div>
          <AssessmentPrevNext
            currentQuestionIdx={currentQuestionIdx}
            questions={questions}
            contentfulButton={contentfulButton}
            setCurrentQuestionIdx={setCurrentQuestionIdx}
            nextDisabled={nextDisabled}
            resultsDisabled={resultsDisabled}
          />
        </div>
      </FormControl>
    </DefaultLayout>
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
    contentfulButton(text: { eq: "Results" }) {
      text
      link
    }
  }
`;

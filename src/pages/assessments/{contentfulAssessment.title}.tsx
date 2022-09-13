import { Button } from "@mui/material";
import { graphql, PageProps } from "gatsby";
import React, { useState } from "react";
import AssessmentStepper from "../../components/AssessmentStepper/AssessmentStepper";

const questions = ["This", "Is", "Just", "Filler", "Data", "🐱"];

const AssessmentPage = ({ data }: PageProps<Queries.AssessmentPageQuery>) => {
  const { contentfulAssessment: assessment } = data;

  console.log(assessment); // only for testing purposes remove once page is more complete

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);

  const clamp = (num: number) =>
    Math.min(Math.max(num, 0), questions.length - 1);

  return (
    <>
      <AssessmentStepper />
      <p>Assessment ID: {assessment?.id}</p>
      <p>Assessment Title: {assessment?.title}</p>
      <p>Assessment "Questions":</p>
      <p>
        You are on question {currentQuestionIdx + 1} out of {questions.length}
      </p>
      <ul>
        <li>one</li>
        <li>two</li>
      </ul>

      <div>
        <Button
          onClick={() => setCurrentQuestionIdx(clamp(currentQuestionIdx - 1))}
          disabled={currentQuestionIdx === 0}
        >
          Previous
        </Button>

        {currentQuestionIdx === questions.length - 1 ? (
          <Button onClick={() => alert(questions[questions.length - 1])}>
            Results
          </Button>
        ) : (
          <Button
            onClick={() => setCurrentQuestionIdx(clamp(currentQuestionIdx + 1))}
          >
            Next
          </Button>
        )}
      </div>
    </>
  );
};

export default AssessmentPage;

export const query = graphql`
  query AssessmentPage($title: String!) {
    contentfulAssessment(title: { eq: $title }) {
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

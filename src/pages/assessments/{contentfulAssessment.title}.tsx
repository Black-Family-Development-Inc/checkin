import { Button } from "@mui/material";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { graphql } from "gatsby";
import React, { useState } from "react";
import AssessmentStepper from "../../components/AssessmentStepper/AssessmentStepper";
import { AnswerOptions, AnswerTypes, Assessment, Question } from "../../types";

const questions = ["This", "Is", "Just", "Filler", "Data", "🐱"];

const renderAnswers = (answers: AnswerOptions[]) => {
  return answers.map((answer: AnswerOptions, i: number) => (
    <FormControlLabel
      key={`custom-${i}`}
      value={`${answer.score}-${i}`}
      control={<Radio />}
      label={answer.text}
    />
  ));
};

const AssessmentPage = ({
  data,
}: {
  data: { contentfulAssessment: { title: string; assessment: Assessment } };
}) => {
  const {
    contentfulAssessment: { title, assessment },
  } = data;

  console.log(assessment); // only for testing purposes remove once page is more complete

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);

  const clamp = (num: number) =>
    Math.min(Math.max(num, 0), questions.length - 1);


  return (
    <>
      <AssessmentStepper />
      <p>Assessment Title: {title}</p>
      <p>Assessment "Question":</p>
      {assessment?.questions?.map((question: Question, i: number) => (
        <div key={i}>
          <p>{question.text}</p>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              {question.questionType &&
                renderAnswers(
                  question.questionType === "custom" && question.answers
                    ? question.answers
                    : assessment?.answers[
                    question.questionType as
                    | AnswerTypes.scale
                    | AnswerTypes.binary
                    ],
                )}
            </RadioGroup>
          </FormControl>
        </div>
      ))}
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

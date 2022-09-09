import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { graphql } from "gatsby";
import React from "react";

enum AnswerTypes {
  binary = "binary",
  scale = "scale",
  custom = "custom",
}

type AnswerOptions = {
  score: number;
  text: string;
};

type Description = string;

type Severity = {
  max: number;
  min: number;
  severity: string;
};

type Heading = {
  scale: string;
  binary: string;
};

type Question = {
  text: string;
  questionType: AnswerTypes;
  triggerAnswer: string;
  answers: AnswerOptions[] | null;
};

type Assessment = {
  questions: Question[];
  headings: Heading[];
  description: Description;
  severityRubric: Severity[];
  answers: {
    binary: AnswerOptions[];
    scale: AnswerOptions[];
  };
};

const Answer = (answers: AnswerOptions[]) => {
  return answers.map((o: AnswerOptions, i: number) => (
    <FormControlLabel
      key={`custom-${i}`}
      value={`${o.score}-${i}`}
      control={<Radio />}
      label={o.text}
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
  return (
    <>
      <p>Assessment Title: {title}</p>
      <p>Assessment "Question":</p>
      {assessment?.questions?.map((q: Question, i: number) => (
        <div key={i}>
          <p>{q.text}</p>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              {q.questionType &&
                Answer(
                  q.questionType === "custom" && q.answers
                    ? q.answers
                    : assessment?.answers[
                        q.questionType as AnswerTypes.scale | AnswerTypes.binary
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

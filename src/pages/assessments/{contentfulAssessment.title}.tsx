import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { graphql, PageProps } from "gatsby";
import React from "react";

enum AnswerTypes {
  binary = "binary",
  scale = "scale",
  custom = "custom",
}

interface IAnswersProps {
  answers: any;
  type: AnswerTypes;
}

type AnswerOptions = {
  score: number;
  text: string;
};

const Answer = ({ answers, type }: IAnswersProps) => {
  if (type === AnswerTypes.custom) {
    return answers.map((o: AnswerOptions, i: number) => (
      <FormControlLabel
        key={`custom-${i}`}
        value={`${o.score}-${i}`}
        control={<Radio />}
        label={o.text}
      />
    ));
  }
  return answers[type].map((o: AnswerOptions, i: number) => (
    <FormControlLabel
      key={`${type}-${o.score}-${i}`}
      value={`${o.score}-${i}`}
      control={<Radio />}
      label={o.text}
    />
  ));
};

const AssessmentPage = ({ data }: PageProps<Queries.AssessmentPageQuery>) => {
  const { contentfulAssessment } = data;
  return (
    <>
      <p>Assessment Title: {contentfulAssessment?.title}</p>
      <p>Assessment "Question":</p>
      {contentfulAssessment?.assessment?.questions?.map((q: any, i: number) => (
        <div key={i}>
          <p>{q.text}</p>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              {q.questionType && (
                <Answer
                  answers={
                    q.questionType === "custom"
                      ? q.answers
                      : contentfulAssessment?.assessment?.answers
                  }
                  type={q.questionType}
                />
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
        }
      }
    }
  }
`;

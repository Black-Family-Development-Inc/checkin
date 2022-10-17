import { Link } from "gatsby";
import React from "react";
import { Header } from "../../../components/Header";
import MultiButton from "../../../components/MultiButton/MultiButton";
import { Paragraph } from "../../../components/Paragraph";
import AssessmentTrackerLayout from "../../../layouts/AssessmentTrackerLayout/AssessmentTrackerLayout";
import { UniversalPageButtonsData } from "../AssessmentPage-types";

const UniversalAssessmentPage = () => {
  const buttonsData: UniversalPageButtonsData = {
    assessmentButtons: [
      {
        label: "I am feeling anxious, worried, and/or stressed.",
        assessment: "gad-7",
      },
      {
        label: "I am feeling sad, down, low mood, and/or I am grieving.",
        assessment: "phq-9",
      },
      {
        label: "I am worried about my substance use (e.g. drugs, alcohol).",
        assessment: "dast-10",
      },
    ],
    faqButtons: [
      { label: "I am worried about my physical health." },
      { label: "I am worried about housing, food, and/or clothing." },
      { label: "I just want to learn more about BFDI." },
    ],
  };

  return (
    <>
      <AssessmentTrackerLayout>
        <Header text="Universal Question" variant="h2" />

        <Paragraph>
          This is a universal assessment to help you identify specific
          assessment to take or related resources relevant to your situation.
        </Paragraph>

        <Paragraph>
          Of the following, what feelings are you most concerned with? (select
          only 1 option)
        </Paragraph>

        {buttonsData.assessmentButtons.map(({ assessment, label }) => (
          <Link
            key={assessment}
            to="/assessments/universal/results"
            state={{ assessment }}
          >
            <MultiButton version="answer" label={label} />
          </Link>
        ))}

        {buttonsData.faqButtons.map(({ label }) => (
          <Link key={label} to="/faq">
            <MultiButton version="answer" label={label} />
          </Link>
        ))}
      </AssessmentTrackerLayout>
    </>
  );
};

export default UniversalAssessmentPage;

import React from "react";
import ArticleTabs from "../../../ArticleTabs/ArticleTabs";
import { Header } from "../../../Header";
import MultiButton from "../../../MultiButton/MultiButton";
import { Paragraph } from "../../../Paragraph";
import { ResourcesTypes } from "./Resources-types";

const Resources = ({
  resourcesHeader,
  bookAppointmentDescription,
  bookAppointmentButtonText,
  bookAppointmentPhoneNumber,
  crisisLineDescription,
  crisisLineButtonText,
  crisisLinePhoneNumber,
  articlesDescription,
  allArticles,
  tabAnxiety,
  tabDepression,
  tabSubstanceUse,
  assessmentType,
  assessmentSeverity,
}: ResourcesTypes) => {
  const shouldRenderCrisisButton =
    assessmentSeverity === "Severe" || assessmentSeverity === "Severe Level";
  return (
    <>
      <Header text={resourcesHeader} variant="h2" />
      <Paragraph paragraph>{bookAppointmentDescription}</Paragraph>

      <MultiButton
        version="phoneNumber"
        phoneNumber={bookAppointmentPhoneNumber}
        label={bookAppointmentButtonText}
      />
      {shouldRenderCrisisButton && (
        <div>
          <Paragraph paragraph>{crisisLineDescription}</Paragraph>
          <MultiButton
            version="phoneNumber"
            phoneNumber={crisisLinePhoneNumber}
            label={crisisLineButtonText}
          />
        </div>
      )}

      <Paragraph paragraph>{articlesDescription}</Paragraph>
      <ArticleTabs
        allArticles={allArticles}
        assessmentType={assessmentType}
        tabAnxiety={tabAnxiety}
        tabDepression={tabDepression}
        tabSubstanceUse={tabSubstanceUse}
      />
      <hr />
    </>
  );
};

export default Resources;

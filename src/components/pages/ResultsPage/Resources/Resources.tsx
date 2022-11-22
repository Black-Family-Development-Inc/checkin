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
  crisisHotlineButton,
  articlesDescription,
  allArticles,
  assessmentType,
  shouldRenderCrisisInfo,
}: ResourcesTypes) => {
  return (
    <>
      <Header text={resourcesHeader} variant="h2" />
      <Paragraph paragraph>{bookAppointmentDescription}</Paragraph>

      <MultiButton
        version="phoneNumber"
        phoneNumber={bookAppointmentPhoneNumber}
        label={bookAppointmentButtonText}
        type="dark"
      />
      {shouldRenderCrisisInfo && (
        <div>
          <Paragraph paragraph>{crisisLineDescription}</Paragraph>
          <MultiButton
            version="phoneNumber"
            phoneNumber={crisisHotlineButton.phoneNumber}
            label={crisisHotlineButton.text}
            type="dark"
          />
        </div>
      )}

      <Paragraph paragraph>{articlesDescription}</Paragraph>
      <ArticleTabs allArticles={allArticles} assessmentType={assessmentType} />
    </>
  );
};

export default Resources;

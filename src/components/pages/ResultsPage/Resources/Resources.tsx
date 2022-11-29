// import { Box } from "@mui/material";
import React from "react";
import ArticleTabs from "../../../ArticleTabs/ArticleTabs";
import { Header } from "../../../Header";
import MultiButton from "../../../MultiButton/MultiButton";
import { Paragraph } from "../../../Paragraph";
import {
  BottomParagraphSpacing,
  ButtonContainer,
  UpperAndMiddleParagraphSpacing,
} from "./Resources.styles";
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
      <UpperAndMiddleParagraphSpacing>
        <Paragraph paragraph>{bookAppointmentDescription}</Paragraph>
      </UpperAndMiddleParagraphSpacing>

      <ButtonContainer>
        <MultiButton
          version="phoneNumber"
          phoneNumber={bookAppointmentPhoneNumber}
          label={bookAppointmentButtonText}
          type="dark"
        />
      </ButtonContainer>
      {shouldRenderCrisisInfo && (
        <>
          <UpperAndMiddleParagraphSpacing>
            <Paragraph paragraph>{crisisLineDescription}</Paragraph>
          </UpperAndMiddleParagraphSpacing>
          <ButtonContainer>
            <MultiButton
              version="phoneNumber"
              phoneNumber={crisisHotlineButton.phoneNumber}
              label={crisisHotlineButton.text}
              type="dark"
            />
          </ButtonContainer>
        </>
      )}
      <BottomParagraphSpacing>
        <Paragraph paragraph>{articlesDescription}</Paragraph>
      </BottomParagraphSpacing>
      <ArticleTabs allArticles={allArticles} assessmentType={assessmentType} />
    </>
  );
};

export default Resources;

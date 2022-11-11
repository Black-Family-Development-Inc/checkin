import React from "react";
// import ArticleList from "../../../ArticleList/ArticleList";
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
  shouldRenderCrisisInfo,
}: ResourcesTypes) => {
  console.log(allArticles); // console logging articles for when they're added as a tabbed component
  return (
    <>
      <Header text={resourcesHeader} variant="h2" />
      <Paragraph paragraph>{bookAppointmentDescription}</Paragraph>

      <MultiButton
        version="phoneNumber"
        phoneNumber={bookAppointmentPhoneNumber}
        label={bookAppointmentButtonText}
      />
      {shouldRenderCrisisInfo && (
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
      {/* <ArticleList articles={allArticles} /> */}
      <hr />
    </>
  );
};

export default Resources;

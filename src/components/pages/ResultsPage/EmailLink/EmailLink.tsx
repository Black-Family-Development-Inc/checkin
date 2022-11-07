import React from "react";
import { EmailLinkTypes } from "./EmailLink-types";

const EmailLink = ({
  resultsHeader,
  scoreAndSeverity,
  // accordionData,
  bookAppointmentButtonText,
  bookAppointmentPhoneNumber,
  crisisLineButtonText,
  crisisLinePhoneNumber,
}: // assessmentType,
// allArticles,
EmailLinkTypes) => {
  // const articleData = allArticles.find((element) => {
  //   return element.type === assessmentType;
  // });
  const emailBody = (
    <body>
      <h2>{resultsHeader}</h2>
      <p>{scoreAndSeverity}</p>
      <h2>Resources</h2>
      <p>
        {bookAppointmentButtonText}:{" "}
        <a href={`tel:${bookAppointmentPhoneNumber}`}>
          {bookAppointmentPhoneNumber}
        </a>
      </p>
      <p>
        {crisisLineButtonText}:{" "}
        <a href={`tel:${crisisLinePhoneNumber}`}>{crisisLinePhoneNumber}</a>
      </p>
      <h3>Helpful Articles</h3>
      {/* <script type="text/javascript">
				for (const article of articleData.articles) {
					return (
						<a href={article.link}>{article.title}</a>
					)
				}
			</script> */}
    </body>
  );
  return <p>{emailBody}</p>;
};

export default EmailLink;

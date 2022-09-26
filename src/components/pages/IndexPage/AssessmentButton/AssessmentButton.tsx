import React from "react";
import { AssessmentButtonStyled, LinkStyled } from "./AssessmentButton.styles";
import { ButtonLinkPropsType } from "./AssessmentButton-types";

const AssessmentButton = (props: ButtonLinkPropsType) => {
  return (
    <LinkStyled to={props.link}>
      <AssessmentButtonStyled disabled={props.disabled}>
        {props.text}
      </AssessmentButtonStyled>
    </LinkStyled>
  );
};

export default AssessmentButton;

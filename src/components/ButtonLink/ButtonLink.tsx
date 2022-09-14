import { Link } from "gatsby";
import React from "react";
import { ButtonStyled } from "../Button/Button.styles";
import { ButtonLinkPropsType } from "./ButtonLink-types";

const ButtonLink = (props: ButtonLinkPropsType) => {
  return (
    <Link to={props.link}>
      <ButtonStyled disabled={props.disabled}>{props.text}</ButtonStyled>
    </Link>
  );
};

export default ButtonLink;

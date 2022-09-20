import React from "react";
import { HeaderStyled } from "./Header.styles";
import { HeaderPropTypes } from "./Header-types";

const Header = ({ text }: HeaderPropTypes) => {
  return <HeaderStyled variant="h2">{text}</HeaderStyled>;
};

export default Header;

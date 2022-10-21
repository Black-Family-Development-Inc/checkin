import React from "react";
import { HR } from "../HR";
import { HeaderStyled } from "./Header.styles";
import { HeaderPropTypes } from "./Header-types";

const Header = ({ text, variant }: HeaderPropTypes) => {
  return (
    <>
      <HeaderStyled variant={variant}>{text}</HeaderStyled>
      <HR />
    </>
  );
};

export default Header;

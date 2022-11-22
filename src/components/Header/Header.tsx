import React from "react";
import { HR } from "../HR";
import { HeaderStyled } from "./Header.styles";
import { HeaderPropTypes } from "./Header-types";

const Header = ({ text, variant, id }: HeaderPropTypes) => {
  return (
    <>
      <HeaderStyled variant={variant} id={id}>
        {text}
      </HeaderStyled>
      <HR />
    </>
  );
};

export default Header;

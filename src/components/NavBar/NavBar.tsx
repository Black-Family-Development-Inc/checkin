import React from "react";
import logo from "../../images/logo.svg";
import { ImageStyled } from "../Image/img.styles";
import {
  NavBarContainerStyled,
  NavBarLink,
  NavBarLogoContainer,
  NavBarText,
} from "./NavBar.styles";

const NavBar = () => {
  return (
    <NavBarContainerStyled>
      <NavBarLogoContainer>
        <NavBarLink to="/">
          <ImageStyled src={logo} alt="BFDI LOGO" />
        </NavBarLink>

        <NavBarLink to="/">
          <NavBarText>Black Family Development, Inc.</NavBarText>
        </NavBarLink>
      </NavBarLogoContainer>

      <NavBarLink to="/faq">FAQ</NavBarLink>
    </NavBarContainerStyled>
  );
};

export default NavBar;

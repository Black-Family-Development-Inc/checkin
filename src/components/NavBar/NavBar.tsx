import React from "react";
import logo from "../../images/logo.svg";
import { ImageStyled } from "../Image/img.styles";
import {
  NavBarContainerStyled,
  NavBarContentStyled,
  NavBarLink,
  NavBarLogoContainer,
  NavBarSVG,
  NavBarText,
} from "./NavBar.styles";

const NavBar = () => {
  return (
    <NavBarContainerStyled>
      <NavBarContentStyled>
        <NavBarLogoContainer>
          <NavBarSVG>
            <NavBarLink to="/">
              <ImageStyled src={logo} alt="BFDI LOGO" />
            </NavBarLink>
          </NavBarSVG>

          <NavBarLink to="/">
            <NavBarText>Black Family Development, Inc.</NavBarText>
          </NavBarLink>
        </NavBarLogoContainer>

        <NavBarLink to="/faq">FAQ</NavBarLink>
      </NavBarContentStyled>
    </NavBarContainerStyled>
  );
};

export default NavBar;

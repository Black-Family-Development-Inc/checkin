import { Link } from "gatsby";
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
            <Link to="/">
              <ImageStyled src={logo} alt="BFDI LOGO" />
            </Link>
          </NavBarSVG>

          <NavBarLink to="/">
            <NavBarText>Hope is Here at BFDI</NavBarText>
          </NavBarLink>
        </NavBarLogoContainer>

        <NavBarLink to="/faq">FAQ</NavBarLink>
      </NavBarContentStyled>
    </NavBarContainerStyled>
  );
};

export default NavBar;

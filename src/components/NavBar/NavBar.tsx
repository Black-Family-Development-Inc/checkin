import { Link } from "gatsby";
import React from "react";
import logo from "../../images/bfdi-logo.png";
import { Paragraph } from "../Paragraph";
import {
  NavBarContainerStyled,
  NavBarLink,
  NavBarLogoContainer,
} from "./NavBar.styles";

const NavBar = () => {
  return (
    <NavBarContainerStyled>
      <NavBarLogoContainer>
        <Link to="/">
          <img src={logo} alt="BFDI LOGO" />
        </Link>

        <NavBarLink>
          <Link to="/" className="nav-link">
            <Paragraph className="logo-text">
              Black Family Development, Inc.
            </Paragraph>
          </Link>
        </NavBarLink>
      </NavBarLogoContainer>

      <NavBarLink>
        <Link className="nav-link" to="/faq">
          FAQ
        </Link>
      </NavBarLink>
    </NavBarContainerStyled>
  );
};

export default NavBar;

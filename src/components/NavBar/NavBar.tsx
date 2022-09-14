import { Link } from "gatsby";
import React from "react";
import {
  NavBarContainerStyled,
  NavBarLink,
  NavBarLogoContainer,
} from "./NavBar.styles";

const NavBar = () => {
  return (
    <NavBarContainerStyled>
      <NavBarLogoContainer>
        <img src="/bfdi-logo.png" alt="BFDI LOGO" />
        <span className="logo-text">Black Family Development, Inc.</span>
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

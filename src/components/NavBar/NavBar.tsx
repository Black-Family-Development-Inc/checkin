import { Typography } from "@mui/material";
import { Link } from "gatsby";
import React from "react";
import logo from "../../images/bfdi-logo.png";
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
            <Typography className="logo-text">
              Black Family Development, Inc.
            </Typography>
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

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import MultiButton from "../MultiButton/MultiButton";
import { LinkStyled } from "./NavButton.styles";
import { NavButtonPropTypes } from "./NavButton-types";

const NavButton = ({ label, link, startingPage }: NavButtonPropTypes) => {
  return (
    <LinkStyled to={link} state={{ startingPage }}>
      <MultiButton version="navButton" label={label}>
        <ArrowBackIcon className="nav-icon" />
      </MultiButton>
    </LinkStyled>
  );
};

export default NavButton;

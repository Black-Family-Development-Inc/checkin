import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import MultiButton from "../MultiButton/MultiButton";
import { LinkStyled } from "./NavButton.styles";
import { NavButtonPropTypes } from "./NavButton-types";

const NavButton = ({ label, link }: NavButtonPropTypes) => {
  return (
    <LinkStyled to={link}>
      <MultiButton version="navButton" label={label}>
        <ArrowBackIcon sx={{ marginRight: "12px" }} />
      </MultiButton>
    </LinkStyled>
  );
};

export default NavButton;

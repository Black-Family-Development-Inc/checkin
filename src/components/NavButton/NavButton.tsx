import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { navigate } from "gatsby";
import React from "react";
import MultiButton from "../MultiButton/MultiButton";
import { NavButtonPropTypes } from "./NavButton-types";

const NavButton = ({ label, link }: NavButtonPropTypes) => {
  return (
    <>
      <MultiButton
        version="navButton"
        label={label}
        onClick={() => navigate(link)}
      >
        <ArrowBackIcon />
      </MultiButton>
    </>
  );
};

export default NavButton;

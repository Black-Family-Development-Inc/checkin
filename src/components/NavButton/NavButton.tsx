import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "gatsby";
import React from "react";
import MultiButton from "../MultiButton/MultiButton";
import { NavButtonPropTypes } from "./NavButton-types";

const NavButton = ({ label, link }: NavButtonPropTypes) => {
  return (
    <Link to={link}>
      <MultiButton version="navButton" label={label}>
        <ArrowBackIcon sx={{ marginRight: "12px" }} />
      </MultiButton>
    </Link>
  );
};

export default NavButton;

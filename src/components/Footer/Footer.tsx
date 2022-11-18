import { Typography } from "@mui/material";
import React from "react";
import MultiButton from "../MultiButton/MultiButton";
import { FooterStyled } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterStyled>
      <Typography>HOPE IS HERE!</Typography>
      <Typography>Main Office: 2995 E Grand BLVD, Detroit, MI 48202</Typography>
      <Typography>
        Call BFDI for support: 1-877-SEE-HOPE (
        <a href="tel:844-733-4673">844-733-4673</a>)
      </Typography>
      <MultiButton
        version="externalLinkBasic"
        link="https://www.blackfamilydevelopment.org/"
        label="BFDI Main Website"
      />
    </FooterStyled>
  );
};

export default Footer;

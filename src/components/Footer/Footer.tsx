import { Typography } from "@mui/material";
import React from "react";
import MultiButton from "../MultiButton/MultiButton";
import { FooterContentStyled, FooterStyled } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContentStyled>
        <Typography>HOPE IS HERE!</Typography>
        <Typography>
          Main Office: 2995 E Grand BLVD, Detroit, MI 48202
        </Typography>
        <Typography>
          Call BFDI for support: <a href="tel:844-733-4673"> 1-877-SEE-HOPE</a>{" "}
          (844-733-467)
        </Typography>
        <MultiButton
          className="footer-link"
          version="externalLinkBasic"
          link="https://www.blackfamilydevelopment.org/"
          label="BFDI Main Website"
        />
      </FooterContentStyled>
    </FooterStyled>
  );
};

export default Footer;

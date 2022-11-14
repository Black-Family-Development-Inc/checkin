import { Link, Typography } from "@mui/material";
import React from "react";
import { FooterStyled } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterStyled>
      <Typography>HOPE IS HERE!</Typography>
      <Typography>Main Office: 2995 E Grand BLVD, Detroit, MI 48202</Typography>
      <Typography>
        Call BFDI for support: 1-877-SEE-HOPE (844-733-4673)
      </Typography>
      <Link href="https://www.blackfamilydevelopment.org/">
        BFDI Main Website
      </Link>
    </FooterStyled>
  );
};

export default Footer;

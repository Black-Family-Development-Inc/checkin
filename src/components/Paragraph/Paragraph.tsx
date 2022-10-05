import { TypographyProps } from "@mui/material";
import React from "react";
import { TypographyStyled } from "./Paragraph.styles";

const Paragraph = (props: TypographyProps) => (
  <TypographyStyled paragraph className={props.className}>
    {props.children}
  </TypographyStyled>
);

export default Paragraph;

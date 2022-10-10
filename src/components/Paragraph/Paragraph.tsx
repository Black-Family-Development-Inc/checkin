import { TypographyProps } from "@mui/material";
import React from "react";
import { TypographyStyled } from "./Paragraph.styles";

const Paragraph = ({ children }: TypographyProps) => (
  <TypographyStyled paragraph>{children}</TypographyStyled>
);

export default Paragraph;

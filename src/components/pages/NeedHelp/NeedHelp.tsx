import React from "react";
import {
  ButtonStyled,
  NeedHelpSubTitle,
  NeedHelpTitle,
} from "./NeedHelp.styles";

const NeedHelp = () => {
  return (
    <>
      <NeedHelpTitle>Not sure what you need help with?</NeedHelpTitle>
      <NeedHelpSubTitle>
        Take a universal assessment to find out.
      </NeedHelpSubTitle>
      <ButtonStyled> Universal Assessment </ButtonStyled>
    </>
  );
};

export default NeedHelp;

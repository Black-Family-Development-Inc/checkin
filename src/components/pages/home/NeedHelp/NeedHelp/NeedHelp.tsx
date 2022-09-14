import React from "react";
import {
  ButtonStyled,
  NeedHelpSubTitle,
  NeedHelpTitle,
} from "./NeedHelp.styles";
import { ContentfulHomePage } from '../../../../../pages/IndexPage-types';

const NeedHelp = ({ universalBottomSubHeader, universalBottomHeader }: ContentfulHomePage) => {
  return (
    <>
      <NeedHelpTitle>{universalBottomHeader}</NeedHelpTitle>
      <NeedHelpSubTitle>
        {universalBottomSubHeader}
      </NeedHelpSubTitle>
      <ButtonStyled> Universal Assessment </ButtonStyled>
    </>
  );
};

export default NeedHelp;

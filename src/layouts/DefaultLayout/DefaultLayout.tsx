import React, { ReactNode } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import {
  LayoutContainerStyled,
  LayoutContainerWrapper,
} from "./DefaultLayout.styles";

type DefaultLayoutPropTypes = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutPropTypes) => {
  return (
    <>
      <NavBar />
      <LayoutContainerWrapper>
        <LayoutContainerStyled>{children}</LayoutContainerStyled>
      </LayoutContainerWrapper>
      <Footer />
    </>
  );
};

export default DefaultLayout;

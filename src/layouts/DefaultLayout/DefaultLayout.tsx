import React, { ReactNode } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { LayoutContainerStyled } from "./DefaultLayout.styles";

type DefaultLayoutPropTypes = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutPropTypes) => {
  return (
    <>
      <NavBar />
      <LayoutContainerStyled>{children}</LayoutContainerStyled>
      <Footer />
    </>
  );
};

export default DefaultLayout;

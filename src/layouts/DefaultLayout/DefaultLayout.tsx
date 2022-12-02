import React, { ReactNode } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import {
  LayoutContainerStyled,
  LayoutContainerWrapper,
} from "./DefaultLayout.styles";

type DefaultLayoutPropTypes = {
  children: ReactNode;
  variant?: "home" | "nav-button" | "error";
};

const DefaultLayout = ({
  children,
  variant = "home",
}: DefaultLayoutPropTypes) => {
  return (
    <>
      <NavBar />
      <LayoutContainerWrapper className={variant}>
        <LayoutContainerStyled>{children}</LayoutContainerStyled>
      </LayoutContainerWrapper>
      <Footer />
    </>
  );
};

export default DefaultLayout;

import React, { ReactNode } from "react";
import Body from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import PageContents from "../../components/PageContents/PageContents";
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
    <Body>
      <PageContents>
        <NavBar />
        <LayoutContainerWrapper className={variant}>
          <LayoutContainerStyled>{children}</LayoutContainerStyled>
        </LayoutContainerWrapper>
      </PageContents>
      <Footer />
    </Body>
  );
};

export default DefaultLayout;

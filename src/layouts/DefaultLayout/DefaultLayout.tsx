import React, { ReactNode } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

type DefaultLayoutPropTypes = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutPropTypes) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;

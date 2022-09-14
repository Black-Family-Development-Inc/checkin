import React from "react";
import { Header } from "../../components/Header";
import { HR } from "../../components/HR";
import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";

const FaqPage = () => {
  return (
    <DefaultLayout>
      <Header text="Frequently Asked Questions" />
      <HR />
    </DefaultLayout>
  );
};

export default FaqPage;

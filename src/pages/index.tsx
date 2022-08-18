import * as React from "react";
import Accordion from "../components/Accordion/Accordion";
import Button from "../components/Button/Button";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";

const IndexPage = () => {
  return (
    <>
      <DefaultLayout>
        <Button />
        <Accordion />
      </DefaultLayout>
    </>
  );
};

export default IndexPage;

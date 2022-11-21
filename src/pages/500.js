import React from "react";
import { ErrorComp } from "../components/ErrorComp";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";

const serverError = () => {
  return (
    <main>
      <title>Server Error</title>
      <DefaultLayout>
        <ErrorComp />
      </DefaultLayout>
    </main>
  );
};

export default serverError;

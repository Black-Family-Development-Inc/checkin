import React from "react";
import { ErrorComp } from "../components/ErrorComp";

const serverError = () => {
  return (
    <main>
      <title>Server Error</title>
      <DefaultLayout variant="error">
        <ErrorComp />
      </DefaultLayout>
    </main>
  );
};

export default serverError;

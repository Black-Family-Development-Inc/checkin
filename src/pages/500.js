import React from "react";
import { ErrorComp } from "../components/ErrorComp";

const serverError = () => {
  return (
    <main>
      <title>Server Error</title>
      <ErrorComp />
    </main>
  );
};

export default serverError;

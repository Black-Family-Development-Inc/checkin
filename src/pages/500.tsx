import React from "react";
import ErrorPage from "./components/error";

const serverError = () => {
  return (
    <main>
      <title>Server Error</title>
      <ErrorPage />
    </main>
  );
};

export default serverError;

import * as React from "react";
import { ErrorComp } from "../components/ErrorComp";

const NotFoundPage = () => {
  return (
    <main>
      <title>Page Not found</title>
      <DefaultLayout variant="error">
        <ErrorComp />
      </DefaultLayout>
    </main>
  );
};

export default NotFoundPage;

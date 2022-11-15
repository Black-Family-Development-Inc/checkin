import React from "react";
import { Error } from "../../../components/Error";
import DefaultLayout from "../../../layouts/DefaultLayout/DefaultLayout";

const ErrorPage = () => {
  return (
    <DefaultLayout>
      <Error />
    </DefaultLayout>
  );
};

export default ErrorPage;

import { Link } from "gatsby";
import * as React from "react";
import Accordion from "../components/Accordion/Accordion";
import Button from "../components/Button/Button";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";

type WelcomePropsType = {
  name: string;
};

const Welcome = (props: WelcomePropsType) => {
  return <h1>Hello, {props.name}</h1>;
};

const IndexPage = () => {
  return (
    <>
      <DefaultLayout>
        <Welcome name="World" />
        <Link to="http://www.google.com">
          <Button />
        </Link>
        <Accordion />
      </DefaultLayout>
    </>
  );
};

export default IndexPage;

import React from "react";
import { BodyStyled } from "./Body.styles";

const Body = (props: any) => {
  return <BodyStyled>{props.children}</BodyStyled>;
};

export default Body;

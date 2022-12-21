import React from "react";
import { BodyStyled } from "./Body.styles";
import { BodyPropTypes } from "./Body-types";

const Body = ({ children }: BodyPropTypes) => {
  return <BodyStyled>{children}</BodyStyled>;
};

export default Body;

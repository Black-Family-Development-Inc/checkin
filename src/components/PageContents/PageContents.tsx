import React from "react";
import { StyledPageContents } from "./PageContents.styles";

const PageContents = (props: any) => {
  return <StyledPageContents>{props.children}</StyledPageContents>;
};

export default PageContents;

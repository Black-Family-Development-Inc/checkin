import React from "react";
import { StyledPageContents } from "./PageContents.styles";
import { PageContentPropTypes } from "./PageContents-types";

const PageContents = ({ children }: PageContentPropTypes) => {
  return <StyledPageContents>{children}</StyledPageContents>;
};

export default PageContents;

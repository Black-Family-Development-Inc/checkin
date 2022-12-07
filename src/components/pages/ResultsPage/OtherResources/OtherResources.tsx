import { Box } from "@mui/material";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import React from "react";
import { Header } from "../../../Header";
import { OtherResourcesContainer } from "./OtherResources.styles";
import { OtherResourcesTypes } from "./OtherResources-types";

const OtherResources = ({
  otherResourcesHeader,
  otherResourcesDescription,
}: OtherResourcesTypes) => {
  return (
    <OtherResourcesContainer>
      <Header variant="h2" text={otherResourcesHeader} />
      <Box sx={{ margin: "12px 0px 36px" }}>
        {renderRichText(otherResourcesDescription)}
      </Box>
    </OtherResourcesContainer>
  );
};

export default OtherResources;

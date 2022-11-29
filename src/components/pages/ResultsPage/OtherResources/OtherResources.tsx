import React from "react";
import { Header } from "../../../Header";
import { Paragraph } from "../../../Paragraph";
import { OtherResourcesContainer } from "./OtherResources.styles";
import { OtherResourcesTypes } from "./OtherResources-types";

const OtherResources = ({
  otherResourcesHeader,
  otherResourcesDescription,
}: OtherResourcesTypes) => {
  return (
    <OtherResourcesContainer>
      <Header variant="h2" text={otherResourcesHeader} />
      <Paragraph sx={{ margin: "12px 0px 36px" }}>
        {otherResourcesDescription.raw}
      </Paragraph>
    </OtherResourcesContainer>
  );
};

export default OtherResources;

import React from "react";
import { Header } from "../../../Header";
import { OtherResourcesTypes } from "./OtherResources-types";
import { Paragraph } from "../../../Paragraph";

const OtherResources = ({
  otherResourcesHeader,
  otherResourcesDescription,
}: OtherResourcesTypes) => {
  return (
    <>
      <Header variant="h2" text={otherResourcesHeader} />
      <Paragraph sx={{ margin: "12px 0px 36px" }}>
        {otherResourcesDescription.raw}
      </Paragraph>
    </>
  );
};

export default OtherResources;

import { Typography } from "@mui/material";
import React from "react";
import { Header } from "../../../Header";
import { OtherResourcesTypes } from "./OtherResources-types";

const OtherResources = ({
  otherResourcesHeader,
  otherResourcesDescription,
}: OtherResourcesTypes) => {
  return (
    <>
      <Header variant="h2" text={otherResourcesHeader} />
      <Typography paragraph>{otherResourcesDescription.raw}</Typography>
    </>
  );
};

export default OtherResources;

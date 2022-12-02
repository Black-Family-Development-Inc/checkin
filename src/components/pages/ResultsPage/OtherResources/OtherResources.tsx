import { Box } from "@mui/material";
import React from "react";
import { breakpoints } from "../../../../styles/theme";
import { Header } from "../../../Header";
import { Paragraph } from "../../../Paragraph";
import { OtherResourcesTypes } from "./OtherResources-types";

const OtherResources = ({
  otherResourcesHeader,
  otherResourcesDescription,
}: OtherResourcesTypes) => {
  return (
    <Box
      sx={{
        paddingBottom: "80px",
        [`@media(min-width: ${breakpoints.tablet}px)`]: {
          paddingBottom: "88px",
        },
        [`@media(min-width: ${breakpoints.desktop}px)`]: {
          paddingBottom: "104px",
        },
      }}
    >
      <Header variant="h2" text={otherResourcesHeader} />
      <Paragraph sx={{ margin: "12px 0 0" }}>
        {otherResourcesDescription.raw}
      </Paragraph>
    </Box>
  );
};

export default OtherResources;

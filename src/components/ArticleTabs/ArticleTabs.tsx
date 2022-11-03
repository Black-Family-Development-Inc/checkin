import { TabContext, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React, { useState } from "react";
import { TabHRStyled, TabsListStyled } from "./ArticleTabs.styles";

const ArticleTabs = ({}) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState("0");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSelectedTabIndex(newValue);
  };

  return (
    <Box sx={{ margin: "300px 0", justifyContent: "space-around" }}>
      <TabContext value={selectedTabIndex}>
        <TabsListStyled
          onChange={handleChange}
          aria-label="articles selection tabs"
        >
          <Tab label="Anxiety" value="0" />
          <Tab label="Depression" value="1" />
          <Tab label="Substance Use" value="2" />
        </TabsListStyled>

        <TabHRStyled />

        <TabPanel value="0">Anxiety Articles</TabPanel>
        <TabPanel value="1">Depression Articles</TabPanel>
        <TabPanel value="2">Substance Use Articles</TabPanel>
      </TabContext>
    </Box>
  );
};

export default ArticleTabs;

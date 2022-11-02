import { Box, Tab, Typography } from "@mui/material";
import React, { useState } from "react";
import { TabHRStyled, TabsContainerStyled } from "./ArticleTabs.styles";

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  selectedTabIndex: number;
};

const TabPanel = (props: TabPanelProps) => {
  const { children, selectedTabIndex, index, ...other } = props;
  return (
    <Box
      role="tabpanel"
      hidden={selectedTabIndex !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`accessibilty placeholder ${index}`}
      {...other}
    >
      {selectedTabIndex === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
};

const ArticleTabs = ({}) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTabIndex(newValue);
  };
  return (
    <Box sx={{ margin: "300px 0", justifyContent: "space-around" }}>
      <TabsContainerStyled
        value={selectedTabIndex}
        onChange={handleChange}
        aria-label="accessibilty placeholder"
      >
        <Tab label="Anxiety" />
        <Tab label="Depression" />
        <Tab label="Substance Use" />
      </TabsContainerStyled>

      <TabHRStyled />

      <TabPanel index={0} selectedTabIndex={selectedTabIndex}>
        Stuff 1
      </TabPanel>
      <TabPanel index={1} selectedTabIndex={selectedTabIndex}>
        Stuff 2
      </TabPanel>
      <TabPanel index={2} selectedTabIndex={selectedTabIndex}>
        Stuff 3
      </TabPanel>
    </Box>
  );
};

export default ArticleTabs;

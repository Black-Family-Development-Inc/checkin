import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

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
    <Box sx={{ borderBottom: 1, borderColor: "divider", margin: "300px 0" }}>
      <Tabs
        value={selectedTabIndex}
        onChange={handleChange}
        aria-label="accessibilty placeholder"
        centered
      >
        <Tab label="Anxiety" />
        <Tab label="Depression" />
        <Tab label="Substance Use" />
      </Tabs>

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

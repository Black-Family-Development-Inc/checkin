import { TabContext, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React, { useState } from "react";
import { TabHRStyled, TabsListStyled } from "./ArticleTabs.styles";

type ArticleTabsProps = {
  allArticles: object;
  assessmentType: string;
};

const ArticleTabs = ({ allArticles, assessmentType }: ArticleTabsProps) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(assessmentType);
  console.log(allArticles);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSelectedTabIndex(newValue);
  };

  return (
    <Box sx={{ margin: "24px 0", justifyContent: "space-around" }}>
      <TabContext value={selectedTabIndex}>
        <TabsListStyled
          onChange={handleChange}
          aria-label="articles selection tabs"
          sx={{ minHeight: "30px" }}
        >
          <Tab label="Anxiety" value="GAD-7" />
          <Tab label="Depression" value="PHQ-9" />
          <Tab label="Substance Use" value="DAST-10" />
        </TabsListStyled>

        <TabHRStyled />

        <TabPanel value="GAD-7">Anxiety Articles</TabPanel>
        <TabPanel value="PHQ-9">Depression Articles</TabPanel>
        <TabPanel value="DAST-10">Substance Use Articles</TabPanel>
      </TabContext>
    </Box>
  );
};

export default ArticleTabs;

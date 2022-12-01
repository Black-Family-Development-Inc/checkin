import { Box, Tab } from "@mui/material";
import React, { useState } from "react";
import ArticleList from "../ArticleList/ArticleList";
import { TabHRStyled, TabsStyled } from "./ArticleTabs.styles";

type TabPanelProps = {
  children?: React.ReactNode;
  selectedTab: string;
  tab: string;
};

function TabPanel(props: TabPanelProps) {
  const { children, tab, selectedTab, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={tab !== selectedTab}
      id={`simple-tabpanel-${selectedTab}`}
      {...other}
    >
      {tab === selectedTab && <Box sx={{ padding: "16px 0" }}>{children}</Box>}
    </Box>
  );
}

const ArticleTabs = ({ allArticles, assessmentType }: ArticleTabsProps) => {
  const [selectedTab, setSelectedTabIndex] = useState(assessmentType);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSelectedTabIndex(newValue);
  };

  return (
    <Box sx={{ marginTop: "32px" }}>
      <TabsStyled
        value={selectedTab}
        onChange={handleChange}
        sx={{ minHeight: "32px" }}
      >
        {allArticles &&
          allArticles.map((tab) => {
            return (
              <Tab
                label={tab.label}
                value={tab.type}
                key={`tab-${tab.label}`}
              />
            );
          })}
      </TabsStyled>

      <TabHRStyled />

      {allArticles &&
        allArticles.map((article, i: number) => {
          return (
            <TabPanel
              selectedTab={selectedTab}
              tab={article.type}
              key={`article-${article.type} - ${i}`}
            >
              <ArticleList articles={article.articles} icon={article.icon} />
            </TabPanel>
          );
        })}
    </Box>
  );
};

export default ArticleTabs;

import { TabContext, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React, { useState } from "react";
import ArticleList from "../ArticleList/ArticleList";
import { TabHRStyled, TabsListStyled } from "./ArticleTabs.styles";

const ArticleTabs = ({ allArticles, assessmentType }: ArticleTabsProps) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(assessmentType);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSelectedTabIndex(newValue);
  };

  return (
    <Box sx={{ margin: "24px 0" }}>
      <TabContext value={selectedTabIndex}>
        <TabsListStyled
          onChange={handleChange}
          aria-label="articles selection tabs"
          sx={{ minHeight: "30px" }}
        >
          {allArticles.map((tab) => {
            return (
              <Tab
                label={tab.label}
                value={tab.type}
                key={`tab-${tab.label}`}
              />
            );
          })}
        </TabsListStyled>

        <TabHRStyled />

        {allArticles.map((article) => {
          return (
            <TabPanel value={article.type} key={`article-${article.type}`}>
              <ArticleList articles={article.articles} icon={article.icon} />
            </TabPanel>
          );
        })}
      </TabContext>
    </Box>
  );
};

export default ArticleTabs;

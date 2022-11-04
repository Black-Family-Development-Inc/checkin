import { TabContext, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React, { useState } from "react";
import ArticleList from "../ArticleList/ArticleList";
import { TabHRStyled, TabsListStyled } from "./ArticleTabs.styles";
import { ArticleTabsProps } from "./ArticleTabs-types";

const ArticleTabs = ({
  allArticles,
  assessmentType,
  tabAnxiety,
  tabDepression,
  tabSubstanceUse,
}: ArticleTabsProps) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(assessmentType);
  const anxietyArticles = allArticles.filter(
    (articles) => articles.type === "GAD-7",
  );
  const depressionArticles = allArticles.filter(
    (articles) => articles.type === "PHQ-9",
  );
  const substanceUseArticles = allArticles.filter(
    (articles) => articles.type === "DAST-10",
  );

  console.log(anxietyArticles);

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
          <Tab label={tabAnxiety.label} value={tabAnxiety.type} />
          <Tab label={tabDepression.label} value={tabDepression.type} />
          <Tab label={tabSubstanceUse.label} value={tabSubstanceUse.type} />
        </TabsListStyled>

        <TabHRStyled />

        <TabPanel value={tabAnxiety.type}>
          <ArticleList articles={anxietyArticles[0].articles} />
        </TabPanel>
        <TabPanel value={tabDepression.type}>
          <ArticleList articles={depressionArticles[0].articles} />
        </TabPanel>
        <TabPanel value={tabSubstanceUse.type}>
          <ArticleList articles={substanceUseArticles[0].articles} />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default ArticleTabs;

import { TabContext, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React, { useState } from "react";
import ArticleList from "../ArticleList/ArticleList";
import { ArticleGroup } from "../pages/ResultsPage/Resources/Resources-types";
import { TabHRStyled, TabsListStyled } from "./ArticleTabs.styles";

type ArticleTabsProps = {
  allArticles: object;
  assessmentType: string;
  tabAnxiety: ArticleGroup;
  tabDepression: ArticleGroup;
  tabSubstanceUse: ArticleGroup;
};

const ArticleTabs = ({
  allArticles,
  assessmentType,
  tabAnxiety,
  tabDepression,
  tabSubstanceUse,
}: ArticleTabsProps) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(assessmentType);
  const anxietyArticle = allArticles[0].articles;
  const depressionArticle = allArticles[1].articles;
  const substanceUseArticle = allArticles[2].articles;

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
          <ArticleList articles={anxietyArticle} />
        </TabPanel>
        <TabPanel value={tabDepression.type}>
          <ArticleList articles={depressionArticle} />
        </TabPanel>
        <TabPanel value={tabSubstanceUse.type}>
          <ArticleList articles={substanceUseArticle} />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default ArticleTabs;

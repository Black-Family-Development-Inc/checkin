import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import ArticleList from "../../components/ArticleList/ArticleList";
import { Header } from "../../components/Header";
import { HR } from "../../components/HR";
import { Paragraph } from "../../components/Paragraph";

const ArticlesPage = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const articles = {
    Anxiety: [
      {
        articleTitle: "Anxiety Article Title",
        articleSubTitle: "Anxiety Article Subtital",
        articleType: "Anxiety - Blue",
        articleLink: "google.com",
      },
    ],
    Depression: [
      {
        articleTitle: "Depression Article Title",
        articleSubTitle: "Depression Article Subtitle",
        articleType: "Depression - Red",
        articleLink: "google.com",
      },
    ],
    "Substance Use": [
      {
        articleTitle: "Substance Use Article Title",
        articleSubTitle: "Substance Use Article Subtitle",
        articleType: "Substance Use - Green",
        articleLink: "google.com",
      },
    ],
  };

  return (
    <>
      <Header text="All Articles" />
      <HR />
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Paragraph>

      <Tabs
        value={currentTab}
        onChange={(_e, selectedTab) => setCurrentTab(selectedTab)}
      >
        {Object.keys(articles).map((label) => (
          <Tab key={label} label={label} />
        ))}
      </Tabs>

      {Object.keys(articles).map((label, idx) => {
        const currentTabArticles = articles[label as keyof typeof articles];
        return (
          <Box hidden={currentTab !== idx}>
            <ArticleList key={label} articles={currentTabArticles} />
          </Box>
        );
      })}
    </>
  );
};

export default ArticlesPage;

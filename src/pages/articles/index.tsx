import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { Header } from "../../components/Header";
import { HR } from "../../components/HR";
import { Paragraph } from "../../components/Paragraph";

const ArticlesPage = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const tabLabels = ["Anxiety", "Depression", "Substance Use"];

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
        onChange={(e, selectedTab) => setCurrentTab(selectedTab)}
      >
        {tabLabels.map((label) => (
          <Tab key={label} label={label} />
        ))}
      </Tabs>

      {tabLabels.map((label, idx) => {
        return (
          <div key={label} hidden={currentTab !== idx}>
            {label}
          </div>
        );
      })}
    </>
  );
};

export default ArticlesPage;

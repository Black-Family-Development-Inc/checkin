import "./src/styles/globalStyles.css";
import { Script } from "gatsby";
import React, { ReactNode } from "react";

export const wrapPageElement = ({ element }: { element: ReactNode }) => {
  return (
    <>
      {element}
      <Script
        type="text/javascript"
        // eslint-disable-next-line max-len
        src="https://detroitlabs.jira.com/s/d41d8cd98f00b204e9800998ecf8427e-T/1jmxwi/b/8/c95134bc67d3a521bb3f4331beb9b804/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en-US&collectorId=85292432"
      />
    </>
  );
};

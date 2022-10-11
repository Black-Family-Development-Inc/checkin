import SquareIcon from "@mui/icons-material/Square";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { ArticleType } from "./Articles-types";

const ArticleList = ({ articles }: { articles: ArticleType[] }) => {
  const getArticleColorCode = (articleType: string): string =>
    articleType.split("-").pop() || "";
  return (
    <List>
      {articles.map(
        (
          { articleLink, articleSubTitle, articleTitle, articleType },
          index,
        ) => {
          return (
            <Link
              key={articleTitle + index}
              href={articleLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItem>
                <ListItemIcon>
                  <SquareIcon
                    sx={{ color: getArticleColorCode(articleType) }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={articleTitle}
                  secondary={`${articleSubTitle} - This articles color code is ${articleType}`}
                />
              </ListItem>
              {articles.length !== index + 1 && <Divider />}
            </Link>
          );
        },
      )}
    </List>
  );
};

export default ArticleList;

import { SquareRounded } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import React from "react";
import {
  LinkStyled,
  ListItemIconStyled,
  ListItemStyled,
  ListItemTextStyled,
  ListStyled,
} from "./ArticleList.styles";
import { ArticleType } from "./Articles-types";

const ArticleList = ({ articles }: { articles: ArticleType[] }) => {
  const getArticleColorCode = (articleType: string): string =>
    articleType.split("-").pop() || "";

  return (
    <ListStyled>
      {articles.map(
        (
          { articleLink, articleSubTitle, articleTitle, articleType },
          index,
        ) => {
          return (
            <LinkStyled
              key={articleTitle + index}
              to={articleLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemStyled>
                <ListItemIconStyled>
                  <SquareRounded
                    sx={{ color: getArticleColorCode(articleType) }}
                  />
                </ListItemIconStyled>
                <ListItemTextStyled
                  primary={articleTitle}
                  secondary={`${articleSubTitle} - This articles color code is ${articleType}`}
                />
              </ListItemStyled>
              {articles.length !== index + 1 && <Divider />}
            </LinkStyled>
          );
        },
      )}
    </ListStyled>
  );
};

export default ArticleList;

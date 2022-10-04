import React from "react";
import { StyledListItem } from "./ArticleList.styles";
import { ArticleType } from "./Articles-types";

const ArticleList = ({ articles }: { articles: ArticleType[] }) => {
  const getArticleColorCode = (articleType: string): string =>
    articleType.split("-").pop() || "";
  return (
    <ul>
      {articles.map(
        (
          { articleLink, articleSubTitle, articleTitle, articleType },
          index,
        ) => {
          return (
            <a
              id={articleTitle}
              href={articleLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledListItem bgColor={getArticleColorCode(articleType)}>
                {articleTitle}
                <br />
                {articleSubTitle}
                <br />
                This articles color code is {articleType}
              </StyledListItem>
              {articles.length !== index + 1 && <hr />}
            </a>
          );
        },
      )}
    </ul>
  );
};

export default ArticleList;

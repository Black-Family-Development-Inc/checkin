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
              key={articleTitle + index}
              href={articleLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledListItem bgColor={getArticleColorCode(articleType)}>
                {articleTitle}
                <br />
                {articleSubTitle}
                {
                  articleType && (
                    <>
                      <br />
                      `This articles color code is ${articleType}`
                    </>
                  )
                  // this code block {} should be removed once this component is merged with results pages, starting at "articleType"
                }
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

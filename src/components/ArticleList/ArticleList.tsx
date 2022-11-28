import Divider from "@mui/material/Divider";
import React from "react";
import {
  LinkStyled,
  ListItemIconStyled,
  ListItemStyled,
  ListItemTextStyled,
  ListStyled,
} from "./ArticleList.styles";

const ArticleList = ({ articles, icon }: ArticleListType) => {
  return (
    <ListStyled>
      {articles.map(({ link, title, source }, index) => {
        return (
          <LinkStyled
            key={title + index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListItemStyled>
              <ListItemIconStyled>
                <img src={icon.url} alt="icon" />
              </ListItemIconStyled>
              <ListItemTextStyled
                primary={title}
                secondary={`${source} -`}
                title={title}
              />
            </ListItemStyled>
            {articles.length !== index + 1 && <Divider />}
          </LinkStyled>
        );
      })}
    </ListStyled>
  );
};

export default ArticleList;

export type Articles = {
  title: string;
  source: string;
  link: string;
};

export type AllArticles = {
  type: string;
  articles: Articles[];
};

export type ArticlesPagePropTypes = {
  contentfulAllArticlesPage: {
    heading: string;
    description: string;
    allArticles: AllArticles[];
  };
};

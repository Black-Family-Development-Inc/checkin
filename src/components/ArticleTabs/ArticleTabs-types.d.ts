type ArticleTabsProps = {
  allArticles: AllArticles[];
  assessmentType: string;
};

type AllArticles = {
  label: string;
  type: string;
  articles: Article[];
  icon: {
    url: string;
  };
};

type Article = {
  link: string;
  title: string;
  source: string;
};

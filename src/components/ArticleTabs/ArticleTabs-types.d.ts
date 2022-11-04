import { ArticleGroup } from "../pages/ResultsPage/Resources/Resources-types";

type ArticleTabsProps = {
  allArticles: AllArticles[];
  assessmentType: string;
  tabAnxiety: ArticleGroup;
  tabDepression: ArticleGroup;
  tabSubstanceUse: ArticleGroup;
};

type AllArticles = {
  type: string;
  articles: ArticleType[];
};

type ArticleType = {
  link: string;
  title: string;
  source: string;
};
